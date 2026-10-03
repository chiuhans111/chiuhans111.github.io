<script setup lang="ts">
import PortfolioTarget from './views/PortfolioTarget.vue'
import BackgroundCanvas from './components/BackgroundCanvas.vue'
</script>

<template>
  <div class="portfolio-app">
    <!-- HANS CHIU PARTICLES VECTOR FIELD -->
    <BackgroundCanvas />

    <!-- AUTHENTIC PORTFOLIO CONTENT -->
    <PortfolioTarget />
  </div>
</template>

<style>
*, *::before, *::after {
  box-sizing: border-box;
}

html, body {
  margin: 0;
  padding: 0;
  background-color: #fafafa;
  color: #111111;
  font-family: "Outfit", "Noto Sans TC", sans-serif;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
}

::selection {
  background: #111;
  color: #fff;
}

.portfolio-app {
  min-height: 100vh;
  position: relative;
}
</style>
