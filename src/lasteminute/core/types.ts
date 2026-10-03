import type { Vector2, IAgent } from "../engine/Physics";
export type { IAgent };

export enum JobStatus {
  IDLE = "IDLE",
  RUNNING = "RUNNING",
  FINISHED = "FINISHED",
}

export interface IDebugInfo {
  [key: string]: any;
}

export interface IJob {
  progress: number;
  status: JobStatus;
  childJobs: IJob[];
  parent: IJob | undefined;
  importance: number;
  getLocation(): Vector2 | undefined;
  getTargetElement(): Element | undefined;
  getCaretRect(): DOMRect | null;
  explode(callback?: () => void): void;
  step(dt: number, agent?: IAgent): void;
  equalTo(other: IJob): boolean;
  getElementBounds(node: Node): DOMRect | undefined;
  logs: string[];
}



