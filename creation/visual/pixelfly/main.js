let canvas = document.querySelector('canvas')

let ctx = canvas.getContext('2d')

function resize() {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
}


colors = [
    '#31ad5d',
    '#213a2b'
]

resize()

window.addEventListener('resize', resize)
angle = 0
pixelsize = 20
let count = 0

gates = []
gates.push(new Gate())

coldtime = 20

function update() {
    coldtime--
    if (coldtime < 0) {
        coldtime = 10
        gates.unshift(new Gate())
    }
    ctx.save()
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.translate(canvas.width / 2, canvas.height / 2)
    ctx.rotate(angle+=0.01)
    
    gates.map(x => {
        x.draw(1)
    })
    getes = gates.filter(x => x.life)
    requestAnimationFrame(update)
    ctx.restore()
}


let clipDistant = 0.04

function Gate() {
    count++
    this.speed = Math.random() * 2 + .5
    this.angle = -count*0.3
    this.pixelcolor = colors[count%2]
    this.background = ['black', 'white'][count%2]
    this.pixels = []
    this.life = true
    for (var i = 0; i < 60; i++) {
        let speed = this.speed
        if(Math.random()<0.5) speed*=2
        this.pixels.push(new Pixel(Math.random() * 400 - 200, Math.random() * 20 + 3, 1, speed))
        this.pixels.push(new Pixel(Math.random() * 400 - 200, -Math.random() * 20 - 3, 1, speed))
    }

    this.distant = 1

    this.draw = function () {
        
        if (this.distant < -clipDistant) {
            this.life = false
        }
        if (!this.life) return
        
        ctx.save()
        ctx.rotate(this.angle)

        ctx.fillStyle=this.background
        let scale = 1 / (this.distant + clipDistant) * clipDistant
        ctx.fillRect(-1000,-1000,2000,1000-4*pixelsize*scale)
        ctx.fillRect(-1000,4*pixelsize*scale,2000,1000)
        
        ctx.scale(scale, scale)
        
        ctx.fillStyle = this.pixelcolor
        this.pixels.map(x => x.draw())


        ctx.restore()
        this.distant -= 0.002
    }
}


function Pixel(x, y, size, speed) {
    this.speed = speed
    this.x = Math.floor(x) * pixelsize
    this.y = Math.floor(y) * pixelsize
    this.size = size * pixelsize

    this.draw = function () {


        this.x -= pixelsize * this.speed
        if (this.x < -pixelsize * 200) {
            this.x += pixelsize * 400
        }
        ctx.fillRect(this.x, this.y, this.size, this.size)
    }
}


update()