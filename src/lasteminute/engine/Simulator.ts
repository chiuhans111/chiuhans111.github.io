import type { IJob } from "../core/types";
import type { NodeJob } from "../jobs/NodeJobs";
import { Physics, type Vector2, type IAgent } from "../engine/Physics";
import type { BaseJob } from "../jobs/BaseJob";
import { PositionJob } from "../jobs/VisualJobs";

/**
 * Spatial and logic utilities for the Simulation engine.
 */
const EngineUtils = {
    /**
     * Recursively flattens a job tree into a pre-order list.
     */
    flatten(job: IJob): IJob[] {
        const jobs: IJob[] = [job];
        for (const child of job.childJobs) {
            jobs.push(...this.flatten(child));
        }
        return jobs;
    }
};

/**
 * An autonomous execution unit that performs work on prioritized Jobs.
 */
export class Agent implements IAgent {
    public x: number = 0;
    public y: number = 0;
    public label: string = "Designer";

    public opacity: number = 0;

    public vel: Vector2 = { x: 0, y: 0 }; // Momentum state

    public targetJob: IJob | null = null;
    public targetElement: Element | null = null; // Memory of the active DOM entity
    public isWorking: boolean = false;
    public operationRect: DOMRect | null = null; // Visually syncs exactly the bounds being manipulated
    public caretRect: DOMRect | null = null; // High-precision screen position for text-typing caret

    // Physical constants for tuning the "human-like" feel
    public readonly mass: number = 1.0;
    public readonly damping: number = 0.92;
    public readonly stiffness: number = 0.15; // Seeking strength

    constructor() {
        this.x = window.innerWidth / 2;
        this.y = window.innerHeight / 2;
    }

    /**
     * Advances the agent's position and executes its assigned job.
     */
    update(dt: number): void {
        if (!this.targetJob) {
            this.isWorking = false;
            this.operationRect = null;
            Physics.stepTowards(this, undefined, dt);
            if (this.opacity > 0) this.opacity -= dt * 0.001;
            else this.opacity = 0
            return;
        }

        if (this.opacity < 1) this.opacity += dt * 0.1;
        else this.opacity = 1

        const el = this.targetJob.getTargetElement();
        if (el) this.targetElement = el;

        let targetLocation = this.targetJob.getLocation();
        if (!targetLocation) {
            this.targetJob = null;
            this.isWorking = false;
            this.operationRect = null;
            this.caretRect = null;
            Physics.stepTowards(this, undefined, dt);
            return;
        }

        const distSq = Physics.dist(this, targetLocation);

        if (!this.isWorking) {
            this.operationRect = null;
            this.caretRect = null;
            if (distSq < 25) {
                this.isWorking = true;
            } else {
                // TRAVEL PHASE: Use the stateful high-level movement kernel
                Physics.stepTowards(this, targetLocation, dt);
            }
        }

        if (this.isWorking) {
            this.targetJob.step(dt, this);
            const opRect = (this.targetJob as any).getOperationRect ? (this.targetJob as any).getOperationRect() : null;
            if (opRect) {
                this.operationRect = opRect;
            } else if (this.targetElement) {
                this.operationRect = this.targetElement.getBoundingClientRect();
            }
            this.caretRect = this.targetJob.getCaretRect();
            if (this.targetJob.progress >= 1) {
                this.targetJob = null;
                this.isWorking = false;
                this.operationRect = null;
                this.caretRect = null;
            }
        }
    }
}




function ImportanceOfTheJob(job: IJob, pointOfFocus: Vector2) {
    let importance = job.importance;
    let location = job.getLocation();

    if (location !== undefined) {
        let distance = Physics.mag(Physics.sub(location, pointOfFocus));
        importance += 300 / (1 + distance * 0.005);
    }
    return importance;
}

/**
 * The central coordinator for Job reconciliation and Agent brokerage.
 */
export class Simulator {
    public readonly agents: Agent[] = [];

    constructor(public readonly rootJob: NodeJob, agentCount: number = 3) {
        for (let i = 0; i < agentCount; i++) {
            this.agents.push(new Agent());
        }
    }

    /**
     * Synchronizes the world state: Background work and Agent tasking.
     */
    step(dt: number): void {
        const allJobs = EngineUtils.flatten(this.rootJob);
        const unfinished = allJobs.filter(j => j.progress < 1);

        if (unfinished.length === 0) {
            this.agents.forEach(a => a.update(dt));
            return;
        }

        // --- PIPELINE 1: BACKGROUND & SPATIAL SORT ---
        const pointOfFocus: Vector2 = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

        const spatialQueue: IJob[] = [];
        for (const job of unfinished) {
            const loc = job.getLocation();
            if (!loc) {
                job.step(dt); // Background job
            } else {
                // Viewport Culling: Only assign kinetic agents to jobs visible within the screen!
                const isVisible = loc.x >= -50 && loc.x <= window.innerWidth + 50 &&
                                  loc.y >= -50 && loc.y <= window.innerHeight + 100;
                if (isVisible) {
                    spatialQueue.push(job);
                } else {
                    // Off-screen work is reconciled directly in background so agents do not fly into the abyss
                    job.step(dt);
                }
            }
        }

        spatialQueue.sort((a, b) => ImportanceOfTheJob(b, pointOfFocus) - ImportanceOfTheJob(a, pointOfFocus));

        // --- PIPELINE 3: AGENT DISPATCH ---
        const remainingAgents = [...this.agents];
        const busyElements = new Set<Element>();
        const assignedJobs = new Set<IJob>();

        // PASS 1: Continuity - If an agent is already working on an unfinished job, keep it.
        for (let i = remainingAgents.length - 1; i >= 0; i--) {
            const agent = remainingAgents[i];
            if (!agent) continue;
            const currentJob = agent.targetJob;

            // Only persist if the job is still unfinished and valid
            if (currentJob && currentJob.progress < 1) {
                const targetEl = currentJob.getTargetElement();
                if (targetEl) {
                    busyElements.add(targetEl);
                }
                assignedJobs.add(currentJob);
                remainingAgents.splice(i, 1);
            } else {
                // Job is finished or invalid, clear it
                agent.targetJob = null;
                agent.isWorking = false;
            }

        }

        // PASS 2: New Assignments
        const availableJobs = spatialQueue.filter(j => !assignedJobs.has(j));

        for (const job of availableJobs) {
            if (remainingAgents.length === 0) break;

            const targetElement = job.getTargetElement();
            if (targetElement && busyElements.has(targetElement)) {
                continue; // Skip elements already being handled
            }

            let closestAgentIndex = -1;
            let shortestDistanceSq = Infinity;
            const loc = job.getLocation();

            if (!loc) continue;

            for (let i = 0; i < remainingAgents.length; i++) {
                const agent = remainingAgents[i];
                if (!agent) continue;
                const dx = agent.x - loc.x;
                const dy = agent.y - loc.y;
                const distSq = dx * dx + dy * dy;

                if (distSq < shortestDistanceSq) {
                    shortestDistanceSq = distSq;
                    closestAgentIndex = i;
                }
            }


            if (closestAgentIndex !== -1) {
                const bestAgent = remainingAgents[closestAgentIndex];
                if (bestAgent) {
                    bestAgent.targetJob = job;
                    bestAgent.isWorking = false; // Reset to TRAVEL mode for new job
                    if (targetElement) {
                        busyElements.add(targetElement);
                        bestAgent.targetElement = targetElement;
                    }
                    remainingAgents.splice(closestAgentIndex, 1);
                }
            }

        }

        // Update all agents
        for (const agent of this.agents) {
            agent.update(dt);
        }
    }

    public get isComplete(): boolean {
        const allJobs = EngineUtils.flatten(this.rootJob);
        return allJobs.length > 0 && allJobs.every(j => j.progress >= 1);
    }

    public get totalProgress(): number {
        const allJobs = EngineUtils.flatten(this.rootJob);
        if (allJobs.length === 0) return 0;
        const finished = allJobs.filter(j => j.progress >= 1).length;
        return finished / allJobs.length;
    }
}







