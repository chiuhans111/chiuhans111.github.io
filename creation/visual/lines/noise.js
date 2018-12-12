class LoopNoiseGenerator {
    constructor() {
        this.w = 1;
        this.h = 1;
        this.dx = 0;
        this.dy = 0;
        this.s = .001;
        this.m = 1;
        this.max = Number.MIN_VALUE;
        this.min = Number.MAX_VALUE;
    }

    get(x, y, z) {


        this.w = width;
        this.h = height;

        x %= this.w;
        y %= this.h;

        let fx = x / this.w;
        let fy = y / this.h;

        x += this.dx;
        y += this.dy;
        let sw = this.w * this.s;
        let sh = this.h * this.s;
        let sx = x * this.s;
        let sy = y * this.s;

        let a = noise(sx, sy, z);
        let b = noise(sx + sw, sy, z);
        let c = noise(sx, sy + sh, z);
        let d = noise(sx + sw, sy + sh, z);

        let e = lerp(b, a, fx);
        let f = lerp(d, c, fx);

        let g = lerp(f, e, fy) * this.m;
        if (g > this.max) this.max = g;
        if (g < this.min) this.min = g;

        let dx = x - mouseX;
        let dy = y - mouseY;
        let gr = atan2(dy, dx) / TWO_PI / 2;
        let dd = min(1, sqrt(dx * dx + dy * dy) / 100);

        let gd = gr - g;
        if (gd < 0) gd += 0.5;
        gd %= 0.5;
        if (gd > 0.25) gd -= 0.5;
        return g + gd * (1 - dd) * 0.5;
    }
}


let ng = new LoopNoiseGenerator();