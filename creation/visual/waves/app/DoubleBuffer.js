import { WebGLRenderTarget } from "three";

export class DoubleBuffer {
    constructor(w, h) {
        this.bufferA = new WebGLRenderTarget(w, h)
        this.bufferB = new WebGLRenderTarget(w, h)
    }

    setSize(w, h) {
        this.bufferA.setSize(w, h)
        this.bufferB.setSize(w, h)
    }

    switch() {
        let temp = this.bufferA
        this.bufferA = this.bufferB
        this.bufferB = temp
    }

    get texture() {
        return this.bufferA.texture
    }

    get target() {
        return this.bufferB
    }
}