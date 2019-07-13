import { Scene, Camera, WebGLRenderer, Mesh, PlaneGeometry, ShaderMaterial, WebGLRenderTarget, Vector2, Vector3 } from "three";


let camera = new Camera
let renderer = new WebGLRenderer({
    antialias: true
})

import fragmentShader from './shader/shader.frag'
import vertexShader from './shader/shader.vert'
import ShaderPlane from './shaderPlane';
import pos_shader from './shader/pos_shader.frag'
import vel_shader from './shader/vel_shader.frag'
import { DoubleBuffer } from "./DoubleBuffer";


let posBuffer = new DoubleBuffer
let velBuffer = new DoubleBuffer


let uniforms = {
    init: { value: 1 },
    pos_texture: { value: posBuffer.texture },
    vel_texture: { velBuffer: posBuffer.texture },
    size: { value: new Vector2(1, 1) },
    res: { value: new Vector2(1, 1) },
    actor: { value: new Vector2(0, 0) },
    mover: { value: new Vector3(0, 0, 0) },
    time: { value: 0 }
}


let scene_pos_update = new Scene
let plane_pos_update = new ShaderPlane(vertexShader, pos_shader, uniforms)
scene_pos_update.add(plane_pos_update.mesh)


let scene_vel_update = new Scene
let plane_vel_update = new ShaderPlane(vertexShader, vel_shader, uniforms)
scene_vel_update.add(plane_vel_update.mesh)



let scene = new Scene
let plane = new ShaderPlane(vertexShader, fragmentShader, uniforms)
scene.add(plane.mesh)



function update() {
    requestAnimationFrame(update)

    renderer.setRenderTarget(null)
    renderer.render(scene, camera)


    uniforms.time.value+=0.002
    uniforms.time.value%=1
    uniforms.pos_texture.value = posBuffer.texture
    uniforms.vel_texture.value = velBuffer.texture

    renderer.setRenderTarget(posBuffer.target)
    renderer.render(scene_pos_update, camera)

    posBuffer.switch()


    uniforms.pos_texture.value = posBuffer.texture
    uniforms.vel_texture.value = velBuffer.texture

    renderer.setRenderTarget(velBuffer.target)
    renderer.render(scene_vel_update, camera)

    velBuffer.switch()


    
    uniforms.init.value *= .95;



}

update()


document.querySelector('.canvas-container').append(renderer.domElement)


let scale = 5;

function resize() {
    let width = innerWidth
    let height = innerHeight
    uniforms.size.value.set(width / scale, height / scale)
    uniforms.res.value.set(width, height)

    posBuffer.setSize(width / scale, height / scale)
    velBuffer.setSize(width / scale, height / scale)
    renderer.setSize(width, height)
}
resize()
addEventListener('resize', resize)
let mx = 0
let my = 0

addEventListener('mousemove', e => {
    uniforms.actor.value.x = e.x / innerWidth
    uniforms.actor.value.y = 1 - e.y / innerHeight

    let vx = e.x - mx;
    let vy = e.y - my;

    uniforms.mover.value.x = vx / scale
    uniforms.mover.value.y = -vy / scale
    uniforms.mover.value.z = Math.sqrt(vx * vx + vy * vy) / 2.
    mx = e.x
    my = e.y
})