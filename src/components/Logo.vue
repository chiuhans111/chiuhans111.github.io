<script setup lang="ts">
import { ref, onMounted } from 'vue'

const mounted = ref(false)

onMounted(() => {
  setTimeout(() => {
    mounted.value = true
  }, 100)
})
</script>

<template>
  <div class="logo">
    <div class="aspect-spacer"></div>
    <div
      :class="{
        center: true,
        show: mounted,
      }"
    >
      <div class="element element-01"></div>
      <div class="element element-02"></div>
      <div class="element element-03"></div>
      <div class="element element-04"></div>
      <div class="element element-05"></div>
      <div class="element element-06"></div>
      <div class="element element-07"></div>
      <div class="element element-08"></div>
      <div class="element element-09"></div>
      <div class="element element-10"></div>
      <div class="element element-11"></div>
      <div class="element element-12"></div>
      <div class="element element-13"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.logo {
  position: relative;
  width: 100%;
  max-width: 180px;
  background-color: transparent;
  border-radius: 100%;

  .aspect-spacer {
    padding-bottom: 100%;
    width: 100%;
  }

  .center {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    .element {
      position: absolute;
      transform: translate(0, 50px) rotate(-90deg) scale(0);
      width: 0;
      transition: width 0.6s cubic-bezier(0.16, 1, 0.3, 1), 
                  transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), 
                  border-radius 0.8s ease;
    }

    @for $i from 1 through 13 {
      .element:nth-child(#{$i}) {
        transition-delay: $i * 0.025s;
      }
    }
  }

  .center.show {
    .element {
      transform: translate(0%, 0%);
      border-radius: 2px;

      &-01 {
        width: 12.5%;
        height: 56.25%;
        left: 25%;
        top: -6.25%;
        background-color: #111;
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0;
        z-index: 1;
      }
      &-02 {
        width: 25%;
        height: 12.5%;
        left: 25%;
        top: 12.5%;
        background-color: #111;
      }
      &-03 {
        width: 12.5%;
        height: 20%;
        left: 0;
        top: 12.5%;
        background-color: #111;
      }
      &-04 {
        width: 25%;
        height: 25%;
        left: 0;
        top: 25%;
        background-color: #111;
        border-bottom-left-radius: 75%;
        border-bottom-right-radius: 0;
        &:before {
          position: absolute;
          display: block;
          content: "";
          background-color: white;
          width: 50%;
          height: 50%;
          left: 50%;
          bottom: 50%;
          border-top: solid 2px white;
          box-sizing: content-box;
          border-bottom-left-radius: 50%;
        }
        &:after {
          position: absolute;
          display: block;
          content: "";
          background-color: #111;
          width: 50%;
          height: 50%;
          right: -25%;
          top: 50%;
          border-radius: 100%;
        }
      }
      &-05 {
        width: 12.5%;
        height: 12.5%;
        left: 37.5%;
        top: 37.5%;
        background-color: #111;
        border-bottom-right-radius: 100%;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        border-top-right-radius: 2px;
        &:after {
          position: absolute;
          display: block;
          content: "";
          background-color: #111;
          width: 100%;
          height: 100%;
          left: -50%;
          top: 0;
          border-radius: 100%;
        }
      }
      &-06 {
        width: 12.5%;
        height: 37.5%;
        left: 62.5%;
        top: -6.25%;
        background-color: #111;
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0;
        z-index: 1;
      }
      &-07 {
        width: 37.5%;
        height: 12.5%;
        left: 62.5%;
        top: 12.5%;
        background-color: #111;
      }
      &-08 {
        width: 25%;
        height: 25%;
        left: 62.5%;
        top: 25%;
        background-color: #111;
        border-bottom-left-radius: 75%;
        border-bottom-right-radius: 0;
        &:before {
          position: absolute;
          display: block;
          content: "";
          background-color: white;
          width: 50%;
          height: 50%;
          left: 50%;
          bottom: 50%;
          border-right: solid 2px white;
          box-sizing: content-box;
          border-bottom-left-radius: 50%;
        }
        &:after {
          position: absolute;
          display: block;
          content: "";
          background-color: #111;
          width: 50%;
          height: 50%;
          right: -25%;
          top: 50%;
          border-radius: 100%;
        }
      }
      &-09 {
        width: 18.75%;
        height: 12.5%;
        left: 81.25%;
        top: 37.5%;
        background-color: #111;
      }
      &-10 {
        width: 12.5%;
        height: 56.25%;
        left: 50%;
        top: 50%;
        background-color: #111;
      }
      &-11 {
        width: 87.5%;
        height: 12.5%;
        left: 12.5%;
        top: 62.5%;
        background-color: #111;
        border-top-left-radius: 0%;
        border-bottom-left-radius: 0%;
        &:after {
          box-sizing: content-box;
          border-right: solid 1px #111;
          position: absolute;
          display: block;
          content: "";
          background-color: #111;
          width: 14.29%;
          height: 100%;
          left: -14.29%;
          top: 0%;
          border-bottom-left-radius: 100%;
          border-top-left-radius: 2px;
        }
      }
      &-12 {
        width: 25%;
        height: 12.5%;
        left: 0%;
        top: 87.5%;
        background-color: #111;
        border-top-right-radius: 0%;
        border-bottom-right-radius: 0%;
        &:after {
          box-sizing: content-box;
          border-right: solid 1px #111;
          position: absolute;
          display: block;
          content: "";
          background-color: #111;
          width: 50%;
          height: 100%;
          right: -50%;
          top: 0%;
          border-bottom-right-radius: 100%;
          border-top-right-radius: 2px;
        }
      }
      &-13 {
        width: 12.5%;
        height: 12.5%;
        left: 87.5%;
        top: 87.5%;
        background-color: #111;
        border-top-left-radius: 0%;
        border-bottom-left-radius: 0%;
        &:after {
          box-sizing: content-box;
          border-right: solid 1px #111;
          position: absolute;
          display: block;
          content: "";
          background-color: #111;
          width: 100%;
          height: 100%;
          left: -100%;
          top: 0%;
          border-bottom-left-radius: 100%;
          border-top-left-radius: 2px;
        }
      }
    }
  }
}
</style>
