const Map = require('./map')
const fs = require('fs')

function expand(map) {
    map = new Map(map)
    var possibles = []
    if (map.win == -1)
        for (var i = 0; i < 9; i++) {
            if (map.data[i] == -1) {
                var m = new Map(map)
                m.data[i] = m.next
                m.next = 1 - m.next
                m.checkWinner()



                possibles.push({
                    d: i,
                    r: m.toHash(),
                    w: m.win
                })
            }
        }
    return possibles
}

function crazy() {


    var table = {}
    var queue = [new Map().toHash().hash]


    while (queue.length > 0) {
        var len = queue.length
        for (var t = 0; t < len; t++) {
            var m = queue.shift()

            if (table[m] == undefined) {
                var possibles = expand(m)
                table[m] = possibles
                queue.push(...possibles.map(x => x.r.hash))
            }


        }

        console.log(len)
    }

    fs.writeFileSync('./result.json', JSON.stringify(table))

}

crazy()