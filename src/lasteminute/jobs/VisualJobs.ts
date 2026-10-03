import { BaseJob } from "./BaseJob";
import type { IJob, IAgent } from "../core/types";
import { Physics, type Vector2 } from "../engine/Physics";
import { isVisuallyImpacting } from "../core/dom";


/**
 * Utility for robust CSS pixel parsing and manipulation.
 */
const StyleUtils = {
    parse(val: string): number {
        const n = parseFloat(val);
        return isNaN(n) ? 0 : n;
    },
    toPx(val: number): string {
        return `${val}px`;
    }
};

/**
 * Reconciles Text Node Content with iterative typing physics.
 */
export class TextNodeJob extends BaseJob {
    public readonly importance = 30;
    private passingTime: number = 0;
    private charactersPerSecond: number = 1;
    private static readonly CHAR_VELOCITY_MS = 40; // Speed of "keystrokes"

    constructor(public current: Text, public target: Text) { super(); }

    getLocation() {
        const rect = this.getCaretRect()
        if (rect) return {
            x: rect.right,
            y: rect.bottom
        }
        const bounds = this.getElementBounds(this.target, true);
        // Target the end of the intended text node for the I-beam travel effect
        return bounds ? { x: bounds.right, y: bounds.top + bounds.height / 2 } : undefined;
    }


    equalTo(other: IJob): boolean {
        return other instanceof TextNodeJob && this.current === other.current && this.target === other.target;
    }

    explode(callback?: () => void): void {
        super.explode(callback);

        const pureCurrent = this.current.textContent || '';
        const pureTarget = this.target.textContent || '';

        if (pureCurrent !== pureTarget) {
            if (this.progress >= 1)
                this.progress = 0;
            return
        }
        this.progress = 1;
    }

    public getCaretRect(): DOMRect | null {
        try {
            const range = document.createRange();
            const len = this.current.textContent?.length || 0;
            // Set range to the very end of the current text node
            range.setStart(this.current, len);
            range.setEnd(this.current, len);

            const rect = range.getBoundingClientRect();
            // If the rect has no width (common for cursor positions), 
            // we give it a virtual 2px width for the overlay to render.
            if (rect.width === 0) {
                return {
                    ...rect.toJSON(),
                    width: 2
                } as DOMRect;
            }
            return rect;
        } catch (e) {
            return null;
        }
    }

    step(dt: number, agent?: IAgent): void {
        const targetText = this.target.textContent || '';
        let currentText = this.current.textContent || '';

        if (agent) {

            Physics.stepTowards(agent, this.getLocation(), dt);

            this.passingTime += dt;

            var updatePerStep = Math.ceil(this.passingTime * this.charactersPerSecond / 1000);

            this.passingTime -= updatePerStep * 1000 / this.charactersPerSecond;


            if (updatePerStep <= 0) return;

            let commonPrefixLength = 0;
            const minLen = Math.min(currentText.length, targetText.length);
            for (let i = 0; i < minLen; i++) {
                if (currentText[i] === targetText[i]) commonPrefixLength++; else break;
            }

            let speedCap = targetText.length / 5 + 10;

            for (var i = 0; i < updatePerStep; i++) {
                if (currentText !== targetText) {
                    if (currentText.length > commonPrefixLength) {
                        currentText = currentText.substring(0, currentText.length - 1);
                        if (this.charactersPerSecond < 100) this.charactersPerSecond += 10;
                    } else if (currentText.length < targetText.length) {
                        let char = targetText[currentText.length];
                        if (char !== undefined) {
                            currentText += char;
                            commonPrefixLength += 1;
                            if (this.charactersPerSecond < speedCap) this.charactersPerSecond += Math.random() * 3 + 5;
                            else this.charactersPerSecond = speedCap;
                            if ('tyghbn '.includes(char)) {
                                this.charactersPerSecond *= 0.9;
                            }
                            if ('1234567890-=qwertyuiop[]z/x.c,vmbn'.includes(char)) {
                                this.charactersPerSecond *= 0.98;
                            }
                        }
                    }
                }
            }
            this.progress = commonPrefixLength / (targetText.length + 1) * 0.9 + 0.1;
            this.log(`${this.charactersPerSecond} : ${currentText.slice(this.current.length - 5)}`);
            this.current.textContent = currentText;
        } else {
            this.current.textContent = targetText;
        }

        if (this.current.textContent === targetText) {
            this.progress = 1;
        }
    }

}

/**
 * Reconciles Element Attributes (id, class, custom data).
 */
export class AttributeJob extends BaseJob {
    public readonly importance = 2;
    constructor(public current: Element, public target: Element) { super(); }

    getLocation() {
        if (!(this.target instanceof HTMLElement) || !isVisuallyImpacting(this.target)) return undefined;
        const bounds = this.getElementBounds(this.target, true);
        if (!bounds || (bounds.width === 0 && bounds.height === 0)) return undefined;
        return { x: bounds.left + bounds.width / 2, y: bounds.top + bounds.height / 2 };
    }

    equalTo(other: IJob): boolean {
        return other instanceof AttributeJob && this.current === other.current && this.target === other.target;
    }

    explode(callback?: () => void): void {
        super.explode(callback);

        const targetAttributes = this.target.attributes;
        for (let i = 0; i < targetAttributes.length; i++) {
            const attr = targetAttributes[i];
            if (!attr || attr.name === 'style') continue;

            if (this.current.getAttribute(attr.name) !== attr.value) {
                if (this.progress >= 1)
                    this.progress = 0;
                return;
            }
        }
        this.progress = 1;
    }

    step(dt: number, agent?: IAgent): void {
        if (agent) Physics.stepTowards(agent, this.getLocation(), dt);

        const targetAttributes = this.target.attributes;
        for (let i = 0; i < targetAttributes.length; i++) {
            const attr = targetAttributes[i];
            if (!attr || attr.name === 'style') continue;
            this.current.setAttribute(attr.name, attr.value);
            this.log(`${attr.name} = ${attr.value}`);
            this.progress = 0.3;
        }
        this.progress = 1;
    }
}

/**
 * Reconciles Geometries (Top/Left Position).
 */
export class PositionJob extends BaseJob {
    public readonly importance = 200;
    constructor(public current: HTMLElement, public target: HTMLElement) { super(); }

    getLocation() {
        if (!isVisuallyImpacting(this.target)) return undefined;
        const bounds = this.getElementBounds(this.current);
        if (!bounds || (bounds.width === 0 && bounds.height === 0)) return undefined;
        return { x: bounds.left + bounds.width / 2, y: bounds.top + bounds.height / 2 };
    }

    equalTo(other: IJob): boolean {
        return other instanceof PositionJob && this.current === other.current && this.target === other.target;
    }

    explode(callback?: () => void): void {
        super.explode(callback);
        const cBounds = this.getElementBounds(this.current);
        const tBounds = this.getElementBounds(this.target, true);
        if (cBounds && tBounds) {
            if (Math.abs(cBounds.top - tBounds.top) > 2.5 || Math.abs(cBounds.left - tBounds.left) > 2.5) {
                if (this.progress >= 1)
                    this.progress = 0;
            }
            return
        }
        this.progress = 1;
    }

    private currentLeft: number = 0;
    private currentTop: number = 0;
    private currentWidth: number = 0;
    private currentHeight: number = 0;

    public getOperationRect() {
        if (this.currentWidth > 0 && this.currentHeight > 0) {
            return {
                left: this.currentLeft,
                top: this.currentTop,
                width: this.currentWidth,
                height: this.currentHeight
            } as DOMRect;
        }
        return null;
    }

    step(dt: number, agent?: IAgent): void {
        const tBounds = this.getElementBounds(this.target, true);
        const cBounds = this.getElementBounds(this.current);
        if (!tBounds || !cBounds) return;

        this.currentWidth = cBounds.width;
        this.currentHeight = cBounds.height;

        if (agent && agent.isWorking) {
            const targetLocation: Vector2 = {
                x: tBounds.left + cBounds.width / 2,
                y: tBounds.top + cBounds.height / 2
            }
            Physics.stepTowards(agent, targetLocation, dt);
            const nextLeft = agent.x - cBounds.width / 2;
            const nextTop = agent.y - cBounds.height / 2;
            this.current.style.left = StyleUtils.toPx(nextLeft);
            this.current.style.top = StyleUtils.toPx(nextTop);
            this.currentLeft = nextLeft;
            this.currentTop = nextTop;

            this.log(`(${Math.round(nextLeft)}, ${Math.round(nextTop)})`);

            if (Math.abs(nextLeft - tBounds.left) < 2 && Math.abs(nextTop - tBounds.top) < 2) {
                this.current.style.left = StyleUtils.toPx(tBounds.left);
                this.current.style.top = StyleUtils.toPx(tBounds.top);
                this.currentLeft = tBounds.left;
                this.currentTop = tBounds.top;
                this.progress = 1;
            } else {
                this.progress = 0.3;
            }
        } else {
            this.current.style.left = StyleUtils.toPx(tBounds.left);
            this.current.style.top = StyleUtils.toPx(tBounds.top);
            this.currentLeft = tBounds.left;
            this.currentTop = tBounds.top;
            this.progress = 1;
        }
    }

}

/**
 * Reconciles Geometries (Width/Height Size).
 */
export class SizeJob extends BaseJob {
    public readonly importance = 100;
    private currentLeft: number = 0;
    private currentTop: number = 0;
    private currentWidth: number = 0;
    private currentHeight: number = 0;

    constructor(public current: HTMLElement, public target: HTMLElement) { super(); }

    getLocation() {
        if (!isVisuallyImpacting(this.target)) return undefined;
        const bounds = this.getElementBounds(this.current);
        if (!bounds || (bounds.width === 0 && bounds.height === 0)) return undefined;
        return { x: bounds.right, y: bounds.bottom };
    }

    public getOperationRect() {
        if (this.currentWidth > 0 && this.currentHeight > 0) {
            return {
                left: this.currentLeft,
                top: this.currentTop,
                width: this.currentWidth,
                height: this.currentHeight
            } as DOMRect;
        }
        return null;
    }

    equalTo(other: IJob): boolean {
        return other instanceof SizeJob && this.current === other.current && this.target === other.target;
    }

    explode(callback?: () => void): void {
        super.explode(callback);
        const cBounds = this.getElementBounds(this.current);
        const tBounds = this.getElementBounds(this.target, true);

        if (cBounds && tBounds) {
            if (Math.abs(cBounds.width - tBounds.width) > 1.5 || Math.abs(cBounds.height - tBounds.height) > 1.5) {
                if (this.progress >= 1)
                    this.progress = 0;
                return
            } else {
                this.current.style.width = StyleUtils.toPx(tBounds.width);
                this.current.style.height = StyleUtils.toPx(tBounds.height);
            }
        }
        this.progress = 1;
    }

    step(dt: number, agent?: IAgent): void {
        const tBounds = this.getElementBounds(this.target, true);
        const cBounds = this.getElementBounds(this.current);

        if (!tBounds || !cBounds) return;

        this.currentLeft = cBounds.left;
        this.currentTop = cBounds.top;

        if (agent && agent.isWorking) {
            const targetLocation: Vector2 = {
                x: cBounds.left + tBounds.width,
                y: cBounds.top + tBounds.height
            }
            Physics.stepTowards(agent, targetLocation, dt);
            const nextWidth = Math.max(1, agent.x - cBounds.left);
            const nextHeight = Math.max(1, agent.y - cBounds.top);
            this.current.style.width = StyleUtils.toPx(nextWidth);
            this.current.style.height = StyleUtils.toPx(nextHeight);
            this.currentWidth = nextWidth;
            this.currentHeight = nextHeight;

            this.log(`${Math.round(nextWidth)} x ${Math.round(nextHeight)}`);

            if (Math.abs(nextWidth - tBounds.width) < 2 && Math.abs(nextHeight - tBounds.height) < 2) {
                this.current.style.width = StyleUtils.toPx(tBounds.width);
                this.current.style.height = StyleUtils.toPx(tBounds.height);
                this.currentWidth = tBounds.width;
                this.currentHeight = tBounds.height;
                this.progress = 1;
            } else {
                this.progress = 0.3;
            }
        } else {
            this.current.style.width = StyleUtils.toPx(tBounds.width);
            this.current.style.height = StyleUtils.toPx(tBounds.height);
            this.currentWidth = tBounds.width;
            this.currentHeight = tBounds.height;
            this.progress = 1;
        }
    }

}

/**
 * Kinetic job for corner rounding (Border Radius).
 */
export class BorderRadiusJob extends BaseJob {
    public readonly importance = 7;

    constructor(public current: HTMLElement, public target: HTMLElement) { super(); }

    getLocation() {
        if (!isVisuallyImpacting(this.target)) return undefined;
        const bounds = this.getElementBounds(this.target, true);
        if (!bounds || (bounds.width === 0 && bounds.height === 0)) return undefined;
        return { x: bounds.left + bounds.width / 2, y: bounds.top + bounds.height / 2 };
    }



    equalTo(other: IJob): boolean {
        return other instanceof BorderRadiusJob && this.current === other.current && this.target === other.target;
    }

    explode(callback?: () => void): void {
        super.explode(callback);
        const currentR = StyleUtils.parse(window.getComputedStyle(this.current).borderRadius);
        const targetR = StyleUtils.parse(window.getComputedStyle(this.target).borderRadius);
        if (Math.abs(currentR - targetR) > 1) {
            if (this.progress >= 1)
                this.progress = 0;
            return
        }
        this.progress = 1;
    }

    step(dt: number, agent?: IAgent): void {
        if (agent) Physics.stepTowards(agent, this.getLocation(), dt);
        const targetR = StyleUtils.parse(window.getComputedStyle(this.target).borderRadius);
        const currentR = StyleUtils.parse(this.current.style.borderRadius);
        if (Math.abs(currentR - targetR) < 1) {
            this.current.style.borderRadius = StyleUtils.toPx(targetR);
            this.progress = 1;

        } else {
            const dir = targetR > currentR ? 1 : -1;
            this.current.style.borderRadius = StyleUtils.toPx(currentR + dir * dt * 0.1);
            this.log(`R${currentR}`);
            this.progress = 0.3;
        }
    }
}





/**
 * Reconciles general CSS styles, excluding geometric layout bounds (to preserve 2D canvas structure).
 */
export class StyleJob extends BaseJob {
    public readonly importance = 5; // Style executes SECOND in the build sequence
    public targetStyle: CSSStyleDeclaration | undefined;


    /**
     * Core physical layout properties that must NEVER be synced or stripped.
     * This maintains the "Strict Absolute Canvas" geometry paradigm.
     */
    private static readonly STRICT_LAYOUT_LOCKS = new Set([
        'position', 'top', 'left', 'width', 'height', 'margin', 'box-sizing', 'border-radius', 'pointer-events'
    ]);

    private static readonly MANUAL_UPDATE_STYLES = new Set([
        'color', 'background-color', 'opacity', 'visibility', 'box-shadow', 'cursor',
        'text-transform', 'line-height', 'letter-spacing', 'font-style', 'font-family', 'font-size', 'font-weight',
        'text-align', 'text-decoration',
    ]);


    /**
     * Cosmetic properties injected by the builder's factory placeholder that need to be cleaned up.
     */
    private static readonly FACTORY_DRAFT_STYLES = ['border', 'background-color', 'overflow', 'box-shadow'];

    constructor(public current: HTMLElement, public target: HTMLElement) {
        super();
    }

    /**
     * Centers the agent when performing final cosmetic touches.
     */
    getLocation() {
        if (!isVisuallyImpacting(this.target)) return undefined;
        const bounds = this.getElementBounds(this.current);
        return bounds ? { x: bounds.left + bounds.width / 2, y: bounds.top + bounds.height / 2 } : undefined;
    }

    equalTo(other: IJob): boolean {
        return other instanceof StyleJob && this.current === other.current && this.target === other.target;
    }

    explode(callback?: () => void): void {
        super.explode(callback);

        this.targetStyle = getComputedStyle(this.target);

        // 1. Ensure own properties have been stripped if they don't explicitly exist on the target
        for (const prop of StyleJob.FACTORY_DRAFT_STYLES) {
            if (StyleJob.MANUAL_UPDATE_STYLES.has(prop)
                && this.target.style.getPropertyValue(prop)
                && this.current.style.getPropertyValue(prop)) {
                if (this.progress >= 1)
                    this.progress = 0;
                return
            }
        }

        // 2. Check for drift between our applied cache and the blueprint
        for (const prop of StyleJob.MANUAL_UPDATE_STYLES) {
            if (StyleJob.STRICT_LAYOUT_LOCKS.has(prop)) continue;
            const targetVal = this.targetStyle.getPropertyValue(prop);
            if (this.current.style.getPropertyValue(prop) !== targetVal) {
                if (this.progress >= 1)
                    this.progress = 0;
                return
            }
        }
        this.progress = 1;
    }

    step(dt: number, agent?: IAgent): void {
        if (agent) Physics.stepTowards(agent, this.getLocation(), dt);
        // Strip factory draft styles
        for (const prop of StyleJob.FACTORY_DRAFT_STYLES) {
            if (!this.target.style.getPropertyValue(prop)) {
                this.current.style.removeProperty(prop);
                this.log("STYLE REMOVED:" + prop)
                this.progress = 0.3;
            }
        }

        // Replicate blueprint styles and update our intent cache
        if (this.targetStyle !== undefined) {
            for (const prop of StyleJob.MANUAL_UPDATE_STYLES) {
                if (StyleJob.STRICT_LAYOUT_LOCKS.has(prop)) continue;
                const targetVal = this.targetStyle.getPropertyValue(prop);
                if (this.current.style.getPropertyValue(prop) !== targetVal) {
                    this.current.style.setProperty(prop, targetVal);
                    this.log("STYLE UPDATED:" + prop)
                    this.progress = 0.6;
                }
            }
        }

        if (this.progress != 1) {
            this.progress = 1;
            this.log("Done")
        }
    }

}
