var allDirection = []
function generateDirections() {

    function rotate90(map) {
        return [6, 3, 0, 7, 4, 1, 8, 5, 2].map(x => map[x])
    }
    function flip(map) {
        return [2, 1, 0, 5, 4, 3, 8, 7, 6].map(x => map[x])
    }

    var direction = [0, 1, 2, 3, 4, 5, 6, 7, 8]

    allDirection.push(direction) // 0
    direction = rotate90(direction)
    allDirection.push(direction) // 90
    direction = rotate90(direction)
    allDirection.push(direction) // 180
    direction = rotate90(direction)
    allDirection.push(direction) // 270
    direction = flip(direction)
    allDirection.push(direction) // 0
    direction = rotate90(direction)
    allDirection.push(direction) // 90
    direction = rotate90(direction)
    allDirection.push(direction) // 180
    direction = rotate90(direction)
    allDirection.push(direction) // 270
}
generateDirections()
function invert(map) {
    var imap = [0, 1, 2, 3, 4, 5, 6, 7, 8]
    map.map((x, i) => imap[x] = i)
    return imap
}

var allDirectionInvert = allDirection.map(invert)

// console.log(allDirection)
// console.log(allDirectionInvert)

var allDirectionInvertTable = {}
allDirection.map((x, i) => {
    allDirectionInvert.map((y, j) => {
        if (x.join() == y.join()) allDirectionInvertTable[i] = j
    })
})

// console.log(allDirectionInvertTable)

function apply(data, map) {
    return map.map(x => data[x])
}

function applyInvert(data, map) {
    var data2 = data.map(x => x)
    map.map((x, i) => data2[x] = data[i])
    return data2
}
module.exports = {
    allDirection,
    allDirectionInvert,
    allDirectionInvertTable,
    apply,
    applyInvert
}