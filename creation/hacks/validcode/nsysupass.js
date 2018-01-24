
/**
 * set debugmode false to disable visual outputs
 */
var debugmode = true;

/**
 * Get the URL of validcode img
 * ( using cors-anywhere to get CORS image.. )
 */
function getUrl() {
    return 'http://cors-anywhere.herokuapp.com/http://selcrs.nsysu.edu.tw/validcode.asp';
}

/**
 * Append Html element to document.body
 * @param {HTMLElement} element 
 */
function tobody(element) {
    if (debugmode)
        document.body.appendChild(element);
}

/**
 * Get image from url
 * @param {String} url 
 * @returns {Promise<HTMLImageElement>}
 */
function getImg(url) {
    var img = document.createElement('img');
    img.crossOrigin = "Anonymous"
    img.src = url;
    return new Promise(done => img.onload = (_ => {
        done(img);
    }))
}

/**
 * Data To Image, display 2D array as a Image
 * @param {Array<Number>} data the data to display
 * @param {Number} w width of the data image
 * @param {Boolean} flipxy swap X Y coordinate
 * @returns {Promise<HTMLImageElement>}
 */
function dtoi(data, w, flipxy = false) {

    var canvas = document.createElement('canvas');
    canvas.width = flipxy ? data.length / w : w;
    canvas.height = flipxy ? w : data.length / w;

    var ctx = canvas.getContext('2d');
    var imgdt = ctx.getImageData(0, 0, canvas.width, canvas.height);

    for (var x = 0; x < canvas.width; x++) {
        for (var y = 0; y < canvas.height; y++) {
            var imgIndex = (x + y * canvas.width) * 4;
            var dataIndex = flipxy ? y + x * canvas.height : x + y * canvas.width;

            var c = 0;
            var value = data[dataIndex];

            if (typeof (value) == 'boolean')
                c = [value ? 255 : 0,
                value ? 255 : 0,
                value ? 255 : 0];
            if (typeof (value) == 'number')
                c = [value * 255, value * 255, value * 255]
            if (value instanceof Array) c = value.map(x => x * 255)


            imgdt.data[imgIndex] = c[0];
            imgdt.data[imgIndex + 1] = c[1];
            imgdt.data[imgIndex + 2] = c[2];
            imgdt.data[imgIndex + 3] = 255;

        }
    }

    ctx.putImageData(imgdt, 0, 0);
    return getImg(canvas.toDataURL());
}


/**
 * Image to Canvas
 * @param {HTMLImageElement} img
 * @returns {{canvas:HTMLCanvasElement, ctx:CanvasRenderingContext2D}} {canvas, ctx}
 */
function itoc(img) {
    var canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;
    var ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0);
    return {
        canvas,
        ctx
    }
}



/**
 * Valid Code Recognition Process,
 * returns an array of possible valid code String
 * @param {HTMLImageElement} img Image of valid code
 * @returns {Array<String>} result
 */
function process(img) {
    if (debugmode) document.body.innerHTML = "";
    var { canvas, ctx } = itoc(img);

    tobody(img);


    var imgdt = ctx.getImageData(0, 0, canvas.width, canvas.height);
    var data = imgdt.data;
    var cdata = [];
    // process the data
    for (var j = 0; j < img.height; j++) {
        for (var i = 0; i < img.width; i++) {
            var index = (i + j * img.width) * 4;
            var [r, g, b, a] = [index, index + 1, index + 2, index + 3];
            var value = (data[r] < 235 || data[g] < 235 || data[b] < 235);
            cdata.push(value);
        }
    }
    // put back the data
    dtoi(cdata, img.width).then(tobody);

    // clean
    var cdata2 = cdata.map(x => false);
    for (var j = 0; j < img.height - 1; j++) {
        for (var i = 0; i < img.width - 1; i++) {
            var index = (i + j * img.width);
            if (!cdata[index]) continue;

            var sum = 0;
            for (var dir of [[1, 0], [0, 1], [1, 1]]) {
                var [u, v] = dir;
                var x = u + i;
                var y = v + j;
                var index2 = (x + y * img.width);
                if (cdata[index2]) sum++;
            }
            cdata2[index] = sum > 2;
        }
    }

    dtoi(cdata2, img.width).then(tobody);

    var buffer = [];
    var sets = [];
    var blanks = 0;
    for (var i = 0; i < img.width; i++) {
        var blankline = true;
        for (var j = 0; j < img.height; j++) {
            var index = (i + j * img.width);
            buffer.push(cdata2[index]);
            if (cdata2[index]) blankline = false;
        }
        if (blankline) blanks++;
        if (blanks > 1) {
            if (buffer.filter(x => x).length > 10)
                sets.push(
                    Array.from(Array(img.height))
                        .fill(false).concat(buffer)
                );
            buffer = [];
            blanks = 0;
        }
    }

    sets.map(set => dtoi(set, img.height, true).then(tobody));

    var resultbox = document.createElement('input');
    tobody(resultbox);


    // hashs
    var result = [];
    sets.map(set => {
        var w = img.height;
        var h = set.length / w;

        var cx = 0;
        var cy = 0;

        var sx = 0;
        var sy = 0;

        var debug = set.map(x => [0, 0, 0]);
        var filters = [
            [[0, 0], [1, 0], [-1, 0]],
            [[0, 0], [0, 1], [0, -1]],
            [[0, 0], [1, 1], [-1, -1]],
            [[0, 0], [1, -1], [-1, 1]],
            [[0, 0], [1, 0], [-1, 0], [2, 0], [-2, 0]],
            [[0, 0], [0, 1], [0, -1], [0, 2], [0, -2]],
        ]

        var hash = [0, 0, 0, 0, 0, 0];
        var mass = set.filter(x => x).length;
        for (var j = 1; j < h - 1; j++) {
            for (var i = 1; i < w - 1; i++) {
                var index = (i + j * w);

                for (var fi in filters) {
                    var filter = filters[fi];
                    var sum = 0;
                    for (var dir of filter) {
                        var [u, v] = dir;
                        var x = u + i;
                        var y = v + j;
                        var index2 = (x + y * w);
                        if (set[index2]) {
                            sum++;
                        }
                    }
                    var score = (sum * sum) / (filter.length * filter.length);
                    if (score == 0) continue;
                    hash[fi] += score;
                    debug[index][fi] = score
                    score = score * score;

                    if (fi == 0) {
                        cy += j * score;
                        sy += score;
                    }
                    if (fi == 1) {
                        cx += i * score;
                        sx += score;
                    }
                }
            }
        }

        dtoi(debug, w, true).then(tobody)

        cx /= sx * w;
        cy /= sy * h;


        hash = hash.map(x => {
            return Math.round(x / mass * 100)
        })
        hash.push(Math.round(mass / w / h * 500))


        hash.push(Math.round(cx * 100))
        hash.push(Math.round(cy * 100))

        // analyze

        var dists = [];
        var min = Number.MAX_VALUE;
        var n = 0;

        for (var i in maps) {
            var map = maps[i];
            var dist = 0;
            for (var j = 0; j < map.length; j++) {
                var d = hash[j] - map[j];
                dist += d * d;
            }
            if (dist < min) {
                min = dist;
                n = i;
            }
            dists.push({
                n: i[0],
                dist
            });
        }

        dists.sort((a, b) => a.dist - b.dist);
        dists = dists.map(x => x.n)
        var has = {};

        dists = dists.filter(x => {
            if (has[x]) return false;
            has[x] = true;
            return true;
        })

        dists.splice(2, 99);

        console.log(n, hash)
        result.push(dists);
    })

    var possibles = [];
    var i = 0, n = 1;

    possibles.push({
        value: result.map(x => x[0]),
        select: result.map(x => 0)
    });

    for (var t = 0; t < 1; t++) {
        var queue = possibles.slice(i);
        i += queue.length;
        for (var q of queue) {
            for (var d = 0; d < q.select.length; d++) {
                if (q.select[d] != 0) continue;

                for (var j = 1; j < result[d].length; j++) {

                    var select = q.select.map(x => x);
                    select[d] = j;
                    var value = result.map((x, i) => x[select[i]]);
                    possibles.push({
                        value,
                        select
                    })
                }
            }
        }
    }


    resultbox.value = possibles.map(x => x.value.join('')).join(' , ')
    return possibles.map(x => x.value.join(''));
    //
}


/**
 * Data for Recognition
 */
var maps = {
    1: [56, 58, 38, 48, 40, 44, 51, 66, 59],
    11: [65, 68, 46, 50, 50, 57, 56, 59, 50],
    12: [64, 55, 39, 44, 53, 43, 45, 70, 47],
    13: [65, 58, 39, 45, 52, 46, 51, 59, 59],
    14: [56, 59, 38, 41, 37, 46, 39, 54, 45],
    15: [70, 51, 39, 42, 61, 37, 49, 61, 49],

    2: [43, 70, 39, 52, 28, 57, 54, 54, 46],
    21: [40, 68, 38, 52, 26, 54, 54, 47, 40],
    22: [47, 61, 41, 57, 32, 44, 53, 58, 54],

    3: [49, 75, 44, 50, 33, 62, 63, 36, 66],
    31: [53, 80, 50, 55, 35, 68, 74, 25, 53],
    32: [49, 79, 44, 49, 32, 67, 66, 35, 63],
    33: [47, 65, 36, 47, 33, 52, 50, 34, 75],
    34: [50, 66, 41, 51, 34, 52, 63, 28, 57],

    4: [66, 65, 47, 50, 53, 52, 44, 54, 47],
    41: [70, 53, 39, 43, 59, 40, 48, 53, 47],
    42: [67, 59, 39, 42, 57, 48, 43, 56, 58],
    43: [69, 60, 40, 41, 59, 48, 42, 53, 44],
    44: [68, 71, 57, 57, 51, 59, 54, 47, 54],
    45: [59, 54, 38, 44, 44, 43, 43, 49, 54],
    46: [61, 58, 40, 47, 48, 47, 41, 62, 55],
    47: [54, 63, 39, 40, 38, 53, 37, 49, 41],

    5: [44, 75, 36, 42, 29, 66, 56, 46, 30],
    51: [44, 76, 35, 38, 30, 65, 52, 33, 39],
    52: [42, 72, 34, 37, 28, 59, 51, 38, 42],
    53: [42, 73, 35, 38, 29, 64, 52, 46, 26],
    54: [43, 75, 37, 39, 29, 64, 52, 44, 29],
    55: [43, 73, 35, 34, 30, 63, 58, 33, 40],
    56: [49, 74, 42, 46, 33, 63, 58, 42, 23],
    57: [48, 72, 39, 45, 32, 58, 58, 44, 42],

    6: [54, 67, 41, 42, 40, 55, 68, 56, 28],
    61: [55, 74, 46, 52, 40, 63, 67, 41, 28],
    62: [47, 72, 38, 45, 32, 58, 61, 55, 40],
    63: [45, 60, 39, 42, 31, 43, 50, 47, 39],
    64: [48, 61, 38, 44, 35, 44, 60, 37, 29],
    65: [48, 70, 41, 46, 33, 57, 62, 43, 29],
    66: [53, 64, 40, 47, 38, 48, 64, 39, 30],

    7: [42, 67, 33, 51, 28, 57, 41, 7, 45],
    71: [44, 70, 38, 53, 30, 59, 39, 16, 43],
    72: [35, 40, 32, 82, 20, 24, 19, 35, 58],

    8: [56, 63, 42, 47, 41, 49, 70, 48, 56],
    81: [56, 74, 48, 49, 41, 62, 82, 48, 40],
    82: [54, 68, 43, 50, 39, 54, 71, 37, 41],
    83: [48, 58, 41, 51, 33, 41, 65, 50, 46],
    84: [53, 65, 43, 51, 37, 50, 67, 40, 36],
    85: [50, 63, 42, 50, 34, 49, 56, 56, 40],

    9: [48, 65, 38, 41, 34, 50, 60, 38, 64],
    91: [42, 69, 35, 41, 28, 54, 50, 50, 37],
    92: [51, 60, 36, 41, 39, 45, 56, 55, 56],
    93: [50, 70, 43, 51, 33, 58, 59, 36, 54],
    94: [53, 61, 37, 43, 40, 46, 65, 44, 56]
}