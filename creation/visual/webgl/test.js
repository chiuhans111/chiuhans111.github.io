var vertexShaderText = [
    "precision mediump float;",
    "",
    "attribute vec3 vertPosition;",
    "attribute vec3 vertColor;",
    "attribute vec2 vertTexCoord;",
    "",
    "varying vec3 fragColor;",
    "varying vec2 fragTexCoord;",
    "",
    "uniform mat4 mWorld;",
    "uniform mat4 mView;",
    "uniform mat4 mProj;",
    "",
    "uniform float time;",
    "",
    "#define PI 3.1415926535",
    "",
    "void main(){",
    "   float offset = vertPosition.z;",
    "",
    "   fragColor = vertColor;",
    "   fragTexCoord = vertTexCoord;",
    "   vec4 position = vec4(vertPosition,1);",
    "",
    "   position = mWorld * position;",
    "   position = mView * position;",
    "   position = mProj * position;",
    "",
    "",
    "   gl_Position = position;",
    "}"
].join('\n');



var fragmentShaderText = [
    "precision mediump float;",
    "",
    "varying vec3 fragColor;",
    "varying vec2 fragTexCoord;",
    "",
    "uniform sampler2D sampler;",
    "uniform float time;",
    "",
    "#define gridsize 12.",
    "#define PI 3.1415926535",
    "",
    "float random(vec2 v){",
    "    return fract(fract(sin(dot(v, vec2(12.34, 56.78))) * 10.) * 10.);",
    "}",
    "",
    "",
    "void main(){",
    "",
    "",
    "    vec2 transformedCoord = fragTexCoord;",
    "",
    "",
    "",
    "",
    "    vec2 grid = fract(fragTexCoord * gridsize);",
    "    vec2 gridi = floor(fragTexCoord * gridsize);",
    "",
    "    float strip = step(.5, fract(fragTexCoord.y * gridsize / 2.));",
    "",
    "",
    "",
    "",
    "    float stripOffset = gridi.y / gridsize;",
    "",
    "    float utime = fract(time / 4. + stripOffset / 3.);",
    "    float atime = smoothstep(0.7, 0.9, utime);",
    "",
    "",
    "",
    "    float loop = 1. - max(0., cos(atime * PI / 2.));",
    "",
    "    vec2 grid2 = fract((fragTexCoord + vec2(loop, 0)) * gridsize);",
    "    vec2 gridi2 = mod(floor((fragTexCoord + vec2(loop, 0)) * gridsize), gridsize);",
    "",
    "    vec2 randomOff = vec2(",
    "        step(.5, random(gridi2)),",
    "        step(.5, random(gridi2 + 10.))",
    "    );",
    "",
    "    float randomGrid = random(gridi2 + 80.);",
    "    float ballGradient =",
    "        (1. - length(grid2 - randomOff))",
    "        * step(.2, random(gridi2 + 20.))  // black block",
    "        + (1. - step(.2, random(gridi2 + 20.))) * grid2.x;",
    "",
    "",
    "    float utime2 = 1. - fract(time / 8. + stripOffset / 6. + randomGrid * .1);",
    "    float atime2 = smoothstep(0.1, 0.2, utime2) * (1. - smoothstep(0.8, 0.9, utime2));",
    "",
    "    float ball = step(cos(atime2 * PI + PI), ballGradient);",
    "",
    "    transformedCoord = fract(transformedCoord + vec2(loop, ball * .5));",
    "",
    "    vec3 color1 = texture2D(sampler, transformedCoord).rgb;",
    "",
    "    gl_FragColor = vec4(color1, 1);",
    "",
    "    // gl_FragColor = vec4(transformedCoord,1, 1);",
    "",
    "    // gl_FragColor = vec4(randomOff,0,1);",
    "}"].join('\n')




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
let sideU = [1, 0, 0, 1]
let sideV = [0, 0, 1, 1]
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

glMatrix.mat4.lookAt(viewMatrix, [0, 0, -8], [0, 0, 0], [0, 1, 0]) // eye, center, up


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
var zrm = glMatrix.mat4.create()

var zAngle = 0
var zAngleSpeed = 0
var lastOffset = 0

function Loop() {
    angle = (performance.now() / 1000 / 6 * Math.PI)

    // transformation
    glMatrix.mat4.rotate(xrm, glMatrix.mat4.create(), angle, [0, 1, 0])
    glMatrix.mat4.rotate(yrm, glMatrix.mat4.create(), angle / 2, [0, 0, 1])
    glMatrix.mat4.rotate(zrm, glMatrix.mat4.create(), zAngle, [1, 0, 0])

    let offsetDelta = window.pageYOffset - lastOffset
    lastOffset = window.pageYOffset
    if (Math.abs(offsetDelta) > Math.abs(zAngleSpeed) / 2)
        zAngleSpeed = offsetDelta
    zAngleSpeed *= 0.98
    zAngle += zAngleSpeed / 3000

    glMatrix.mat4.mul(worldMatrix, xrm, zrm)
    glMatrix.mat4.mul(worldMatrix, worldMatrix, yrm)
    gl.uniformMatrix4fv(matWorldUniformLocation, false, worldMatrix)


    // projection
    glMatrix.mat4.perspective(projMatrix,
        glMatrix.glMatrix.toRadian(45), canvas.width / canvas.height, 0.1, 1000)
    gl.uniformMatrix4fv(matProjUniformLocation, false, projMatrix)



    gl.uniform1f(timeUniformLocation, (zAngle + performance.now() / 1000) % 24)

    //gl.drawArrays(gl.TRIANGLES, 0, 3)
    gl.bindTexture(gl.TEXTURE_2D, boxTexture)
    gl.activeTexture(gl.TEXTURE0)

    // Draw
    gl.clearColor(0, 0, 0, 0)
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)

    gl.drawElements(gl.TRIANGLES, boxIndices.length, gl.UNSIGNED_SHORT, 0)

    requestAnimationFrame(Loop)
}

requestAnimationFrame(Loop)