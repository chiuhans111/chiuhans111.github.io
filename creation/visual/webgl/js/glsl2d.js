//
// basic setup
//

/**@type {HTMLCanvasElement} */
var canvas = document.querySelector('canvas')
var gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
var program = gl.createProgram()

function resize() {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    gl.viewport(0, 0, canvas.width, canvas.height)
}
resize()

window.addEventListener('resize', resize)

//
// shader setup
//
function createShader(type, code) {
    var shader = gl.createShader(type)
    gl.shaderSource(shader, code)
    gl.compileShader(shader)
    if (gl.getShaderParameter(shader, gl.COMPILE_STATUS))
        console.log('shader compile success')
    else console.warn('shader compile failed')
    console.log('shader info log', gl.getShaderInfoLog(shader))
    gl.attachShader(program, shader)
    return shader
}
console.log('VERTEX-------------')
createShader(gl.VERTEX_SHADER, document.getElementById('shader-vertex').textContent)
console.log('FRAGMENT-----------')
createShader(gl.FRAGMENT_SHADER, document.getElementById('shader-fragment').textContent)
//
// start program
//
gl.linkProgram(program)
gl.validateProgram(program)
console.log('program info', gl.getProgramInfoLog(program))
gl.useProgram(program)
//
// scene setup
//

//
// buffer
//
gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer())
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
    1, 1, 0, -1, 1, 0, -1, -1, 0,
    1, 1, 0, -1, -1, 0, 1, -1, 0
]), gl.STATIC_DRAW)

var vertex_position_location = gl.getAttribLocation(program, 'vertPosition')
gl.vertexAttribPointer(
    vertex_position_location,
    3, gl.FLOAT, false, 3 * Float32Array.BYTES_PER_ELEMENT, 0
)
gl.enableVertexAttribArray(vertex_position_location)

//
// uniforms
//
let uniforms = {
    time: gl.getUniformLocation(program, 'time'),
    mouse: gl.getUniformLocation(program, 'mouse'),
    now: gl.getUniformLocation(program, 'now'),
    u_size: gl.getUniformLocation(program, 'u_size'),
}
gl.uniform1f(uniforms.time, 0)
gl.uniform2f(uniforms.mouse, 0, 0)
gl.uniform2f(uniforms.u_size, 0, 0)
gl.uniform1f(uniforms.now, 0)

//
// Loop
//
let mouseX = 0
let mouseY = 0

window.addEventListener('mousemove', function (event) {
    mouseX = (event.x / window.innerWidth) * 2 - 1
    mouseY = (event.y / window.innerHeight) * 2 - 1
    gl.uniform2f(uniforms.mouse, mouseX, -mouseY)
})


function Loop() {

    //
    // update uniform
    //
    gl.uniform1f(uniforms.time, performance.now() / 1000 % 10)
    gl.uniform1f(uniforms.now, Date.now() / 1000)
    gl.uniform2f(uniforms.u_size, window.innerWidth, window.innerHeight)


    //
    // main drawing
    //
    gl.clearColor(0, 0, 0, 0)
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)
    gl.drawArrays(gl.TRIANGLES, 0, 6)

    requestAnimationFrame(Loop)
}
requestAnimationFrame(Loop)


