import { JobStatus, type IJob, type IAgent, type IDebugInfo } from "../core/types";
import type { Vector2 } from "../engine/Physics";
import { isElement } from "../core/dom";

/**
 * BaseJob provides the foundational implementation for the Antigravity Job state machine.
 * It handles child job reconciliation, hierarchy management, and shared spatial utilities.
 */
export abstract class BaseJob implements IJob {
  public childJobs: IJob[] = [];
  public progress: number = 0;
  public status: JobStatus = JobStatus.IDLE;
  public parent: IJob | undefined;
  public logs: string[] = [];

  constructor() {
    this.log("Initialize.");
  }

  protected pendingJobs: IJob[] = [];

  /**
   * Defines the urgency of this job for the Simulator's priority queue.
   */
  public abstract importance: number;

  /**
   * Checks if this job is functionally equivalent to another job.
   * Used to persist state (progress, status) across reconciliation frames.
   */
  abstract equalTo(other: IJob): boolean;

  /**
   * Populates the child job hierarchy.
   * Idempotent: Can be called every frame to reconcile with the latest DOM blueprint.
   */
  explode(callback?: () => void): void {
    if (this.progress >= 1)
      this.logs.splice(0, Math.min(1, this.logs.length - 1));
    this.pendingJobs = [];

    if (callback) {
      callback();
    }

    // Recursively explode child jobs
    for (const job of this.pendingJobs) {
      job.explode();
    }

    this.childJobs = this.pendingJobs;
  }

  /**
   * Persists existing jobs into the current cycle if they match the new blueprint.
   */
  protected queueOrRecycle(job: IJob, previousJobs: IJob[]): void {
    const existing = previousJobs.find((j) => j.equalTo(job));
    if (existing) {
      this.pendingJobs.push(existing);
      existing.parent = this;
    } else {
      this.pendingJobs.push(job);
      job.parent = this;
    }
  }

  /**
   * Viewport-relative coordinates for the Simulator Agent's targeting.
   */
  public abstract getLocation(): Vector2 | undefined;

  /**
   * Identifier used to ensure agents do not overlap on the same element constraint.
   */
  public getTargetElement(): Element | undefined {
    if ('current' in this) {
      const current = (this as any).current;
      if (current instanceof Element) return current;
      if (current instanceof Text && current.parentElement) return current.parentElement;
    }
    return undefined;
  }

  /**
   * Returns a sub-coordinate for the typing caret (if applicable).
   */
  public getCaretRect(): DOMRect | null {
    return null;
  }




  private static targetBoundsCache = new WeakMap<Node, DOMRect>();

  /**
   * Shared helper to find the center or corner of a DOM node.
   */
  public getElementBounds(node: Node, isTarget: boolean = false): DOMRect | undefined {
    let target = isElement(node) ? node : node.parentElement;
    if (target && target.getBoundingClientRect) {
      if (isTarget) {
        const cached = BaseJob.targetBoundsCache.get(target);
        if (cached) return cached;
        const rect = target.getBoundingClientRect();
        if (rect.width > 0 || rect.height > 0) {
          BaseJob.targetBoundsCache.set(target, rect);
        }
        return rect;
      }
      return target.getBoundingClientRect();
    }
    return undefined;
  }

  /**
   * Advances the job state based on delta time (ms).
   * Default implementation resolves immediately for abstract containers.
   */
  step(dt: number, agent?: IAgent): void {
    // Default implementation just finishes immediately.
    this.progress = 1;
  }

  log(message: string) {
    this.logs.splice(0, this.logs.length - 5);
    this.logs.push(message)
  }
}

