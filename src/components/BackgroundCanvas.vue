<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

class Particle {
  x: number
  y: number
  s: number
  vx: number
  vy: number
  curl: number

  constructor(x: number, y: number, s: number) {
    this.x = x
    this.y = y
    this.s = s
    this.vx = 0
    this.vy = 0
    this.curl = (Math.random() - 0.5) * 3
  }

  update(field: (x: number, y: number) => [number, number]) {
    const f = field(this.x, this.y)
    this.vx += f[0]
    this.vy += f[1]

    this.x += this.vx * 0.1
    this.y += this.vy * 0.1

    this.vx *= 0.9
    this.vy *= 0.9

    if (this.x < -this.s) this.x = window.innerWidth + this.s
    if (this.y < -this.s) this.y = window.innerHeight + this.s
    if (this.x > window.innerWidth + this.s) this.x = -this.s
    if (this.y > window.innerHeight + this.s) this.y = -this.s
  }
}

function fieldfunction(
  x: number,
  y: number,
  fx: number,
  fy: number,
  div: number = -1,
  cur: number = 1,
  decay: number = -0.111,
  eqdist: number = 50
): [number, number] {
  let dx = x - fx
  let dy = y - fy

  const innerWidth = window.innerWidth
  const innerHeight = window.innerHeight

  if (dx > innerWidth / 2) dx -= innerWidth
  if (dx < -innerWidth / 2) dx += innerWidth
  if (dy > innerHeight / 2) dy -= innerHeight
  if (dy < -innerHeight / 2) dy += innerHeight

  const divx = dx
  const divy = dy
  const curx = dy
  const cury = -dx

  const dd = dx * dx + dy * dy
  if (dd > 36000) return [0, 0] // Distance cutoff: exp(-d*0.111) is negligible beyond 190px
  const d = Math.sqrt(dd)

  const a = (d - eqdist) * Math.exp(d * decay)
  const b = Math.exp(d * decay)
  return [divx * div * a + curx * cur * b, divy * div * a + cury * cur * b]
}

const canvasRef = ref<HTMLCanvasElement | null>(null)
let run = true
let ctx: CanvasRenderingContext2D | null = null
const particles: Particle[] = []
const mouse = { x: 0, y: 0 }
let scroll = 0
let scrollV = 0
let pressed = false
let touch: [number, number][] = []
let rafId: number | null = null

function setup() {
  run = true
  if (!canvasRef.value) return
  ctx = canvasRef.value.getContext('2d')
  particles.length = 0
  for (let i = 0; i < 28; i++) {
    particles.push(
      new Particle(
        Math.random() * window.innerWidth,
        Math.random() * window.innerHeight,
        i * 0.4 + 4
      )
    )
  }
}

function field(x: number, y: number): [number, number] {
  const fields: [number, number][] = []
  fields.push(
    fieldfunction(
      x,
      y,
      mouse.x,
      mouse.y,
      -0.02,
      -1,
      -0.05,
      pressed ? 200 : 50
    )
  )
  for (const p of particles) {
    fields.push(
      fieldfunction(x, y, p.x, p.y, -2, p.curl, -0.111, p.s * 10)
    )
  }
  for (const t of touch) {
    fields.push(fieldfunction(x, y, t[0], t[1], -0.02, -1, -0.05, 200))
  }
  fields.push([0, scrollV * -0.1])
  fields.push([
    Math.sin((y / window.innerHeight) * Math.PI * 4) * 0.5 + 0.2,
    Math.cos((x / window.innerWidth) * Math.PI * 4) * 0.5 - 0.2,
  ])
  return fields.reduce(
    (a, b) => [a[0] + b[0], a[1] + b[1]],
    [0, 0]
  )
}

function update() {
  scrollV = window.scrollY - scroll
  scroll = window.scrollY
  if (run) rafId = requestAnimationFrame(update)
  if (!canvasRef.value || !ctx) return

  ctx.fillStyle = '#f0f0f0'
  ctx.clearRect(0, 0, canvasRef.value.width, canvasRef.value.height)

  for (const p of particles) {
    p.y -= scrollV * ((p.s + 10) / 200)
    p.update(field)
    ctx.beginPath()
    ctx.ellipse(p.x, p.y, p.s, p.s, 0, 0, Math.PI * 2)
    ctx.closePath()
    ctx.fill()
  }
}

function resize() {
  if (!canvasRef.value) return
  canvasRef.value.width = window.innerWidth
  canvasRef.value.height = window.innerHeight
}

function mousemove(e: MouseEvent) {
  mouse.x = e.clientX
  mouse.y = e.clientY
  pressed = e.buttons > 0
}

function touchmove(e: TouchEvent) {
  touch = Array.from(e.touches).map((t) => [t.clientX, t.clientY])
}

onMounted(() => {
  resize()
  setup()
  update()
  window.addEventListener('resize', resize)
  window.addEventListener('mousedown', mousemove)
  window.addEventListener('mousemove', mousemove)
  window.addEventListener('mouseup', mousemove)
  window.addEventListener('touchstart', touchmove)
  window.addEventListener('touchmove', touchmove)
  window.addEventListener('touchend', touchmove)
})

onUnmounted(() => {
  run = false
  if (rafId) cancelAnimationFrame(rafId)
  window.removeEventListener('resize', resize)
  window.removeEventListener('mousedown', mousemove)
  window.removeEventListener('mousemove', mousemove)
  window.removeEventListener('mouseup', mousemove)
  window.removeEventListener('touchstart', touchmove)
  window.removeEventListener('touchmove', touchmove)
  window.removeEventListener('touchend', touchmove)
})
</script>

<template>
  <div class="background-canvas-wrap">
    <canvas ref="canvasRef"></canvas>
  </div>
</template>

<style scoped>
.background-canvas-wrap {
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 0;
  pointer-events: none;
}
canvas {
  display: block;
  width: 100%;
  height: 100%;
}
</style>
