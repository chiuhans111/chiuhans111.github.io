
let dz = 0
let lines = []

function setup() {
    let canvas = createCanvas(windowWidth, windowHeight, WEBGL);
    
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


function draw() {
    background(255)
    translate(-width/2,-height/2,0); 
    try{

        lines.map(x=>x.draw())
    }catch(e){
        window.location.reload()
    }
}