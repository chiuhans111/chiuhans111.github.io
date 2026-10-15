console.log(window.createVector)

class FlowParticle {

    constructor() {

        this.rand = random(1);
        this.speed = random(0.2, 1);
        this.p = createVector();
    }

    move(p) {
        let r = ng.get(p.x, p.y, this.rand / 4 + dz) * TWO_PI * 2;
        let x = cos(r) * this.speed;
        let y = sin(r) * this.speed;
        return createVector(x, y);
    }

    draw() {
        this.p.add(this.move(this.p))
        ellipse(this.p.x, this.p.y, 10, 10)
    }
}