<script setup lang="ts">
interface Gem {
  id: string
  title: string
  subtitle: string
  category: string
  description: string
  path: string
  tags: string[]
  accentColor: string
  badge: string
}

const gems: Gem[] = [
  {
    id: 'flow',
    title: '流動 Flow',
    subtitle: 'Vector Field Dynamics',
    category: 'GENERATIVE ART',
    description: 'Dynamic particle field governed by Perlin noise and divergence-curl mathematics, creating organic fluid trajectories in real time.',
    path: './creation/visual/lines/',
    tags: ['PERLIN NOISE', 'VECTOR FIELD', 'CANVAS 2D', 'ORGANIC MOTION'],
    accentColor: '#4285f5',
    badge: 'LIVE INTERACTIVE',
  },
  {
    id: 'webgl',
    title: 'WebGL Shader Lab',
    subtitle: 'Procedural Wave Synthesizer',
    category: 'GPU SHADERS',
    description: 'Hardware-accelerated wave interference patterns, 3D matrix projection, and procedural noise shaders running on the GPU.',
    path: './creation/visual/webgl/',
    tags: ['WEBGL', 'GLSL SHADERS', 'WAVE MECHANICS', 'MAT4 TRANSFORM'],
    accentColor: '#34a854',
    badge: 'GPU ACCELERATED',
  },
  {
    id: 'physics',
    title: 'Physics Explainer',
    subtitle: 'Kinematics & Optics Sandbox',
    category: 'PHYSICAL COMPUTING',
    description: 'Interactive midterm simulator with KaTeX math rendering, harmonic oscillators, gravity trajectories, and physical intuition tests.',
    path: './creation/physics/midtermtest.html',
    tags: ['PHYSICS ENGINE', 'KATEX MATH', 'OPTICS & MECHANICS', 'SANDBOX'],
    accentColor: '#ea4334',
    badge: 'EDUCATIONAL SIM',
  },
]

function openGem(path: string) {
  window.open(path, '_blank', 'noreferrer')
}
</script>

<template>
  <div class="interactive-gems">
    <div class="gems-header">
      <div class="section-tag">
        <span class="dot"></span>
        <span>HERO SHOWCASE // INTERACTIVE GEMS</span>
      </div>
      <h2 class="section-title">Interactive Labs & Physics Engines</h2>
      <p class="section-subtitle">
        First-class creative engineering projects running live simulation kernels in the browser.
      </p>
    </div>

    <div class="gems-grid">
      <div
        v-for="gem in gems"
        :key="gem.id"
        class="gem-card"
        :style="{ '--accent': gem.accentColor }"
        @click="openGem(gem.path)"
      >
        <div class="card-inner">
          <div class="card-top">
            <span class="card-category">{{ gem.category }}</span>
            <span class="card-badge">{{ gem.badge }}</span>
          </div>

          <div class="card-visual">
            <div class="wireframe-graphic" :class="`graphic-${gem.id}`">
              <div class="grid-line" v-for="n in 5" :key="n"></div>
              <div class="orbital-ring"></div>
              <div class="core-point"></div>
            </div>
          </div>

          <div class="card-body">
            <div class="title-group">
              <h3 class="gem-title">{{ gem.title }}</h3>
              <div class="gem-subtitle">{{ gem.subtitle }}</div>
            </div>

            <p class="gem-desc">{{ gem.description }}</p>

            <div class="gem-tags">
              <span v-for="tag in gem.tags" :key="tag" class="tag">
                #{{ tag }}
              </span>
            </div>

            <div class="card-action">
              <span class="launch-text">LAUNCH EXPERIMENT</span>
              <svg
                class="arrow-icon"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.interactive-gems {
  margin: 60px 0;
  position: relative;
}

.gems-header {
  margin-bottom: 35px;

  .section-tag {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-family: "Space Mono", monospace;
    font-size: 11px;
    letter-spacing: 0.15em;
    color: #ff3b00;
    margin-bottom: 12px;
    background: rgba(255, 59, 0, 0.06);
    padding: 4px 10px;
    border-radius: 4px;
    border: 1px solid rgba(255, 59, 0, 0.15);

    .dot {
      width: 6px;
      height: 6px;
      background: #ff3b00;
      border-radius: 50%;
      animation: pulse 1.5s infinite ease-in-out;
    }
  }

  .section-title {
    font-size: 2.2rem;
    font-weight: 900;
    letter-spacing: -0.03em;
    margin: 0 0 8px 0;
    color: #111;
  }

  .section-subtitle {
    font-size: 1rem;
    color: #666;
    margin: 0;
    max-width: 650px;
    line-height: 1.5;
  }
}

.gems-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 25px;
}

.gem-card {
  position: relative;
  background: #ffffff;
  border: 1.5px solid #e5e5e5;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);

  &:hover {
    transform: translateY(-6px);
    border-color: var(--accent);
    box-shadow: 0 16px 36px rgba(0, 0, 0, 0.09);

    .card-action .arrow-icon {
      transform: translate(3px, -3px);
    }

    .orbital-ring {
      transform: scale(1.15) rotate(45deg);
    }
  }

  .card-inner {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 24px;
    box-sizing: border-box;
  }

  .card-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    .card-category {
      font-family: "Space Mono", monospace;
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.1em;
      color: #999;
    }

    .card-badge {
      font-family: "Space Mono", monospace;
      font-size: 10px;
      font-weight: 700;
      color: var(--accent);
      background: rgba(0, 0, 0, 0.03);
      padding: 3px 8px;
      border-radius: 4px;
      border: 1px solid rgba(0, 0, 0, 0.06);
    }
  }

  .card-visual {
    height: 110px;
    background: #fbfbfb;
    border-radius: 8px;
    border: 1px dashed #e0e0e0;
    margin-bottom: 20px;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;

    .wireframe-graphic {
      width: 100%;
      height: 100%;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;

      .grid-line {
        position: absolute;
        background: rgba(0, 0, 0, 0.04);
        width: 100%;
        height: 1px;

        &:nth-child(1) { top: 20%; }
        &:nth-child(2) { top: 40%; }
        &:nth-child(3) { top: 60%; }
        &:nth-child(4) { top: 80%; }
        &:nth-child(5) { top: 50%; background: rgba(0,0,0,0.08); }
      }

      .orbital-ring {
        width: 60px;
        height: 60px;
        border: 1.5px dashed var(--accent);
        border-radius: 50%;
        transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
      }

      .core-point {
        position: absolute;
        width: 10px;
        height: 10px;
        background: var(--accent);
        border-radius: 50%;
        box-shadow: 0 0 12px var(--accent);
      }
    }
  }

  .card-body {
    display: flex;
    flex-direction: column;
    flex-grow: 1;

    .title-group {
      margin-bottom: 12px;

      .gem-title {
        font-size: 1.45rem;
        font-weight: 800;
        margin: 0;
        color: #111;
        letter-spacing: -0.02em;
      }

      .gem-subtitle {
        font-size: 0.85rem;
        font-weight: 500;
        color: #777;
        margin-top: 2px;
      }
    }

    .gem-desc {
      font-size: 0.92rem;
      line-height: 1.55;
      color: #444;
      margin: 0 0 20px 0;
      flex-grow: 1;
    }

    .gem-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      margin-bottom: 22px;

      .tag {
        font-family: "Space Mono", monospace;
        font-size: 10px;
        padding: 3px 6px;
        background: #f4f4f4;
        border-radius: 3px;
        color: #555;
      }
    }

    .card-action {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-top: 1px solid #f0f0f0;
      padding-top: 14px;
      font-family: "Space Mono", monospace;
      font-size: 12px;
      font-weight: 700;
      color: #111;

      .arrow-icon {
        transition: transform 0.25s ease;
      }
    }
  }
}

@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.4; transform: scale(0.85); }
}
</style>
