class Line extends FlowParticle {



    constructor(x, y) {
        super()

        this.points = new Array();

        this.weight = pow(random(1, 4), 2);
        this.c = random(1);
        this.lightness = random(0.95, 1);

        this.len = floor(random(50, 400));

        this.p = createVector(x, y);
        this.speed = random(1, 5) * 0.8;
        this.rand += pow(this.c - 0.5, 2) * 2;
        this.len /= this.speed;
        this.weight /= constrain(this.len / 50, 1, 2);


    }


    update() {
        this.p.add(this.move(this.p));
        this.points.push(this.p.copy());

        let b = false;
        while (this.p.x < 0) { b = true; this.p.x += width; }
        while (this.p.y < 0) { b = true; this.p.y += height; }
        if (this.p.x > width) { b = true; this.p.x %= width; }
        if (this.p.y > height) { b = true; this.p.y %= height; }

        if (b) {
            this.points.push(null);

            if (this.points.length > 1) {
                let n1 = this.points[this.points.length - 2];
                let n2 = this.points[this.points.length - 1];
                if (n1 != null && n2 != null) {
                    let pre = p.copy();
                    this.points.push(pre.add(p5.Vector.sub(n1, n2)));
                }
            }

            this.points.push(this.p.copy());
        }


        while (this.points.length > this.len) this.points.shift();
    }

    draw() {
        this.update();
        fill(255);
        noStroke();

        push()

        for (let i = 0; i < this.points.length; i++) {


            if (this.points[i] != null) {
                this.points[i].y += yspeed * (this.rand * 3)
                    * (this.points.length - i + 0.1)
                    / this.points.length
            }


            let f = i / this.points.length;
            let w = this.weight;

            let p = this.points[i];

            if (p == null) {
                endShape();
                beginShape(TRIANGLE_STRIP);
                continue;
            }

            let l = null;
            let r = null;
            if (i > 0) l = this.points[i - 1];
            if (i < this.points.length - 1) r = this.points[i + 1];
            if (l == null && r != null) l = p5.Vector.sub(p5.Vector.mult(p, 2), r);
            if (r == null && l != null) r = p5.Vector.sub(p5.Vector.mult(p, 2), l);
            if (l == null && r == null) continue;

            let dl = p5.Vector.sub(l, p);
            let dr = p5.Vector.sub(r, p);

            let n1 = p5.Vector.add(dl.normalize(), dr.normalize());
            let n2 = p5.Vector.sub(dl, dr);
            let n = createVector();

            n.x = n2.y;
            n.y = -n2.x;

            // dynamic width
            // let cap = this.weight * 2 -
            //     min(min(i, this.points.length - i - 1) * this.speed, this.weight * 2);
            w = sin(i / this.points.length * PI) * this.weight


            let dn = n.copy().normalize().mult(w);


            let a = p5.Vector.add(p, dn);
            let b = p5.Vector.sub(p, dn);



            let cc = (lerpColor(theme.red, theme.orange, f));
            if (this.c > 0.5) cc = (lerpColor(theme.green, theme.blue, f));
            //cc = lerpColor(color(255, 128), cc, lightness);
            //stroke(cc)
            fill(cc);

            if (i == 0) {
                beginShape(TRIANGLE_STRIP);
            }

            vertex(a.x, a.y, 1 + this.rand);
            vertex(b.x, b.y, 1 + this.rand);
            if (i == this.points.length - 1) {
                endShape();
            }

            //PVector v = n.normalize();
            //float ww = f*PI*5 + (float)frameCount*speed/2;

            //p.x+=v.x*sin(ww)/(speed+1)/8;
            //p.y+=v.y*sin(ww)/(speed+1)/8;

            p.z += (1 - f);
        }

        pop()
    }
}