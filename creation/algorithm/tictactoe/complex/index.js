
try {

    if (window == undefined) {
        window = {}
    }
} catch (e) { }

//
// util functions
//


function findWinner(data, offset, width) {
    let k = 0
    // find winner
    for (let i = 0; i < 3; i++) {
        k = i * width + offset

        if (data[k] > 0 && data[k] < 3 &&
            data[k] == data[k + 1] &&
            data[k] == data[k + 2])
            return data[k]

        k = offset + i
        if (data[k] > 0 && data[k] < 3 &&
            data[k] == data[k + width] &&
            data[k] == data[k + width + width])
            return data[k]
    }

    k = offset + width + 1
    if (data[k] > 0 && data[k] < 3) {
        if (data[k] == data[offset] &&
            data[k] == data[k + width + 1])
            return data[k]
        if (data[k] == data[k - width + 1] &&
            data[k] == data[k + width - 1])
            return data[k]
    }



    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (data[i + offset + j * width] == 0) return 0
        }
    }


    return 3
}

function Transformation(id, size, invert = false) {
    let flipXY = id % 2 == 1
    let flipX = Math.floor(id / 2) % 2 == 1
    let flipY = Math.floor(id / 4) % 2 == 1
    if (invert && flipXY) {
        l = flipX
        flipX = flipY
        flipY = l
    }
    return function (id) {
        if (id < 0) return id
        if (flipXY) id = (id % size) * size + Math.floor(id / size)
        if (flipY) id = (id % size) + (size - Math.floor(id / size) - 1) * size
        if (flipX) id = size - (id % size) - 1 + Math.floor(id / size) * size
        return id
    }
}




function TransformationMap(id, size, invert = false) {
    let f = Transformation(id, size, !invert)
    return function (x, i, arr) {
        return arr[f(i)]
    }
}

var TransformationMaps = []
for (let i = 0; i < 8; i++) {
    let f = Transformation(i, 9)
    let arr = new Uint8Array(81)
    for (let j = 0; j < 81; j++) arr[j] = f(j)
    TransformationMaps.push(arr)
}

var TransformationInvertMaps = []
for (let i = 0; i < 8; i++) {
    let f = Transformation(i, 9, true)
    let arr = new Uint8Array(81)
    for (j = 0; j < 81; j++) arr[j] = f(j)
    TransformationInvertMaps.push(arr)
}

var Transformation3Maps = []
for (let i = 0; i < 8; i++) {
    let f = Transformation(i, 3)
    let arr = new Uint8Array(9)
    for (j = 0; j < 9; j++) arr[j] = f(j)
    Transformation3Maps.push(arr)
}

var Transformation3InvertMaps = []
for (let i = 0; i < 8; i++) {
    let f = Transformation(i, 3, true)
    let arr = new Uint8Array(9)
    for (j = 0; j < 9; j++) arr[j] = f(j)
    Transformation3InvertMaps.push(arr)
}


//
// define state
//
var tempdata = new Uint32Array(9)
var paddings = [
    '000000',
    '00000',
    '0000',
    '000',
    '00',
    '0',
    ''
]

class State {


    constructor(a0) {
        // default properties
        this.map = new Uint8Array(81)
        this.next = 1 // (default 1-first 2-second)
        this.nextArea = 9 // 9 = all

        // calculated properties

        this.win = 0
        this.validActions = []

        // passing State

        if (a0 != undefined &&
            a0.h != undefined &&
            a0.d != undefined) {
            this.fromHash(a0)
        } else if (a0 instanceof State) {
            for (let i = 0; i < 81; i++)
                this.map[i] = a0.map[i]
            this.next = a0.next
            this.nextArea = a0.nextArea
            this.win = a0.win
            let acts = a0.validActions.length
            this.validActions = new Array(acts)
            for (let i = 0; i < acts; i++)
                this.validActions[i] = a0.validActions[i]

        } else if (arguments[0] instanceof Array) {
            for (let i = 0; i < 81; i++) this.map[i] = arguments[0][i]
        }
    }


    init() {
        // this.ended = false
        // find area
        // this.lastArea = Math.floor(this.lastMove % 9 / 3) + Math.floor(this.lastMove / 27) * 3
        // this.nextArea = this.lastMove % 3 + Math.floor(this.lastMove / 9) % 3 * 3


        // win move
        let localwin = new Uint8Array(9)
        for (let i = 0; i < 9; i++) {
            let offset = i % 3 * 3 + ~~(i / 3) * 27
            let w = findWinner(this.map, offset, 9)
            localwin[i] = w

            // simplify win area
            if (w != 0) {
                for (let j = 0; j < 3; j++) {
                    for (let k = 0; k < 3; k++) {
                        let id = j + k * 9 + offset
                        this.map[id] = w
                    }
                }
            }
        }
        this.localwin = localwin

        this.win = findWinner(localwin, 0, 3)

        // valid action
        this.validActions = [] // clear
        let acts = 0

        // rule 
        if (this.win == 3) {
            let w = 0
            for (let i = 0; i < 9; i++) {
                if (localwin[i] == 1) w++
                else if (localwin[i] == 2) w--
            }
            if (w > 0) this.win = 1
            else if (w < 0) this.win = 2
        }

        // win loose is known
        if (this.win != 0) return


        if (this.nextArea != 9 && localwin[this.nextArea] != 0) this.nextArea = 9
        if (this.nextArea == 9) { // if nextarea is not determined
            for (let k = 0; k < 9; k++) { // for every area
                if (localwin[k] == 0) { // if not determined
                    let l = k % 3 * 3 + ~~(k / 3) * 27
                    for (let i = 0; i < 3; i++) { // for every block in this area
                        for (let j = 0; j < 3; j++) {
                            let id = i * 9 + j + l
                            if (this.map[id] == 0) // if not placed yet
                                this.validActions[acts++] = id
                        }
                    }
                }
            }

        } else {
            let l = this.nextArea % 3 * 3 + ~~(this.nextArea / 3) * 27
            for (let i = 0; i < 3; i++) { // for every block in this area
                for (let j = 0; j < 3; j++) {
                    let id = i + j * 9 + l
                    if (this.map[id] == 0) // if not placed yet
                        this.validActions[acts++] = id
                }
            }
        }

    }

    place(id) {
        this.map[id] = this.next
        this.nextArea = id % 3 + ~~(id / 9) % 3 * 3
        this.next = 3 - this.next
    }


    toHash() {
        let minHash = ""
        let minI = 0

        let complexity = 0
        for (let i = 0; i < 81; i++) {
            if (this.map[i] != 0) complexity++
            if (complexity > 30) break
        }
        let rotations = complexity > 30 ? 8 : 8

        for (let i = 0; i < rotations; i++) {
            let f = TransformationMaps[i]
            let trusted = i == 0

            for (let j = 0; j < 9; j++) {


                let n = 0
                for (let k = 0; k < 9; k++) {
                    let id = f[j * 9 + k]

                    n <<= 2
                    n += this.map[id]

                }

                if (!trusted && n < tempdata[j]) {
                    trusted = true
                    minI = i
                }

                if (trusted)
                    tempdata[j] = n
                else if (n > tempdata[j]) break
                // if (isNaN(n)) console.error(this)

            }

        }

        for (let i = 0; i < 9; i++) {
            let chunk = "" + tempdata[i]
            chunk = paddings[chunk.length] + chunk
            minHash += chunk
        }


        let na = this.nextArea
        if (na < 9) na = Transformation3InvertMaps[minI][na]

        minHash = ""
            + this.win
            + this.next
            + na
            + minHash

        return {
            h: minHash,
            d: minI
        }
    }

    fromHash(hash) {
        this.win = +hash.h[0]
        this.next = +hash.h[1]
        this.nextArea = +hash.h[2]
        if (this.nextArea < 9)
            this.nextArea = Transformation3Maps[hash.d][+hash.h[2]]

        for (let i = 0; i < 9; i++) tempdata[i] = +hash.h.substr(i * 6 + 3, 6) // hash.h.length = 57

        for (let i = 0; i < 81; i++) this.map[i] = 0

        let f = TransformationMaps[hash.d]

        for (let i = 0; i < 9; i++) {
            let n = tempdata[i]
            for (let j = 8; j >= 0; j--) {
                this.map[f[j + i * 9]] = +(n & 3)
                n = n >> 2
            }
        }

        this.init()
    }

    // monte carlo
    montecarlo_expansion() {
        let acts = this.validActions.length
        let results = new Array(acts)
        for (let i = 0; i < acts; i++) {
            let x = this.validActions[i]
            let s = new State(this)
            s.place(x)
            s.init()
            let hash = s.toHash().h

            results[i] = (
                {
                    d: x,
                    hash,
                }
            )
        }
        return results
    }

}


var tree = []

function getNode(id, keep = false) {
    if (tree[id]);
    else
        if (keep)
            tree[id] = new MonteCarloNode(id)
        else return new MonteCarloNode(id)
    return tree[id]
}




class MonteCarloNode {
    constructor(id) {
        this.id = id
        this.n = 0
        this.w = 0
        this.l = 0
        this.child = null
        // this.state = null
        this.win = +id[0]
        this.player = 3 - id[1]
    }

    // getState() {
    //     if (this.state == null)
    //         this.state = new State({ h: this.id, d: 0 })
    //     return this.state
    // }
    expansion(keep = false) {
        if (this.child != null) return
        getNode(this.id, keep)
        this.child = new State({ h: this.id, d: 0 }).montecarlo_expansion()

        this.child.map(x => {
            getNode(x.hash, keep)
            // var node = 
            // node.parents.add(this.id)
            // x.node = node
        })
    }

    priority(t) {

        return ((this.n - this.l) / (this.n + 1) * .5)
            + Math.sqrt(Math.log(t + 1) / (this.n + 1)) * 1.5
            + Math.random() * .01
    }


    select() {
        let max = -1
        let selected = null
        if (this.child == null) return null
        let l = this.child.length



        let temp_win = null
        let temp_winpredict = null

        for (let i = 0; i < l; i++) {
            let x = this.child[i]
            let node = getNode(x.hash)


            if (temp_win == null || node.win == node.player) temp_win = node.win
            else if (temp_win != node.player && temp_win != node.win) temp_win = 0


            let predicted_win = 0
            if (node.winpredict != undefined) predicted_win = node.winpredict
            if (node.n > 4) {
                if (node.w > node.n * .85) predicted_win = node.player
                else if (node.l > node.n * .8) predicted_win = this.player
                else if (node.l + node.w < node.n * .2) predicted_win = 3
            }


            if (temp_winpredict == null || predicted_win == node.player) temp_winpredict = predicted_win
            else if (temp_winpredict != node.player && temp_winpredict != predicted_win) temp_winpredict = 0
            if (temp_winpredict === undefined) debugger;




            let priority = node.priority(this.n)
            if (priority > max) {
                max = priority
                selected = x
            }
        }
        // if (winpredict != 0) console.log(this)

        this.win = temp_win
        this.winpredict = temp_winpredict
        return selected
    }

    value() {
        if (this.n == 0) return 0

        return ((this.w - this.l) / this.n * .5 + .5)
        // * (1 - .5 / (this.n / (this.child == null ? 18 : this.child.length + 1)))
    }

    best() {
        if (this.child == null) return null
        let max = -3
        let selected = null
        this.expansion()
        let l = this.child.length
        for (let i = 0; i < l; i++) {
            let x = this.child[i]
            let node = getNode(x.hash)
            let priority = node.value()
                + (node.win == node.player ? 1 : 0)
                + (node.winpredict == node.player ? .5 : 0)
                + (node.win == this.player ? -1 : 0)
                + (node.winpredict == this.player ? -.5 : 0)

            if (priority > max) {
                max = priority
                selected = x
            }
        }
        console.error(max)
        return selected
    }

    allPossible() {
        if (this.child == null) return []
        return this.child.map(child => {
            return {
                d: child.d,
                value: getNode(child.hash).value(),
                child
            }
        })
    }

    simulation(depth = 19) {
        let lastNode = this
        this.expansion(true)
        let c = this.select()
        let parents = [this]
        let l = 1
        // parents.push(this.id)
        let n = depth

        while (c != null) {
            n--
            lastNode = getNode(c.hash, false)
            parents[l++] = lastNode
            if (lastNode.win != 0) break
            // if (l.walked) {
            //     console.error(l, this)
            //     throw new Error(l)
            // }
            // l.walked = true
            lastNode.expansion(n > 0)
            c = lastNode.select()
        }

        if (l > 2) {
            if (lastNode.player == lastNode.win) {
                // console.log(parents[l - 2])
                parents[l - 2].win = lastNode.win

            }
        }

        for (let i = l - 1; i >= 0; i--) {
            parents[i].backpropagation(lastNode.win)
        }

        parents = null
        return l
    }

    backpropagation(w) {
        this.n += 1

        if (w == this.player) this.w++
        else if (w == 3 - this.player) this.l++
        this.select()

    }

    startFromHere() {
        var parents = [this.id]
        for (var i in tree) {
            if (i != this.id && (this.child == null ||
                !this.child.some(x => x.hash == i)))
                delete tree[i]
        }
    }
}

var nstate = new State()

nstate.init()
var fn = getNode(nstate.toHash().h, true)
for (let i = 0; i < 200; i++) {
    fn.simulation()
}



function record(x, y) {
    nstate.place(x + y * 9)
    nstate.init()
}


function _solve(state) {
    // console.error('start solve')

    let hash = state.toHash()
    let node = getNode(hash.h, true)
    let i = 0
    while (i < 800) {
        // console.error('iter', i)
        i += node.simulation() + 1
        // console.log(i)
    }
    let best = node.best()
    if (best == null) return null
    let p = Transformation(hash.d, 9)(best.d)
    return [p % 9, Math.floor(p / 9)]
}

function peak(state) {
    let hash = state.toHash()
    let node = getNode(hash.h)
    let f = Transformation(hash.d, 9)
    let map = {}
    node.allPossible().map(x => {
        map[f(x.d)] = {
            value: x.value,
            child: x.child
        }
    })

    return map
}



try {


    window.solve = function () {
        return _solve(nstate)
    }
    window.nstate = nstate
    window.record = record
    window.peak = peak
    window.State = State
    window.getNode = getNode

}
catch (e) { }



function zip(str) {
    return str.replace(/000+/g, function (s) {
        return '(' + s.length + ')'
    }).replace(/"/g, "'")
}

function unzip(str) {
    return str.replace(/\((\d+)\)/g, function (s, n) {
        return '0'.repeat(n)
    }).replace(/'/g, '"')
}


function build() {
    for (let i = 0; i < 10000; i++) {
        fn.simulation(5)
        if (i % 100 == 0)
            console.log(i)
    }
    var deleted = 0
    var total = 0
    var tree2 = {}
    for (var i in tree) {
        delete tree[i].state
        if (tree[i].n > fn.n * 0.01) {
            total++
            tree2[i] = tree[i]
        } else deleted++
    }
    console.error('deleted', deleted)
    console.error('remain', total)
    // var fs = require('fs')
    // fs.writeFileSync(__dirname + '/result.json', JSON.stringify(zip(JSON.stringify(tree2))))
}

function load() {
    try {

        var treeData = require('./result.json')
        treeData = JSON.parse(unzip(treeData))
        for (let i in treeData) {
            tree[i] = new MonteCarloNode(i)
            tree[i].n = treeData[i].n
            tree[i].w = treeData[i].w
            tree[i].l = treeData[i].l
            tree[i].win = treeData[i].win
            tree[i].winpredict = treeData[i].winpredict
            tree[i].child = treeData[i].child
        }
    } catch (e) { }
}


load()
// build()





