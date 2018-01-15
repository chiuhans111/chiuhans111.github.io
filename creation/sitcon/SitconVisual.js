var theme = {
    red: 0xD92E71,
    orange: 0xEB8D3A,
    green: 0x159B93,
    blue: 0x159DE3,
    gray: 0xE5E5E5
}

/**
 * 
 * @param {HTMLCanvasElement} element 
 */
function SitconCanvas(element, width, height, gridsize) {

    // common functions
    {
        function error() {
            console.group('sitcon timer error');
            console.log('%cERROR in Sitcon Timer', 'color:red');
            console.log(...arguments);
            console.trace();
            console.groupEnd()
        }

        function ramp(a, b, f) {
            return a + f * (b - a);
        }

        function color(c, a, b) {
            var obj = { r: 0, g: 0, b: 0 };
            if (c != null && a != null && b != null) {
                obj.r = c;
                obj.g = a;
                obj.b = b;
            } else {
                if (typeof c == 'string') {
                    c = parseInt(c.match(/[a-fA-F\d]+/)[0], 16);
                }
                obj.r = Math.floor(c / 0x10000)
                obj.g = Math.floor(c / 0x100) % 0x100;
                obj.b = c % 0x100;
            }
            obj.code = `rgba(${obj.r}, ${obj.g}, ${obj.b}, 1)`;
            return obj;
        }

        function rampC(c1, c2, f) {
            c1 = color(c1);
            c2 = color(c2);
            return color(
                Math.round(ramp(c1.r, c2.r, f)),
                Math.round(ramp(c1.g, c2.g, f)),
                Math.round(ramp(c1.b, c2.b, f))
            ).code;
        }
    }
    //


    if (typeof element == 'string')
        element = document.querySelector(element);

    if (!(element instanceof HTMLCanvasElement)) {
        error('you should pass a canvas element or a selector to a canvas element for SitconTimer to work');
    }

    var canvas = element;
    var ctx = element.getContext('2d');
    console.log('Sitcon timer attached to a canvas');
    console.log(canvas);

    this.element = element;

    var me = this;

    this.width = width;
    this.height = height;
    this.gridsize = gridsize;

    canvas.width = me.width * me.gridsize;
    canvas.height = me.height * me.gridsize;

    ctx.translate(0.5, 0.5);

    this.draw = function (instructions, offset = 0) {
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        var dotSize = me.gridsize * 5 / 6 / 2;
        var cx = x => x * me.gridsize;
        for (var i = 0; i < me.width; i++) {
            for (var j = 0; j < me.height; j++) {
                var x = cx(i + 0.5);
                var y = cx(j + 0.5);
                ctx.beginPath();
                ctx.ellipse(x, y, dotSize, dotSize, 0, 0, 2 * Math.PI, false);
                ctx.fillStyle = color(theme.gray).code;
                ctx.fill();
            }
        }

        for (inst of instructions) {
            var s = 0;
            var p0 = [0, 0];
            var pathl = [];
            var pathf = [];
            var pathx = [];
            var pathy = [];
            for (p of inst.path) {
                var x = p[0] + inst.x;
                var y = p[1] + inst.y;
                pathx.push(x);
                pathy.push(y);
                var dx = x - p0[0];
                var dy = y - p0[1];
                var d = Math.sqrt(dx * dx + dy * dy);
                s += d;
                pathl.push(d);
                pathf.push(s);
                p0[0] = x;
                p0[1] = y;
            }
            pathl.splice(0, 1);
            var min = pathf[0];
            var max = pathf[pathf.length - 1] - min;
            pathf = pathf.map(x => (x - min) / max);


            for (var i = pathl.length - 1; i >= 0; i--) {
                var len = pathl[i] * me.gridsize / 4;
                for (var j = len; j >= 0; j--) {
                    var f = ramp(pathf[i], pathf[i + 1], j / len);
                    var x = (ramp(pathx[i], pathx[i + 1], j / len) + 0.5) * me.gridsize;
                    var y = (ramp(pathy[i], pathy[i + 1], j / len) + 0.5) * me.gridsize;
                    ctx.beginPath();
                    var ff = 0.5 - Math.cos((f + offset) * Math.PI) / 2;
                    ctx.fillStyle = rampC(inst.c1, inst.c2, ff);

                    ctx.ellipse(x, y, dotSize, dotSize, 0, 0, 2 * Math.PI, false);
                    ctx.fill();
                }
            }
        }
    }
}