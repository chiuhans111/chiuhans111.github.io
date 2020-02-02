
const direction = require('./direction')
const Hash = require('./hash')

var minHashTable = {}



module.exports = class Map {
    constructor(data, next) {

        this.data = [-1, -1, -1, -1, -1, -1, -1, -1, -1]
        this.next = 0
        this.win = -1
        if (data instanceof Array) {
            var n = [0, 0]
            this.data = data.map(x => {
                if (x > -1) n[x]++
                return x
            })
            
            if (n[0] > n[1]) this.next = 1
        }
        if (next !== undefined) this.next = next
        if (data instanceof Map) {
            this.data = data.data.map(x => x)
            this.next = data.next
        }
        if (data instanceof Hash) {
            var info = data.toData()
            this.next = info.next
            this.data = direction.apply(info.data, direction.allDirectionInvert[data.d])
        }
        if (typeof data == 'number') {
            data = new Hash(data, 0, 0)
            var info = data.toData()
            this.next = info.next
            this.data = direction.apply(info.data, direction.allDirectionInvert[data.d])
        }

        this.checkWinner()


    }

    toHash() {
        var defaultHash = new Hash(this.data).hash

        if (minHashTable[defaultHash] == undefined) {
            var min = null
            var minD = null

            direction.allDirection.map((x, i) => {
                var hash = new Hash(direction.apply(this.data, x), i, this.next).hash
                if (minD == null || hash < min) {
                    min = hash
                    minD = i
                }
            })

            minHashTable[defaultHash] = {
                min, minD
            }
        }
        var { min, minD } = minHashTable[defaultHash]
        return new Hash(min, minD)
    }

    checkWinner(print) {
        // find winner
        for (var i = 0; i < 3; i++) {
            if (this.data[i * 3] != -1 &&
                this.data[i * 3] == this.data[i * 3 + 1] &&
                this.data[i * 3] == this.data[i * 3 + 2]) this.win = this.data[i * 3]
            else if (this.data[i] != -1 &&
                this.data[i] == this.data[i + 3] &&
                this.data[i] == this.data[i + 6]) this.win = this.data[i]
        }
        if (this.data[4] != -1) {
            if (this.data[0] == this.data[4] && this.data[0] == this.data[8]) this.win = this.data[4]
            if (this.data[2] == this.data[4] && this.data[2] == this.data[6]) this.win = this.data[4]
        }
        return this.win
    }


    toString() {
        var str = ''
        for (var i = 0; i < 9; i++) {
            var n = this.data[i]
            switch (n) {
                case -1: str += '-'; break;
                case 0: str += 'O'; break;
                case 1: str += 'X'; break;
            }
            if (i % 3 == 2) str += '\n'
        }
        return str
    }
}
