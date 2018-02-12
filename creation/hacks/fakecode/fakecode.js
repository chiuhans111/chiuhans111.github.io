Array.prototype.random = function () {
    return this[Math.floor(Math.random() * this.length)]
}


function* FakeCode(obj = []) {

    function FakeName(obj) {
        var name = FakeLetter();
        while (Math.random() < 0.2) name += FakeLetter();
        while (obj.indexOf(name) != -1) name += FakeAll();
        return name;
    }

    function* FakeVar(obj) {
        var name = FakeName(obj);
        var isConst = false;
        if (Math.random() < 0.2) {
            yield 'const ';
            isConst = true;
        }
        yield ['int', 'float'].random() + ' ' + name;
        if (isConst || Math.random() < 0.7) {
            yield ' = ';
            yield* FakeExpression(obj);
        }
        obj.push(name);
        yield ';\n';
    }

    function* FakeAssign(obj) {
        if (obj.length > 0) {
            yield obj.random();
            yield '=';
            yield* FakeExpression(obj);
            yield ';\n';
        } else {
            yield* FakeComment(obj);
        }
    }

    function* FakeExpression(obj, p = 1) {
        if (obj.length > 0 && Math.random() < 0.6) return yield obj.random();
        if (methods.length > 0 && Math.random() < 0.1) return yield methods.random() + '()';
        if (Math.random() < 0.25 + (1 - 1 / p) * 0.75) return yield "" + Math.floor(Math.random() * 200);
        yield* FakeExpression(obj, p + 1);
        yield ' ';
        yield ['+', '-', '*', '/', '%', '>>'].random();
        yield ' ';
        yield* FakeExpression(obj, p + 1);
        return;
    }

    function* FakeLog(obj) {
        if (obj.length > 0) {
            var vari = obj.random();
            yield 'console.log("' + vari + '= ", ' + vari + ');\n';
        } else yield 'console.log("this code is useless");\n';
    }

    function* FakeComment(obj) {
        yield [
            '// variables: ' + obj.length,
            '// some code here',
            '// TODO: add a new Variable called: ' + FakeName(obj),
            '/** time stamp' + new Date().getTime() + '*/',
            '// find new variables to work with',
            '// do not try to run this code, this does not have usage'
        ].random() + '\n';
    }


    function FakeLetter() {
        return [..."abcdefghijklmnopqrstuvwxyz"].random();
    }

    function FakeAll() {
        return [..."abcdefghijklmnopqrstuvwxyz1234567890_"].random();
    }

    function* FakeLines(obj) {

        do {
            if (Math.random() < 0.25) {
                yield* FakeBlock(obj);

            }
            else {
                var r = Math.random() * 2.2;
                r *= r;
                r = Math.min(obj.length, r);
                if (r == 0) r++;
                var g = [
                    FakeVar,
                    FakeVar,
                    FakeLog,
                    FakeComment,
                    FakeAssign,
                    FakeAssign
                ].random()
                for (var i = 0; i < r; i++) {
                    yield* g(obj);
                }
            }
        } while (Math.random() < 0.6);
    }

    var methods = [];

    function* FakeBlock(obj) {



        if (obj != null) {

            yield ['if', 'while'].random() + '(';
            yield* FakeExpression(obj);
            yield ' ';
            yield ['==', '<', '>', '>=', '<='].random();
            yield ' ';
            yield* FakeExpression(obj);
            yield ')';
        } else {
            var name = FakeName(methods);
            methods.push(name);
            yield ['int', 'float'].random() + ' ' + name + '()';
        }

        if (obj == null) obj = [];
        obj = obj.map(x => x);

        yield "{\n";
        var tab = true;



        for (var data of FakeLines(obj)) {
            var output = data;
            if (tab) output = "    " + output;
            yield output;


            if (data[data.length - 1] == '\n') {
                tab = true;

            } else tab = false;
        }


        yield "}\n";
    }


    while (1) {
        yield* FakeBlock(null);
    }
}

var generator = FakeCode();

/*
var s = "";
for (var i = 0; i < 20; i++) {
    s += generator.next().value;
}
console.log(s);*/

/*
setInterval(function () {
    var r = Math.random() + 2;
    r *= r;
    for (var i = 0; i < r; i++)
        process.stdout.write(generator.next().value);
}, 1000 / 30);*/