<script setup lang="ts">
import {
  onMounted,
  useTemplateRef,
  nextTick,
  shallowRef,
  ref,
} from "vue";
import { NodeJob } from "../jobs/NodeJobs";
import { Simulator } from "../engine/Simulator";
import { usePulse } from "./usePulse";

const targetRef = useTemplateRef<HTMLElement>("target");

const rootJob = shallowRef<NodeJob>();
const simulator = shallowRef<Simulator>();

const agents = shallowRef<any[]>([]);
const isEquilibrium = ref(false);
const progress = ref(0);

// Helper to getColor Based on Index
function getAgentColor(index: number) {
  const colors = [
    "#ea4334", // Red
    "#4285f5", // Blue
    "#34a854", // Green
    "#fbbc06", // Yellow
    "#ff00ff", // Magenta
    "#00ffff", // Cyan
    "#ff6d00", // Vibrant Orange
    "#673ab7", // Deep Purple
  ];
  return colors[index % colors.length];
}

const { start, stop } = usePulse(
  () => rootJob.value,
  () => simulator.value,
  targetRef,
  targetRef,
  () => {
    if (simulator.value) {
      agents.value = [...simulator.value.agents];
      isEquilibrium.value = simulator.value.isComplete;
      progress.value = simulator.value.totalProgress;
    }
  }
);

function replay() {
  if (!targetRef.value) return;
  stop();
  const job = new NodeJob(targetRef.value, targetRef.value);
  job.explode();
  rootJob.value = job;
  simulator.value = new Simulator(job, 3);
  isEquilibrium.value = false;
  progress.value = 0;
  start(150);
}

defineExpose({
  replay,
  isEquilibrium,
  progress,
  agents
});

onMounted(async () => {
  await nextTick();
  if (targetRef.value) {
    const job = new NodeJob(targetRef.value, targetRef.value);
    job.explode();
    rootJob.value = job;
    simulator.value = new Simulator(job, 3);
    start(300);
  }
});
</script>

<template>
  <div id="stage">
    <!-- THE REAL SITE: 100% VISIBLE, NATIVELY WORKING, FULLY INTERACTIVE -->
    <div id="target" ref="target">
      <slot></slot>
    </div>

    <!-- THE KINETIC AGENT SWARM OVERLAY -->
    <div class="agent-swarm-overlay" v-if="!isEquilibrium">
      <!-- THE AGENT SWARM -->
      <div
        v-for="(a, index) in agents"
        :key="a.id"
        class="cursor"
        :class="{ 'agent-working': a.isWorking }"
        :style="{
          transform: `translate(${a.x}px, ${a.y}px)`,
          '--agent-color': getAgentColor(index),
          opacity: a.opacity,
        }"
      >
        <div class="cursor-pointer">
          <svg
            width="24"
            height="24"
            viewBox="-1 -1 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="agent-svg"
          >
            <path
              d="M0 0V16L4.5 11.5H10L0 0Z"
              fill="var(--agent-color)"
              stroke="white"
              stroke-width="1"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div class="cursor-label" v-if="a.label">{{ a.label }}</div>
      </div>

      <!-- TRANSFORM OVERLAYS -->
      <template v-for="(a, index) in agents" :key="'bounds-' + a.id">
        <div
          v-if="a.isWorking && a.operationRect"
          class="transform-box"
          :style="{
            transform: `translate(${a.operationRect.left}px, ${a.operationRect.top}px)`,
            width: a.operationRect.width + 'px',
            height: a.operationRect.height + 'px',
            '--agent-color': getAgentColor(index),
          }"
        >
          <div class="handle nw"></div>
          <div class="handle n"></div>
          <div class="handle ne"></div>
          <div class="handle w"></div>
          <div class="handle e"></div>
          <div class="handle sw"></div>
          <div class="handle s"></div>
          <div class="handle se"></div>
          <div class="box-fill"></div>
        </div>

        <!-- TEXT CARET -->
        <div
          v-if="a.isWorking && a.caretRect"
          class="text-caret"
          :style="{
            transform: `translate(${a.caretRect.left}px, ${a.caretRect.top}px)`,
            height: a.caretRect.height + 'px',
            width: a.caretRect.width + 'px',
            '--agent-color': getAgentColor(index),
          }"
        ></div>
      </template>
    </div>

    <!-- EQUILIBRIUM REPLAY BADGE -->
    <button
      v-if="isEquilibrium"
      class="equilibrium-badge"
      @click="replay"
      title="Click to replay kinetic simulation"
    >
      <span class="status-dot"></span>
      <span class="badge-text">[ ● BUILD_EQUILIBRIUM // REPLAY ↺ ]</span>
    </button>
  </div>
</template>

<style scoped lang="scss">
#stage {
  width: 100%;
  min-height: 100vh;
  position: relative;

  #target {
    position: relative;
    width: 100%;
    min-height: 100vh;
    z-index: 1;
  }
}

.agent-swarm-overlay {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 9999;
}

.cursor {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10000;
  pointer-events: none;
  will-change: transform;

  &-pointer {
    position: absolute;
    top: 0;
    left: 0;

    svg {
      display: block;
      filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
    }
  }

  .cursor-label {
    position: absolute;
    top: 22px;
    left: 12px;
    background: var(--agent-color);
    color: #fff;
    font-family: "Space Mono", monospace;
    font-size: 10px;
    line-height: 1;
    border-radius: 2px;
    padding: 3px 6px;
    white-space: nowrap;
    letter-spacing: -0.02em;
    pointer-events: none;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }
}

.text-caret {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10000;
  pointer-events: none;
  background: var(--agent-color);
  will-change: transform;
}

.transform-box {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  border: 1.5px solid var(--agent-color);
  pointer-events: none;
  box-sizing: border-box;
  will-change: transform, width, height;

  .box-fill {
    position: absolute;
    inset: 0;
    background: var(--agent-color);
    opacity: 0.04;
  }

  .handle {
    position: absolute;
    width: 7px;
    height: 7px;
    background: #ffffff;
    border: 1.5px solid var(--agent-color);
    box-sizing: border-box;

    &.nw { top: -4px; left: -4px; }
    &.n  { top: -4px; left: calc(50% - 3.5px); }
    &.ne { top: -4px; right: -4px; }
    &.w  { top: calc(50% - 3.5px); left: -4px; }
    &.e  { top: calc(50% - 3.5px); right: -4px; }
    &.sw { bottom: -4px; left: -4px; }
    &.s  { bottom: -4px; left: calc(50% - 3.5px); }
    &.se { bottom: -4px; right: -4px; }
  }
}

.equilibrium-badge {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 10000;
  display: flex;
  align-items: center;
  gap: 8px;
  background: #111111;
  color: #00ff88;
  border: 1px solid rgba(0, 255, 136, 0.3);
  border-radius: 4px;
  padding: 8px 14px;
  font-family: "Space Mono", monospace;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.05em;
  cursor: pointer;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    background: #000000;
    border-color: #00ff88;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 255, 136, 0.25);
  }

  .status-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #00ff88;
    box-shadow: 0 0 8px #00ff88;
  }
}
</style>
