<template>
  <div class="logo">
    <img class="px" src="../assets/1px.png" alt="" />
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

<script>
export default {
  data() {
    return {
      mounted: false,
    };
  },

  mounted() {
    setTimeout(() => {
      this.mounted = true;
    }, 0);
  },
};
</script>

<style scoped lang="scss">
.logo {
  position: relative;
  width: 100%;
  background-color: white;
  border-radius: 100%;
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
      transition: width 0.6s, transform 0.4s, border-radius 0.8s;
    }

    @for $i from 1 through 13 {
      .element:nth-child(#{$i}) {
        transition-delay: $i * 0.05s;
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
        top: -6.125%;
        background-color: black;
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0;
        z-index: 1;
      }
      &-02 {
        width: 25%;
        height: 12.5%;
        left: 25%;
        top: 12.5%;
        background-color: black;
      }

      &-03 {
        width: 12.5%;
        height: 20%;
        left: 0;
        top: 12.5%;
        background-color: black;
      }

      &-04 {
        width: 25%;
        height: 25%;
        left: 0;
        top: 25%;
        background-color: black;
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
          background-color: black;
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
        background-color: black;
        border-bottom-right-radius: 100%;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        border-top-right-radius: 2px;
        &:after {
          position: absolute;
          display: block;
          content: "";
          background-color: black;
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
        top: -6.125%;
        background-color: black;
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0;
        z-index: 1;
      }

      &-07 {
        width: 37.5%;
        height: 12.5%;
        left: 62.5%;
        top: 12.5%;
        background-color: black;
      }

      &-08 {
        width: 25%;
        height: 25%;
        left: 62.5%;
        top: 25%;
        background-color: black;
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
          background-color: black;
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
        background-color: black;
      }

      &-10 {
        width: 12.5%;
        height: 56.25%;
        left: 50%;
        top: 50%;
        background-color: black;
      }

      &-11 {
        width: 87.5%;
        height: 12.5%;
        left: 12.5%;
        top: 62.5%;
        background-color: black;
        border-top-left-radius: 0%;
        border-bottom-left-radius: 0%;
        &:after {
          box-sizing: content-box;
          border-right: solid 1px black;
          position: absolute;
          display: block;
          content: "";
          background-color: black;
          width: 14.29%;
          height: 100%;
          left: -14.29%;
          top: 0%;
          border-bottom-left-radius: 100%;
        }
      }

      &-12 {
        width: 25%;
        height: 12.5%;
        left: 0%;
        top: 87.5%;
        background-color: black;
        border-top-right-radius: 0%;
        border-bottom-right-radius: 0%;
        &:after {
          box-sizing: content-box;
          border-right: solid 1px black;
          position: absolute;
          display: block;
          content: "";
          background-color: black;
          width: 50%;
          height: 100%;
          right: -50%;
          top: 0%;
          border-bottom-right-radius: 100%;
        }
      }

      &-13 {
        width: 12.5%;
        height: 12.5%;
        left: 87.5%;
        top: 87.5%;
        background-color: black;
        border-top-left-radius: 0%;
        border-bottom-left-radius: 0%;
        &:after {
          box-sizing: content-box;
          border-right: solid 1px black;
          position: absolute;
          display: block;
          content: "";
          background-color: black;
          width: 100%;
          height: 100%;
          left: -100%;
          top: 0%;
          border-bottom-left-radius: 100%;
        }
      }
    }
  }
}

.hidden .element {
  width: 0%;
}

.px {
  opacity: 0;
  width: 100%;
  height: auto;
}
</style>