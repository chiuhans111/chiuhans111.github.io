import type { IJob } from "../core/types";
import type { Vector2 } from "../engine/Physics";


export interface IDebugInfo {
    location: Vector2 | undefined;
    job: IJob;
}

export function GetDebugInfo(rootjob: IJob, debugInfo: IDebugInfo[] = []): IDebugInfo[] {
    // Only show diagnostics for unfinished jobs.
    if (rootjob.logs.length > 0) {
        let location = rootjob.getLocation()
        if (location !== undefined) {
            location.y += 40
            if (location.x > innerWidth - 300) {
                location.x = innerWidth - 300
            }
            if (location.x < 10) {
                location.x = 10
            }
        }
        debugInfo.push({
            location: location,
            job: rootjob
        });
    }

    // Populate debug info of the child jobs recursively.
    for (const job of rootjob.childJobs) {
        GetDebugInfo(job, debugInfo);
    }

    return debugInfo;
}