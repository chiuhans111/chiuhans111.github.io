function findId(grammer, token) {
    if (token == 'E') return 'E'
    if (grammer == null) return null
    if (grammer[0][token]) return grammer[0][token][2]
    else return findId(grammer[3], token)
}

function setId(grammer, root, idc = 0, key, parent = null) {

    grammer[2] = idc
    grammer[3] = parent

    root[idc] = [
        grammer[0].S || grammer[0],
        grammer[1],
        key
    ]

    idc++

    if (!(grammer[0] instanceof RegExp) &&
        (typeof grammer[0] == 'object')) {

        for (var i in grammer[0])
            if (i != 'S')
                idc = setId(grammer[0][i], root, idc, i, grammer)

        for (var i in grammer[0])
            if (i == 'S') {
                for (var j in grammer[0][i])
                    grammer[0][i][j] = findId(grammer, grammer[0][i][j])
            } else for (var j in grammer[0][i][1])
                grammer[0][i][1][j] = findId(grammer, grammer[0][i][1][j])
    }
    return idc
}


function match(str, grammer, state = 0) {
    if (str.length == 0) return []

    var result = []
    var g = grammer[state]
    // console.log(state)

    if (g[0] instanceof RegExp) {
        var m = str.match(g[0])
        // console.log('matched', m)
        if (m && m.index == 0) result.push([m[0], [m[0], g[2]]])
        else return []
    } else if (g[0] instanceof Array) {
        for (var s of g[0]) {
            var r = match(str, grammer, s)
            // console.log(r)
            for (var x of r) {
                result.push([
                    x[0], [x, g[2]]
                ])
            }
        }
    }

    var next = []

    // console.log(JSON.stringify(result))

    for (var r of result) {
        for (var s of g[1]) {
            // console.log(r[0])
            if (s == 'E') {
                if (r[0].length == str.length) return [r]
                next.push(r)
            } else {
                var m = match(str.substr(r[0].length), grammer, s)
                for (var x of m) {
                    next.push([
                        r[0] + x[0], ...r.slice(1), ...x.slice(1)
                    ])
                }
            }
        }
    }
    return next
}




var grammer = [{
    S: ['fomu'],
    space: [/\s+/, ['E']],
    fomu: [{
        S: ['num', 'id', 'bra'],
        num: [/\s*[+-]?\d+(\.\d+)?\s*/, ['oper1', 'oper2', 'E', 'space']],
        oper2: [/\s*[+\-*/\^]\s*/, ['num', 'bra', 'id']],
        oper1: [/\s*[\!]\s*/, ['oper1', 'E']],
        id: [/\s*\w[\w\d_]*/, ['oper1', 'oper2', 'pbra', 'E']],
        bra: [{
            S: ['open'],
            open: [/\s*\(\s*/, ['fomu2']],
            fomu2: [{
                S: ['fomu']
            }, ['close']],
            close: [/\s*\)\s*/, ['E']]
        }, ['oper1', 'oper2', 'E']],
        pbra: [{
            S: ['open'],
            open: [/\s*\(\s*/, ['param', 'close']],
            param: [{
                S: ['fomu']
            }, ['close', 'sep']],
            sep: [/\s*,\s*/, ['param']],
            close: [/\s*\)\s*/, ['E']],
        }, ['oper1', 'oper2', 'E']]
    }, ['E']]
}, ['E']]

var root = {}
setId(grammer, root)

console.log("compiled", JSON.stringify(root, (key, value) => value instanceof RegExp ? value.toString() : value))
var result = match('1 * (2 + 3) * 4 + 5', root)
result = result.sort((a, b) => b.length - a.length)[0]

console.log('\n\nresult:\n\n')
console.log(JSON.stringify(result, null))

//console.log(grammer)

var result = [["-123", [["-123", [["-123", [["-123", [["-", ["-", "sign"]], "sign"], ["1", "digit"], ["2", "digit"], ["3", "digit"]], "num"]], "fomu"]], null]],
["-12", [["-12", [["-12", [["-12", [["-", ["-", "sign"]], "sign"], ["1", "digit"], ["2", "digit"]], "num"]], "fomu"]], null]],
["-1", [["-1", [["-1", [["-1", [["-", ["-", "sign"]], "sign"], ["1", "digit"]], "num"]], "fomu"]], null]]]