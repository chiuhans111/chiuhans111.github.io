<template>
  <div id="app">
    <displayer></displayer>
  </div>
</template>

<script>
import displayer from "./components/displayer.vue";

export default {
  name: "app",
  components: {
    displayer
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  width: 100%;
  height: 100%;
}

html,
body {
  margin: 0;
  width: 100%;
  height: 100%;
}
</style>
