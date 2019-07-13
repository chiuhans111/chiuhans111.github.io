import { PlaneGeometry, ShaderMaterial, Mesh } from 'three'

export default class ShaderPlane {
    constructor(vertexShader, fragmentShader, uniforms) {
        this.uniforms = uniforms
        this.mesh = new Mesh(
            new PlaneGeometry(2, 2),
            new ShaderMaterial({
                vertexShader,
                fragmentShader,
                uniforms: this.uniforms
            })
        )
    }
}