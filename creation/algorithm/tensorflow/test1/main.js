
var sequenceLength = 20



function createModel() {
    const model = tf.sequential()

    model.add(tf.layers.dense({
        inputShape: [sequenceLength, 4],
        units: 20,
        useBias: true,
        activation: 'relu'
    }))


    model.add(tf.layers.dense({
        units: 40,
        activation: 'relu',
        useBias: true
    }))
    model.add(tf.layers.flatten())

    model.add(tf.layers.dense({
        units: 20,
        activation: 'relu',
        useBias: true
    }))

    model.add(tf.layers.dense({
        units: 2,
        useBias: true
    }))


    return model
}

function trainning(model) {
    if (trainSet.length <= 0) {
        requestAnimationFrame(function () {
            trainning(model)
        })
        return;
    }

    const input = tf.tensor(trainSet.map(set => set[0]))
    const output = tf.tensor(trainSet.map(set => set[1]))
    console.log(input)
    model.fit(input, output, {
        epochs: 10,
        batchSize: 4,
        shuffle: true,

        callbacks: {
            onBatchEnd: function (batch, logs) {
                console.log(logs)
            }
        }
    }).then(function (info) {
        // console.log(info)
        input.dispose()
        output.dispose()
        requestAnimationFrame(function () {
            trainning(model)
        })
    })
}

async function predict(model, length = 1) {


    if (data.length < sequenceLength) {
        return [[0, 0]]
    }
    var source = data.slice(data.length - sequenceLength)
    var newData = source.map(x => x.slice(0, 4))

    var result = []

    for (var i = 0; i < length; i++) {

        var last = newData.slice(-1)[0]
        var input = tf.tensor([newData])

        var r = model.predict(input)
        var newPoint = await r.data()
        r.dispose()
        result.push(newPoint)

        newData.push([
            newPoint[0], newPoint[1],
            last[2] + unmapdata(newPoint[0]) / innerWidth,
            last[3] + unmapdata(newPoint[1]) / innerHeight
        ])
        newData = newData.slice(1)

        input.dispose()
    }

    return {
        result,
        source
    }


}


function run() {
    console.log('hello world')

    const model = createModel()
    window.model = model

    model.compile({
        optimizer: tf.train.adam(0.0001),
        loss: tf.losses.meanSquaredError,
    })

    /**
     * @type {HTMLCanvasElement}
     */
    const canvas = document.getElementById('canvas')
    canvas.width = innerWidth
    canvas.height = innerHeight
    const ctx = canvas.getContext('2d')
    ctx.strokeStyle = 'black'

    // tfvis.show.modelSummary({ name: 'Model Summary' }, model);
    console.log(model.outputShape)
    trainning(model)
    function update() {
        requestAnimationFrame(update)
        predict(model, 10).then(predicted => {
            const source = predicted.source
            const result = predicted.result
            ctx.fillStyle = "rgba(255,255,255,0.5)"
            ctx.fillRect(0, 0, canvas.width, canvas.height)
            ctx.beginPath()


            
            if (source.length <= 0) return;
            var x = mouseX
            var y = mouseY
            ctx.moveTo(source[0][2] * innerWidth, source[0][3] * innerHeight)
            source.map(point => {
                ctx.lineTo(x=point[2] * innerWidth, y=point[3] * innerHeight)
            })

            ctx.moveTo(x, y)

            result.map(point => {
                x += unmapdata(point[0])
                y += unmapdata(point[1])
                ctx.lineTo(x, y)
            })
            ctx.stroke()

            // console.log(result)
        })
    }
    update()

}



addEventListener('load', run)

var mouseX = 0
var mouseY = 0
var data = []
var trainSet = []

function mapdata(x) {
    return x / 10 //Math.tanh(x / 100)
}

function unmapdata(x) {
    return x * 10 //Math.atanh(x) * 100
}

addEventListener('mousemove', e => {
    const newData = [
        mapdata(e.movementX),
        mapdata(e.movementY),
        e.x / innerWidth,
        e.y / innerHeight
    ]
    mouseX = e.x
    mouseY = e.y
    if (data.length > sequenceLength) {
        trainSet.push([
            data.slice(data.length - sequenceLength).map(data => {
                return data.slice(0, 4)
            }),
            [
                mapdata(e.movementX),
                mapdata(e.movementY)
            ]
        ])
        if (trainSet.length > 300)
            trainSet = trainSet.slice(trainSet.length - 300)
    }
    data.push(newData)
    if (data.length > (sequenceLength + 5))
        data = data.slice(data.length - (sequenceLength + 5))
})

