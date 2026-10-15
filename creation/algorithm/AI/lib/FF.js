function* Counter() {
    var i = 0;
    while (1) { yield i++ }
}

function FNode() {
    /**@type {FNode} */
    var me = this;
    this.oper = function () { }

    /**@type {Array<FNode>} */
    this.para = [];
    this.stat = false;
    this.role = null; // 0: input 1:calculate 2:output

    this.refs = 0;
    this.id = 0;

    this.compiled = false;

    this.setup = function (IsChild = false) {
        me.id = null;
        me.refs = 0;
        me.compiled = false;

        me.para.map(x => x.setup(true));
        if (IsChild) return;

        me.countRef();
        var counters = [Counter(), Counter(), Counter()];
        me.setId(counters);
        var sizes = counters.map(x => x.next().value);
        var result = me.comp([
            'vari', 'temp', 'outp'
        ]);
        return [
            'var vari=new Float32Array(' + sizes[0] + ');',
            'var temp=new Float32Array(' + sizes[1] + ');',
            'var outp=new Float32Array(' + sizes[2] + ');',
            result.codes,
            'return ' + result.getter + ';'
        ].join('\n');
    }

    this.countRef = function () {
        me.refs++;
        me.para.map(x => x.countRef());
    }

    /**@param {Array<IterableIterator<number>>} counters*/
    /**@param {IterableIterator<number>} CountC*/
    /**@param {IterableIterator<number>} CountO*/
    this.setId = function (counters) {
        if (me.id != null) return;
        if (me.role == 1 && me.refs < 2 || this.stat) me.id = -1;
        else me.id = counters[me.role].next().value;
        me.para.map(x => x.setId(counters));
    }

    this.comp = function (containers) {

        var code = me.para.map(x => {
            if (!(x instanceof FNode)) return x;
            return x.comp(containers);
        });
        var codes = code.map(x => x.codes).filter(x => x.trim().length != 0).join('');
        var getter = me.oper(code.map(x => x.getter));

        if (me.id != -1) {
            if (!me.compiled) {
                codes += containers[me.role] + '[' + me.id + ']=' + getter + ';\n';
            }
            getter = containers[me.role] + '[' + me.id + ']';
        }
        me.compiled = true;
        return { codes, getter };
    }
}

function Vari(output = false) {
    var node = new FNode();
    node.role = output ? 2 : 0;
    node.oper = function () {
        return 0;
    }
    return node;
}

function Numb(num) {
    var node = new FNode();
    node.stat = true;
    node.oper = function () {
        return num;
    }
    return node;
}

function Add(a, b) {
    var node = new FNode();
    node.role = 1;
    node.para = [a, b]
    node.oper = function (para) {
        return '(' + para.join('+') + ')';
    }
    return node;
}


var x = Vari();
var y = Vari();
var z = Add(x, y);
z = Add(z, z);
z = Add(z, Numb(2));
var result = z.setup();
console.log(result);