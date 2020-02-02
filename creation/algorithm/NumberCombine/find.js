
function Value(expr, value) {
    this.expr = expr
    this.value = value
}
var OP2 = {
    add(a, b) {
        return new Value(
            `(${a.expr}+${b.expr})`,
            a.value + b.value
        )
    }, sub(a, b) {
        return new Value(
            `(${a.expr}-${b.expr})`,
            a.value - b.value
        )
    }, mul(a, b) {
        return new Value(
            `(${a.expr}*${b.expr})`,
            a.value * b.value
        )
    }, div(a, b) {
        return new Value(
            `(${a.expr}/${b.expr})`,
            a.value / b.value
        )
    },
    //  divfull(a, b) {
    //     return new Value(
    //         `(${a.expr}//${b.expr})`,
    //         Math.floor(a.value / b.value)
    //     )
    // },
    mod(a, b) {
        return new Value(
            `(${a.expr}%${b.expr})`,
            a.value % b.value
        )
    }, pow(a, b) {
        return new Value(
            `(${a.expr}^${b.expr})`,
            a.value ** b.value
        )
    },
    // AND(a, b) {
    //     return new Value(
    //         `(${a.expr}&${b.expr})`,
    //         a.value & b.value
    //     )
    // },
    // OR(a, b) {
    //     return new Value(
    //         `(${a.expr}&${b.expr})`,
    //         a.value & b.value
    //     )
    // },
    // ML(a, b) {
    //     return new Value(
    //         `(${a.expr}<<${b.expr})`,
    //         a.value << b.value
    //     )
    // },
    // MR(a, b) {
    //     return new Value(
    //         `(${a.expr}>>${b.expr})`,
    //         a.value >> b.value
    //     )
    // },
    // XOR(a, b) {
    //     return new Value(
    //         `(${a.expr}^${b.expr})`,
    //         a.value ^ b.value
    //     )
    // },
}

var OP1 = {
    fac(a) {
        if (a.value < 0) return null
        if (a.value != Math.floor(a.value)) return null
        if (a.value > 200) return null
        var result = 1;
        for (var i = 2; i <= a.value; i++) result *= i;
        return new Value(
            `(${a.expr}!)`,
            result
        )
    },

    // ln(a) {
    //     return new Value(
    //         `ln(${a.expr})`,
    //         Math.log(a.value)
    //     )
    // },
    // sin(a) {
    //     return new Value(
    //         `sin(${a.expr})`,
    //         Math.sin(a.value)
    //     )
    // },
    // cos(a) {
    //     return new Value(
    //         `cos(${a.expr})`,
    //         Math.cos(a.value)
    //     )
    // },
    neg(a) {
        return new Value(
            `(-${a.expr})`,
            -a.value
        )
    },
}



results = []

function find(values, maxstep = 15, hashset = {}) {
    //
    // 終止條件
    //
    if (maxstep <= 0) return;
    if (values.some(x => x == null || isNaN(x.value) || !isFinite(x.value))) return null
    if (values.length == 0) return null

    var hash = values.map(x => x.value).join(',')
    if (hashset[hash] === true) return
    hashset[hash] = true

    //
    // 邊界條件
    //

    if (values.length == 1) {
        // if(values[0].value==23)
        results.push(values[0])
        // console.log(values[0].expr + " = " + values[0].value)
    } else {


        // op2
        for (var i = 0; i < values.length - 1; i++) {
            var a = values[i]
            var b = values[i + 1]
            var before = values.slice(0, i)
            var after = values.slice(i + 2)
            for (var j in OP2) {
                var op = OP2[j]
                find([...before, op(a, b), ...after], maxstep - 1, hashset)
            }
        }

        // op1
        for (var i = 0; i < values.length; i++) {
            var a = values[i]
            var before = values.slice(0, i)
            var after = values.slice(i + 1)
            for (var j in OP1) {
                var op = OP1[j]
                find([...before, op(a), ...after], maxstep - 1, hashset)
            }
        }
    }
}

find([
    // new Value('4', 4),
    new Value('8', 8),
    new Value('7', 7),
    new Value('6', 6),
    new Value('3', 3)
])



console.log('done')

results.sort((a, b) => {
    return Math.abs(a.value - 23) - Math.abs(b.value - 23)
})

results.slice(0, 10).map(x => {
    console.log(x.expr + " = " + x.value)
})

// ((8+7)-(((6!)-((3!)!))!)) = 14
// ((8+7)+(((6!)-((3!)!))!)) = 16
// (8+(7*(6-3))) = 29