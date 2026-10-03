/**
 * Standard Type Guards for DOM Nodes
 */

export function isElement(node: Node): node is Element {
    return node.nodeType === Node.ELEMENT_NODE;
}

export function isHTMLElement(node: Node): node is HTMLElement {
    return node instanceof HTMLElement;
}

export function isText(node: Node): node is Text {
    return node.nodeType === Node.TEXT_NODE;
}

const visualCache = new WeakMap<HTMLElement, boolean>();

/**
 * Creates a placeholder node based on the blueprint node's type.
 * Supports SVG namespaces.
 */
export function GetDummyNodeLike(node: Node): Node {
    if (isElement(node)) {
        let el: Element;
        if (node.namespaceURI && node.namespaceURI.includes('svg')) {
            el = document.createElementNS(node.namespaceURI, node.nodeName);
        } else {
            el = document.createElement(node.nodeName);
        }

        if (node instanceof Element) {
            for (let i = 0; i < node.attributes.length; i++) {
                const attr = node.attributes[i];
                if (attr && attr.name !== 'style') {
                    el.setAttribute(attr.name, attr.value);
                }
            }
        }

        // INITIAL DRAFT STATE: Strict Fixed Layout (Independent of parent kinetic movement)
        if (el instanceof HTMLElement) {
            const bound = (node as HTMLElement).getBoundingClientRect();

            el.style.position = "fixed";
            el.style.margin = "0px";
            el.style.top = bound.top + "px";
            el.style.left = bound.left + "px";
            el.style.width = bound.width > 0 ? (bound.width + "px") : "40px";
            el.style.height = bound.height > 0 ? (bound.height + "px") : "40px";
            el.style.boxSizing = "border-box";
            el.spellcheck = false;
        }

        return el;
    }
    return document.createTextNode('');
}

/**
 * Heuristic to determine if an element contributes to the visual scene.
 * Elements that are purely for layout alignment (no BG, no border, no text) 
 * can be skipped by the kinetic agents for performance and clarity.
 */
export function isVisuallyImpacting(el: HTMLElement): boolean {
    const cached = visualCache.get(el);
    if (cached !== undefined) return cached;

    // Fast check for tags that are always visually impactful
    const visualTags = ['IMG', 'SVG', 'CANVAS', 'VIDEO', 'IFRAME', 'INPUT', 'BUTTON', 'A'];
    if (visualTags.includes(el.tagName)) {
        visualCache.set(el, true);
        return true;
    }

    // Check for immediate text content before touching computed style
    for (const child of Array.from(el.childNodes)) {
        if (child.nodeType === Node.TEXT_NODE && child.textContent?.trim().length) {
            visualCache.set(el, true);
            return true;
        }
    }

    const style = window.getComputedStyle(el);

    // 1. Check for backgrounds
    const hasBg = style.backgroundColor !== 'rgba(0, 0, 0, 0)' &&
        style.backgroundColor !== 'transparent' &&
        style.backgroundColor !== '';

    // 2. Check for borders
    const hasBorder = parseFloat(style.borderTopWidth) > 0 ||
        parseFloat(style.borderRightWidth) > 0 ||
        parseFloat(style.borderBottomWidth) > 0 ||
        parseFloat(style.borderLeftWidth) > 0;

    const result = hasBg || hasBorder;
    visualCache.set(el, result);
    return result;
}
