function toHash(data) {
    var hash = 0
    data.map(x => {
        hash *= 3
        hash += x + 1
    })
    return hash
}

function fromHash(hash) {
    var data = [0, 0, 0, 0, 0, 0, 0, 0, 0]
    var i = 8
    while (hash > 0) {
        data[i--] = hash % 3
        hash = ~~(hash / 3)
    }
    return data.map(x => x - 1)
}


module.exports = class Hash {
    constructor(hash, d, next = 0) {
        this.hash = 0
        this.d = 0
        if (hash instanceof Array) {
            this.hash = toHash(hash) * 2 + next
        }
        if (typeof hash == 'number')
            this.hash = hash

        if (typeof d == 'number')
            this.d = d
    }

    toData() {
        return {
            data: fromHash(~~(this.hash / 2)),
            next: this.hash % 2
        }
    }
}