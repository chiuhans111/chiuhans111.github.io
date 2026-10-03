<script setup lang="ts">
interface ProjectItem {
  id: number
  name: string
  published_on: number
  url: string
  fields: string[]
  covers: {
    '404': string
    '808'?: string
    original?: string
  }
}

const props = defineProps<{
  project: ProjectItem
}>()

function openProject(url: string) {
  window.open(url, '_blank', 'noreferrer')
}

function formatDate(timestamp: number): string {
  const d = new Date(timestamp * 1000)
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
  })
}
</script>

<template>
  <div class="project-card" @click="openProject(props.project.url)">
    <div class="card-media">
      <img
        :src="props.project.covers['404'] || props.project.covers['808']"
        :alt="props.project.name"
        loading="lazy"
      />
      <div class="media-overlay">
        <span class="view-btn">VIEW WORK ↗</span>
      </div>
    </div>
    <div class="card-meta">
      <span class="project-date">{{ formatDate(props.project.published_on) }}</span>
      <div class="project-fields">
        <span v-for="f in props.project.fields" :key="f" class="field-pill">
          {{ f }}
        </span>
      </div>
    </div>
    <h3 class="project-name">{{ props.project.name }}</h3>
  </div>
</template>

<style scoped lang="scss">
.project-card {
  background: #ffffff;
  border: 1px solid #ebebeb;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-4px);
    border-color: #111;
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);

    .media-overlay {
      opacity: 1;
    }

    img {
      transform: scale(1.04);
    }
  }

  .card-media {
    position: relative;
    width: 100%;
    aspect-ratio: 4 / 3;
    overflow: hidden;
    background: #f0f0f0;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .media-overlay {
      position: absolute;
      inset: 0;
      background: rgba(0, 0, 0, 0.4);
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: opacity 0.25s ease;

      .view-btn {
        font-family: "Space Mono", monospace;
        font-size: 11px;
        font-weight: 700;
        color: #fff;
        background: #111;
        padding: 6px 14px;
        border-radius: 4px;
        letter-spacing: 0.1em;
      }
    }
  }

  .card-meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 14px 16px 6px 16px;

    .project-date {
      font-family: "Space Mono", monospace;
      font-size: 11px;
      color: #888;
    }

    .project-fields {
      display: flex;
      gap: 4px;

      .field-pill {
        font-family: "Space Mono", monospace;
        font-size: 9px;
        font-weight: 700;
        background: #f5f5f5;
        color: #444;
        padding: 2px 6px;
        border-radius: 3px;
        text-transform: uppercase;
      }
    }
  }

  .project-name {
    font-size: 1.15rem;
    font-weight: 700;
    margin: 0;
    padding: 0 16px 16px 16px;
    color: #111;
    letter-spacing: -0.01em;
  }
}
</style>
