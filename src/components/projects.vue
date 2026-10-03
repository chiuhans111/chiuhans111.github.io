<script setup lang="ts">
import { ref } from 'vue'
import projectsData from '../assets/json/projects.json'

interface ProjectItem {
  id?: number | string
  name: string
  url: string
  published_on: number
  covers: Record<string, string>
}

const projects = ref<ProjectItem[]>(projectsData.projects as unknown as ProjectItem[] || [])

function openProject(url: string) {
  if (url) {
    window.open(url, '_blank', 'noreferrer')
  }
}
</script>

<template>
  <div class="project-wrapper">
    <div class="project-head"></div>

    <div class="project-table">
      <div class="project-table_container">
        <div
          class="project-item"
          v-for="(project, i) in projects"
          :key="project.id || i"
          @click="openProject(project.url)"
        >
          <div class="project-item_content">
            <div class="project-item_image">
              <img
                :src="project.covers['404'] || project.covers['808']"
                :alt="project.name"
                loading="lazy"
              />
            </div>
            <div class="project-item_time">
              {{ new Date(project.published_on * 1000).toDateString() }}
            </div>
            <h2>
              {{ project.name }}
            </h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.project-wrapper {
  width: 100%;
}
</style>