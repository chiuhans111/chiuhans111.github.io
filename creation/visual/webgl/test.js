
var vertexShaderText = `
precision mediump float;

attribute vec3 vertPosition;
attribute vec3 vertColor;
attribute vec2 vertTexCoord;

varying vec3 fragColor;
varying vec2 fragTexCoord;

uniform mat4 mWorld;
uniform mat4 mView;
uniform mat4 mProj;

uniform float time;


void main(){
    float offset = vertPosition.x+vertPosition.y+vertPosition.z;

    fragColor = vertColor;
    fragTexCoord = vertTexCoord;
    vec3 position = vertPosition*(sin(time/400.+offset*.5)+1.)/2.;
    gl_Position = mProj * mView * mWorld * vec4(position, 1.);
}
`


var fragmentShaderText = `
precision mediump float;

varying vec3 fragColor;
varying vec2 fragTexCoord;

uniform sampler2D sampler;
uniform float time;

void main(){
    vec4 color1 = texture2D(sampler, fragTexCoord);
    vec4 color2 = vec4(fragColor, 1.);
    vec4 color3 = vec4(fragTexCoord,sin(time/200.)/2.+.5,1.);
    gl_FragColor = color1*color3;
}
`



/**@type {HTMLCanvasElement} */
var canvas = document.querySelector('canvas')
var gl = canvas.getContext('webgl')
console.log(canvas)

if (!gl) {
    gl = canvas.getContext('experimental-webgl')
}

if (!gl) {
    console.log('webgl is not working')
}

//--- resize
function resize() {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    gl.viewport(0, 0, canvas.width, canvas.height)
}
resize()

window.addEventListener('resize', resize)


/**@returns {WebGLShader} */
function setupShader(type, code) {
    var shader = gl.createShader(type)
    gl.shaderSource(shader, code)
    gl.compileShader(shader)
    if (gl.getShaderParameter(shader, gl.COMPILE_STATUS))
        console.log('shader compile success')
    else console.warn('shader compile failed')
    console.log('shader info log', gl.getShaderInfoLog(shader))
    return shader
}



gl.enable(gl.DEPTH_TEST)
gl.enable(gl.CULL_FACE)


// create shader
var vertexShader = setupShader(gl.VERTEX_SHADER, vertexShaderText)
var fragmentShader = setupShader(gl.FRAGMENT_SHADER, fragmentShaderText)


var program = gl.createProgram()
gl.attachShader(program, vertexShader)
gl.attachShader(program, fragmentShader)

gl.linkProgram(program)


gl.validateProgram(program)
console.log('program info log:', gl.getProgramInfoLog(program))


//
// Create buffer
//

// var triangleVertices = [
//     // x, y,z,    r, g, b
//     0.0, 0.5, 0,   /*  */ 1, 1, 0,
//     -0.5, -0.5, 0, /*  */ 0, 1, 1,
//     0.5, -0.5, 0,  /*  */ 1, 0, 1
// ]

var boxVertices = []

let sideX = [1, 1, -1, -1]
let sideY = [-1, 1, 1, -1]
let sideU = [1, 1, 0, 0]
let sideV = [1, 0, 0, 1]
// top
for (let i = 0; i < 4; i++) boxVertices.push(
    sideY[i], 1, sideX[i], 0.5, 0.5, 0.5, sideU[i], sideV[i])
// front
for (let i = 0; i < 4; i++) boxVertices.push(
    sideX[i], sideY[i], 1, 0.75, 0.25, 0.5, sideU[i], sideV[i])
// right
for (let i = 0; i < 4; i++) boxVertices.push(
    1, sideX[i], sideY[i], 0.25, 0.25, 0.75, sideU[i], sideV[i])
// bottom
for (let i = 0; i < 4; i++) boxVertices.push(
    sideX[i], -1, sideY[i], 0.75, 0.5, 0.5, sideU[i], sideV[i])
// back
for (let i = 0; i < 4; i++) boxVertices.push(
    sideY[i], sideX[i], -1, 0.75, 0.25, 0.75, sideU[i], sideV[i])
// left
for (let i = 0; i < 4; i++) boxVertices.push(
    -1, sideY[i], sideX[i], 0.75, 0.75, 0.5, sideU[i], sideV[i])

var boxIndices = []
// top
for (var i = 0; i < 6; i++) {
    let j = i * 4
    boxIndices.push(
        0 + j, 1 + j, 2 + j, 0 + j, 2 + j, 3 + j
    )
}



// var triangleVertexBufferObject = gl.createBuffer()
// gl.bindBuffer(gl.ARRAY_BUFFER, triangleVertexBufferObject)
// gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(triangleVertices), gl.STATIC_DRAW)


var boxVertexBufferObject = gl.createBuffer()
gl.bindBuffer(gl.ARRAY_BUFFER, boxVertexBufferObject)
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(boxVertices), gl.STATIC_DRAW)

var boxIndexBufferObject = gl.createBuffer()
gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, boxIndexBufferObject)
gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(boxIndices), gl.STATIC_DRAW)

//
// setAttribute
//

var positionAttribLocation = gl.getAttribLocation(program, 'vertPosition')
var colorAttribLocation = gl.getAttribLocation(program, 'vertColor')
var texCoordAttribLocation = gl.getAttribLocation(program, 'vertTexCoord')

gl.vertexAttribPointer(
    positionAttribLocation,
    3, // size
    gl.FLOAT,
    false,
    8 * Float32Array.BYTES_PER_ELEMENT, // stride
    0)


gl.vertexAttribPointer(
    colorAttribLocation,
    3, // size
    gl.FLOAT,
    false,
    8 * Float32Array.BYTES_PER_ELEMENT, // stride
    3 * Float32Array.BYTES_PER_ELEMENT) // skip

gl.vertexAttribPointer(
    texCoordAttribLocation,
    2,
    gl.FLOAT,
    false,
    8 * Float32Array.BYTES_PER_ELEMENT,
    6 * Float32Array.BYTES_PER_ELEMENT)

gl.enableVertexAttribArray(positionAttribLocation)
gl.enableVertexAttribArray(colorAttribLocation)
gl.enableVertexAttribArray(texCoordAttribLocation)

//
// Create Texture
//

var boxTexture = gl.createTexture()
gl.bindTexture(gl.TEXTURE_2D, boxTexture)
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR)
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR)
gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE,
    document.getElementById('img'));
gl.bindTexture(gl.TEXTURE_2D, null)


//
// Matrix
//
gl.useProgram(program)



var matWorldUniformLocation = gl.getUniformLocation(program, 'mWorld')
var matViewUniformLocation = gl.getUniformLocation(program, 'mView')
var matProjUniformLocation = gl.getUniformLocation(program, 'mProj')



var worldMatrix = glMatrix.mat4.create()
var viewMatrix = glMatrix.mat4.create()
var projMatrix = glMatrix.mat4.create()

glMatrix.mat4.lookAt(viewMatrix, [0, 0, -5], [0, 0, 0], [0, 1, 0]) // eye, center, up


gl.uniformMatrix4fv(matWorldUniformLocation, false, worldMatrix)
gl.uniformMatrix4fv(matViewUniformLocation, false, viewMatrix)


//
// uniforms
//

var timeUniformLocation = gl.getUniformLocation(program, 'time')


//
// Main render loop
//


var angle = 0

var xrm = glMatrix.mat4.create()
var yrm = glMatrix.mat4.create()

function Loop() {
    angle = performance.now() / 1000 / 6 * 4 * Math.PI

    // transformation
    glMatrix.mat4.rotate(xrm, glMatrix.mat4.create(), angle, [0, 1, 0])
    glMatrix.mat4.rotate(yrm, glMatrix.mat4.create(), angle / 2, [0, 0, 1])
    glMatrix.mat4.mul(worldMatrix, xrm, yrm)
    gl.uniformMatrix4fv(matWorldUniformLocation, false, worldMatrix)


    // projection
    glMatrix.mat4.perspective(projMatrix,
        glMatrix.glMatrix.toRadian(45), canvas.width / canvas.height, 0.1, 1000)
    gl.uniformMatrix4fv(matProjUniformLocation, false, projMatrix)



    gl.uniform1f(timeUniformLocation, performance.now())

    //gl.drawArrays(gl.TRIANGLES, 0, 3)
    gl.bindTexture(gl.TEXTURE_2D, boxTexture)
    gl.activeTexture(gl.TEXTURE0)

    // Draw
    gl.clearColor(0, 0, 0, 1.0)
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)

    gl.drawElements(gl.TRIANGLES, boxIndices.length, gl.UNSIGNED_SHORT, 0)

    requestAnimationFrame(Loop)
}

requestAnimationFrame(Loop)