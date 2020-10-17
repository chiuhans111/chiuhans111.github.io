<template>
  <div class="background">
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script>
class Particle {
  constructor(x, y, s) {
    this.x = x;
    this.y = y;
    this.s = s;
    this.vx = 0;
    this.vy = 0;
    this.curl = (Math.random() - 0.5) * 3;
  }

  update(field) {
    let f = field(this.x, this.y);
    this.vx += f[0];
    this.vy += f[1];

    this.x += this.vx * 0.1;
    this.y += this.vy * 0.1;

    this.vx *= 0.9;
    this.vy *= 0.9;

    if (this.x < -this.s) this.x = innerWidth + this.s;
    if (this.y < -this.s) this.y = innerHeight + this.s;
    if (this.x > innerWidth + this.s) this.x = -this.s;
    if (this.y > innerHeight + this.s) this.y = -this.s;
  }
}

function fieldfunction(
  x,
  y,
  fx,
  fy,
  div = -1,
  cur = 1,
  decay = -0.111,
  eqdist = 50
) {
  let dx = x - fx;
  let dy = y - fy;

  if (dx > innerWidth / 2) dx -= innerWidth;
  if (dx < -innerWidth / 2) dx += innerWidth;
  if (dy > innerHeight / 2) dy -= innerHeight;
  if (dy < -innerHeight / 2) dy += innerHeight;

  let divx = dx;
  let divy = dy;
  let curx = dy;
  let cury = -dx;

  let dd = dx * dx + dy * dy;
  let d = Math.sqrt(dd);

  let a = (d - eqdist) * Math.exp(d * decay);
  let b = Math.exp(d * decay);
  return [divx * div * a + curx * cur * b, divy * div * a + cury * cur * b];
}

export default {
  data() {
    return {
      run: true,
      ctx: null,
      particles: [],
      mouse: {
        x: 0,
        y: 0,
      },
      scroll: 0,
      scrollV: 0,
      pressed: false,
      touch: [],
    };
  },
  methods: {
    setup() {
      this.run = true;
      this.ctx = this.$refs.canvas.getContext("2d");
      for (var i = 0; i < 20; i++) {
        this.particles.push(
          new Particle(
            Math.random() * innerWidth,
            Math.random() * innerHeight,
            i * 0.5 + 5
          )
        );
      }
    },
    update() {
      console.log(window.scrollY);
      this.scrollV = window.scrollY - this.scroll;
      this.scroll = window.scrollY;
      if (this.run) requestAnimationFrame(this.update);
      /**@type {HTMLCanvasElement} */
      var canvas = this.$refs.canvas;
      /**@type {CanvasRenderingContext2D} */
      var ctx = this.ctx;

      ctx.fillStyle = "#eee";

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      //   ctx.beginPath();
      //   ctx.moveTo(0, 0);
      //   ctx.lineTo(canvas.width, canvas.height);
      //   ctx.stroke();

      for (let p of this.particles) {
        p.y -= this.scrollV * ((p.s + 10) / 200);
        p.update(this.field);
        ctx.beginPath();
        ctx.ellipse(p.x, p.y, p.s, p.s, 0, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }

      //   if (this.pressed) {
      //     ctx.ellipse(this.mouse.x, this.mouse.y, 5, 5, 0, 0, Math.PI * 2);
      //     ctx.closePath();
      //   }

      //   for (let t of this.touch) {
      //     ctx.ellipse(t[0], t[1], 5, 5, 0, 0, Math.PI * 2);
      //     ctx.closePath();
      //   }
    },
    resize() {
      this.$refs.canvas.width = innerWidth;
      this.$refs.canvas.height = innerHeight;
    },

    field(x, y) {
      let fields = [];
      fields.push(
        fieldfunction(
          x,
          y,
          this.mouse.x,
          this.mouse.y,
          -0.02,
          -1,
          -0.05,
          this.pressed ? 200 : 50
        )
      );
      for (let p of this.particles) {
        fields.push(
          fieldfunction(x, y, p.x, p.y, -2, p.curl, -0.111, p.s * 10)
        );
      }
      for (let t of this.touch) {
        fields.push(fieldfunction(x, y, t[0], t[1], -0.02, -1, -0.05, 200));
      }
      fields.push([0, this.scrollV * -0.1]);
      fields.push([
        Math.sin((y / innerHeight) * Math.PI * 4) * 0.5 + 0.2,
        Math.cos((x / innerWidth) * Math.PI * 4) * 0.5 - 0.2,
      ]);
      return fields.reduce(
        (a, b) => {
          return [a[0] + b[0], a[1] + b[1]];
        },
        [0, 0]
      );
    },

    mousemove(e) {
      this.mouse.x = e.x;
      this.mouse.y = e.y;
      this.pressed = e.buttons > 0;
    },

    touchmove(e) {
      this.touch = Array.from(e.touches).map((t) => {
        return [t.clientX, t.clientY];
      });
    },
  },
  mounted() {
    this.resize();
    this.setup();
    this.update();
    addEventListener("resize", this.resize);
    addEventListener("mousedown", this.mousemove);
    addEventListener("mousemove", this.mousemove);
    addEventListener("mouseup", this.mousemove);
    addEventListener("touchstart", this.touchmove);
    addEventListener("touchmove", this.touchmove);
    addEventListener("touchend", this.touchmove);
  },
  destroyed() {
    this.run = false;
    removeEventListener("resize", this.resize);
    removeEventListener("mousemove", this.mousemove);
    removeEventListener("touchstart", this.touchmove);
    removeEventListener("touchmove", this.touchmove);
    removeEventListener("touchend", this.touchmove);
  },
};
</script>

<style scoped>
.background {
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  z-index: -1;
}
</style>