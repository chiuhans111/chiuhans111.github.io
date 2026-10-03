import { BaseJob } from "./BaseJob";
import type { IJob } from "../core/types";
import type { Vector2 } from "../engine/Physics";
import { isText, isElement, GetDummyNodeLike } from "../core/dom";
import { FindLowestCostPath, NodeEditCostEstimate } from "../core/solver";
import { TextNodeJob, StyleJob, AttributeJob, PositionJob, SizeJob, BorderRadiusJob } from "./VisualJobs";
import { NodeDeleteJob } from "./StructuralJobs";

export class NodeJob extends BaseJob {
    constructor(public current: Node, public target: Node) {
        super();
    }

    public importance: number = 5;

    /**
     * NodeJobs are structural containers and do not require physical agent travel.
     */
    getLocation(): Vector2 | undefined {
        return undefined;
    }

    equalTo(other: IJob): boolean {
        return other instanceof NodeJob
            && this.current === (other as NodeJob).current
            && this.target === (other as NodeJob).target;
    }

    explode(callback?: () => void): void {
        const previousChildJobs = [...this.childJobs];

        super.explode(() => {
            this.progress = 1;

            if (this.current.nodeType !== this.target.nodeType) {
                return;
            }

            // Treat atomic visual components (like Hans's animated Logo) as atomic units
            if (isElement(this.target) && isElement(this.current)) {
                if (this.target.classList.contains('logo') || this.target.classList.contains('aspect-spacer') || this.target.hasAttribute('data-atomic') || this.target.tagName.toLowerCase() === 'svg') {
                    if (this.current.innerHTML !== this.target.innerHTML) {
                        this.current.innerHTML = this.target.innerHTML;
                    }
                    if (callback) callback();
                    return;
                }
            }

            if (isText(this.target) && isText(this.current)) {
                this.queueOrRecycle(new TextNodeJob(this.current, this.target), previousChildJobs);
            }

            if (callback) callback();

            const matchlist = FindLowestCostPath(
                Array.from(this.current.childNodes),
                Array.from(this.target.childNodes),
                NodeEditCostEstimate
            );

            for (let i = 0; i < matchlist.length; i += 1) {
                const row = matchlist[i];
                if (row == undefined) continue;
                const itemA = row[0];
                const itemB = row[1];
                if (itemA === undefined && itemB !== undefined) {
                    const newNode = GetDummyNodeLike(itemB);
                    this.current.appendChild(newNode);
                    if (isText(itemB)) {
                        this.queueOrRecycle(new TextNodeJob(newNode as Text, itemB), previousChildJobs);
                    } else {
                        this.queueOrRecycle(new NodeCreateJob(newNode, itemB), previousChildJobs);
                    }
                } else if (itemA !== undefined && itemB === undefined) {
                    // this.current.appendChild(itemA);
                    this.queueOrRecycle(new NodeDeleteJob(itemA), previousChildJobs);
                } else if (itemA !== undefined && itemB !== undefined) {
                    if (itemA.nodeType !== itemB.nodeType) {
                        const newNode = GetDummyNodeLike(itemB);

                        let nextChild = undefined;
                        for (let j = i + 1; j < matchlist.length; j++) {
                            let rowj = matchlist[j];
                            if (rowj !== undefined) {
                                if (rowj[0] !== undefined) {
                                    nextChild = rowj[0]
                                }
                            }
                        }
                        if (nextChild !== undefined) {
                            this.current.insertBefore(newNode, nextChild)
                        } else {
                            this.current.appendChild(newNode);
                        }

                        if (isText(itemB)) {
                            this.queueOrRecycle(new TextNodeJob(newNode as Text, itemB), previousChildJobs);
                        } else {
                            this.queueOrRecycle(new NodeCreateJob(newNode, itemB), previousChildJobs);
                        }
                        this.queueOrRecycle(new NodeDeleteJob(itemA), previousChildJobs);
                    } else {
                        if (isText(itemA) && isText(itemB)) {
                            this.queueOrRecycle(new TextNodeJob(itemA, itemB), previousChildJobs);
                        } else {
                            this.queueOrRecycle(new NonRootNodeJob(itemA, itemB), previousChildJobs);
                        }
                        // this.current.appendChild(itemA);
                    }
                }
            }

        });
    }
}

export class NonRootNodeJob extends NodeJob {
    explode(callback?: () => void): void {
        const previousChildJobs = [...this.childJobs];
        super.explode(() => {
            if (isElement(this.target) && isElement(this.current)) {
                if (this.target instanceof HTMLElement && this.current instanceof HTMLElement) {
                    this.queueOrRecycle(new PositionJob(this.current, this.target), previousChildJobs);
                    this.queueOrRecycle(new SizeJob(this.current, this.target), previousChildJobs);
                    this.queueOrRecycle(new BorderRadiusJob(this.current, this.target), previousChildJobs);
                    this.queueOrRecycle(new StyleJob(this.current, this.target), previousChildJobs);
                }
                this.queueOrRecycle(new AttributeJob(this.current, this.target), previousChildJobs);
            }
            if (callback) callback();
        });
    }

}

export class NodeCreateJob extends NonRootNodeJob { }
