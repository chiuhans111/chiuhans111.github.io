export default {
    /**
     * @param {HTMLCanvasElement} canvas
     */
    setup(canvas, application) {
        let app = new application()
        let run = true
        let ctx = canvas.getContext('2d')

        function resize() {
            canvas.width = innerWidth
            canvas.height = innerHeight
            if (app.resize)
                app.resize(innerWidth, innerHeight)
        }

        resize()

        addEventListener('resize', resize)

        function draw() {
            if (run) requestAnimationFrame(draw)
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            ctx.beginPath()
            ctx.moveTo(0, 0)
            ctx.lineTo(canvas.width, canvas.height)
            ctx.stroke()

            if (app.draw)
                app.draw(canvas, ctx)
        }

        draw()


        return {
            destroy() {
                if (app.destroy) app.destroy()

                run = false
                app = null
                removeEventListener('resize', resize)
            }
        }
    }
}