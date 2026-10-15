var v = {
    add: (a, b) => a.map((x, i) => x + b[i]),
    sub: (a, b) => a.map((x, i) => x - b[i]),
    mul: (a, f) => a.map(x => x * f),

    lensq: (a) => a.map(x => x * x).reduce((a, b) => a + b, 0),
    len: (a) => Math.sqrt(v.lensq(a)),

    norm: (a, x) => v.mul(a, (x ? x : 1) / v.len(a))
}


function Elect_Single(x, y, e) {
    this.cord = [x, y];
    this.e = e;
    this.control = false;
    this.field = function (cord) {
        var d = v.sub(cord, this.cord);
        var rr = v.lensq(d);
        var e = this.e / rr;
        var r = Math.sqrt(rr);
        return v.mul(d, e / r);
    }
    this.draw = function () {
        ellipse(...this.cord, 10, 10);
        text(this.e, ...v.add(this.cord, [10, 10]))
    }
    this.mdown = function (x, y) {
        var d = v.sub(this.cord, [x, y]);
        if (v.lensq(d) < 100) {
            this.control = d;
            return true;
        }
        return false;
    }
    this.mup = function () {
        this.control = false;
    }
    this.mmove = function (x, y) {
        if (this.control !== false) this.cord = v.add([x, y], this.control);
    }
}

function Elect_Group() {
    this.elects = [];
    this.add = function (elect) {
        this.elects.push(elect);
    }
    this.field = function (cord) {
        var e = [0, 0];
        this.elects.map(x => {
            e = v.add(e, x.field(cord));
        })
        return e;
    }
    this.draw = function () {
        this.elects.map(x => x.draw())
    }

    this.mdown = function (x, y) {
        for (var e of this.elects) if (e.mdown(x, y)) return true;
        return false;
    }

    this.mmove = function (x, y) {
        for (var e of this.elects) e.mmove(x, y);
    }

    this.mup = function () {
        for (var e of this.elects) e.mup();
    }
}