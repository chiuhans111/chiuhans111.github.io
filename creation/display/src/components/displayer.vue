<template>
  <canvas ref="canvas">
  </canvas>
</template>

<script>
import displayerModule from './displayerModule.js'
import application from './application.js'

export default {
    data(){
        return {
            run: null
        }
    },
    mounted(){
        this.run = displayerModule.setup(this.$refs.canvas, application)

    },
    destroyed(){
        this.run.destroy()
    } 
}
</script>

<style>
canvas{
    width: 100%;
    height: 100%;
}
</style>