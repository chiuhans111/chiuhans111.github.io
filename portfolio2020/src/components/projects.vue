<template>
  <div>
    <div class="project-head">
      <!-- <div class="project-fields">
        <span class="project-field" v-for="(field, i) in fields" :key="i">
          {{ field }}
        </span>
      </div> -->
    </div>

    <div class="project-table">
      <div class="project-table_container">
        <div
          class="project-item"
          v-for="(project, i) in projects"
          :key="i"
          @click="window.open(project.url)"
        >
          <div class="project-item_content">
            <div class="project-item_image">
              <img :src="project.covers['404']" alt="" />
            </div>
            <div class="project-item_time">
              {{ new Date(project.published_on).toDateString() }}
            </div>
            <h2>
              {{ project.name }}
            </h2>
            <!-- <div class="project-item_fields">
            <span
              class="project-item_field"
              v-for="(field, j) in project.fields"
              :key="j"
            >
              {{ field }}
            </span>
          </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import projects from "../assets/json/projects.json";

var fields = {};

projects.projects.map((project) => {
  project.fields.map((field) => {
    fields[field] = true;
  });
});
export default {
  data() {
    return {
      projects: projects.projects,
      fields: Object.keys(fields),
      window,
    };
  },
};
</script>

<style>
</style>