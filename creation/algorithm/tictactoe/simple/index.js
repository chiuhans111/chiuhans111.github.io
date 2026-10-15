//const possible = require('./possible')

const possibles = require('./result.json')
const Map = require('./map')
const direction = require('./direction')
var table = {}


function getNode(id) {
    if (table[id] == undefined) table[id] = new Node(id)
    return table[id]
}

class Node {
    constructor(id) {
        this.id = id
        this.next = []
        this.win = -1
        this.pwin = -2
        this.possible = 1
        this.initiated = false
        this.state = null
        this.map = new Map(this.id)
    }

    initNext() {
        if (this.initiated) return
        this.initiated = true
        if (this.win == this.map.next) this.possible = 0
        possibles[this.id].map(p => {
            var node = getNode(p.r.hash)
            var win = p.w
            var d = p.d
            var r = p.r
            node.win = win
            this.next.push({
                node, d, r
            })
        })

        if (this.next.length > 0) {

            this.next.map(n => {
                n.node.initNext()
            })

            if (this.next.every(n => n.node.win == 1 || n.node.pwin == 1)) {
                this.pwin = 1
            }
            if (this.next.every(n => n.node.win == 0 || n.node.pwin == 0)) {
                this.pwin = 0
            }
            if (this.next.some(n => n.node.win == this.map.next || n.node.pwin == this.map.next)) {
                this.pwin = this.map.next
            }
        }

        if (this.pwin == this.map.next) this.possible = 0
    }

    initState() {
        if (this.state !== null) return;
        this.state = {
            total: 0,
            win: [0, 0]
        }


        if (this.next.length == 0 || this.pwin > -1) {
            this.state.total = 1
            var win = this.win
            if (this.pwin > -1) win = this.pwin
            if (win > -1)
                this.state.win[win] = 1
        }

        this.next.map(n => {
            n.node.initState()
            this.state.total += n.node.state.total
            this.state.win[0] += n.node.state.win[0]
            this.state.win[1] += n.node.state.win[1]
        })
    }

    print(expand = true) {
        var m = this.map
        console.log(this.id, this.state,
            'possible:', this.possible,
            'win:', this.map.win,
            'pwin:', this.pwin)
        console.log(m.toString())
        if (expand) {
            console.log('vvvvvvvv\n')
            var expaned = {}
            this.next.sort((a, b) => {

                return b.node.possible - a.node.possible


            }).map(x => {
                if (expaned[x.node.id]) return
                expaned[x.node.id] = true
                console.log(x.d)
                x.node.print(false)
            })
        }
    }

    bestMove() {
        return this.next
            .filter(x => x.node.possible)
            .sort((a, b) => {
                return b.node.state.win[this.map.next] -
                    a.node.state.win[this.map.next]
            })
    }
}

getNode(0).initNext()
getNode(0).initState()

var map = [-1, -1, -1, -1, -1, -1, -1, -1, -1]

function solve() {
    var m = new Map(map)
    var hash = m.toHash()

    var bestMove = getNode(hash.hash).bestMove()[0]
    if (bestMove != null) {
        var put = direction.allDirection[hash.d][bestMove.d]
        map[put] = 1 - bestMove.node.map.next
        console.log(put % 3, ~~(put / 3))
    }
}

function set(x, y, n) {
    map[x + y * 3] = n
}


// var window = {}

window.set = set
window.solve = solve


// solve()