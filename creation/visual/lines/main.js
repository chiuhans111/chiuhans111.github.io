
let dz = 5
let lines = []

function setup() {
    lines = []
    let canvas = createCanvas(windowWidth, windowHeight, WEBGL);
    setAttributes('antialias', true);

    canvas.parent(document.getElementById('bg'))
    console.log('canvas created')
    setTheme()

    for (let t = 0; t < 20; t++) lines.push(
        new Line(random(width), random(height))
    )
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight, WEBGL)
}

let lastScrollY = scrollY
let yspeed = 0

function draw() {
    background(255)
    translate(-width / 2, -height / 2, 0);

    yspeed -= (scrollY - lastScrollY) / height
    lastScrollY = scrollY
    yspeed *= 0.98

    try {

        lines.map(x => x.draw())
    }catch(e){
        setup()
        console.log('retry')
    }

}