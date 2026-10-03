import { BaseJob } from "./BaseJob";
import type { IJob, IAgent, IDebugInfo } from "../core/types";
import type { Vector2 } from "../engine/Physics";

export class NodeDeleteJob extends BaseJob {
    constructor(public current: Node) {
        super();
    }

    public importance: number = 10;

    getLocation(): Vector2 | undefined {
        if (this.current instanceof Element) {
            const rect = this.current.getBoundingClientRect();
            return {
                x: rect.left + rect.width / 2,
                y: rect.top + rect.height / 2
            };
        } else if (this.current.parentNode instanceof Element) {
            const rect = (this.current.parentNode as Element).getBoundingClientRect();
            return {
                x: rect.left + rect.width / 2,
                y: rect.top + rect.height / 2
            };
        }
        return undefined;
    }

    equalTo(other: IJob): boolean {
        return other instanceof NodeDeleteJob
            && this.current === (other as NodeDeleteJob).current;
    }

    step(dt: number, agent?: IAgent): void {
        this.current.parentNode?.removeChild(this.current);
        this.progress = 1;
    }
}
