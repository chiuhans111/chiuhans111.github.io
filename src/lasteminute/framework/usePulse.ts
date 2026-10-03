import { onUnmounted, ref } from "vue";
import type { NodeJob } from "../jobs/NodeJobs";
import type { Simulator } from "../engine/Simulator";

let counter = 0;

export function usePulse(
  rootJobProvider: () => NodeJob | undefined,
  simulatorProvider: () => Simulator | undefined,
  targetRef: { value: HTMLElement | null },
  currentRef: { value: HTMLElement | null },
  onStep?: () => void,
  onExplode?: () => void
) {
  const alive = ref(false);
  let lastTime = 0;
  let rafId: number | null = null;

  function loop(time: number) {
    if (!alive.value) return;

    const dt = Math.min(time - (lastTime || time), 20);
    lastTime = time;

    const rootJob = rootJobProvider();
    const simulator = simulatorProvider();

    if (rootJob && simulator && targetRef.value && currentRef.value) {
      // Re-reconcile state periodically (approx 1 Hz) while building
      counter += 1;
      if (counter >= 60) {
        if (!simulator.isComplete) {
          rootJob.explode();
          if (onExplode) onExplode();
        }
        counter = 0;
      }

      // Execute one simulation step
      simulator.step(dt);

      if (onStep) onStep();
    }

    rafId = requestAnimationFrame(loop);
  }

  function start(delay: number = 300) {
    setTimeout(() => {
      alive.value = true;
      rafId = requestAnimationFrame(loop);
    }, delay);
  }

  function stop() {
    alive.value = false;
    if (rafId !== null) {
      cancelAnimationFrame(rafId);
    }
  }

  onUnmounted(stop);

  return {
    start,
    stop,
    alive,
  };
}
