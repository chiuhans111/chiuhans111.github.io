function v(value, dynamic = false) {
    return {
        value,
        dynamic,
        feed(g) {
            if (!this.dynamic) return;
            this.value -= g;

            if (isNaN(this.value)) {
                this.value = Math.random() - 0.5;
            }

        }
    }
}

function t() {
    return v(Math.random() - 0.5, true);
}

function add() {
    var param = Array.from(arguments)
    return {
        value: param.map(x => x.value).reduce((a, b) => a + b),
        feed(g) {
            param.map(x => x.feed(g))
        }
    }
}

function mul(a, b) {
    var param = Array.from(arguments);
    var paramr = param.map(x => x.value);
    var value = param.map(x => x.value).reduce((a, b) => a * b);
    return {
        value,
        feed(g) {
            param.map((x, i) => x.feed(
                paramr.filter((x, j) => i != j)
                    .reduce((a, b) => a * b) * g)
            )
        }
    }
}

function sin(a) {
    return {
        value: Math.sin(a.value),
        feed(g) {
            a.feed(Math.cos(a.value) * g)
        }
    }
}

function cos(a) {
    return {
        value: Math.cos(a.value),
        feed(g) {
            a.feed(-Math.sin(a.value) * g)
        }
    }
}



function pow(a, b) {
    return {
        value: Math.pow(a.value, b.value),
        feed(g) {
            var aa = a.value;
            var bb = b.value;
            a.feed(Math.pow(aa, bb - 1) * bb * g);
            b.feed(Math.log(aa) * Math.pow(aa, bb));
        }
    }
}

function actv(x) {
    var xx = x.value;
    var value = 1 / (1 + Math.exp(-xx))
    return {
        value,
        feed(g) {
            x.feed(value * (1 - value) * g)
        }
    }
}


function f(x, a, b, c) {
    return add(mul(a, pow(x, v(2))), mul(b, x), c);
}