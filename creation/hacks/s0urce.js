var map = map || { "0": "", "704289": "t", "732904": "i", "737418": "r", "747219": "r", "769552": "t", "772489": "i", "785760": "t", "789480": "r", "794486": "l", "804609": "r", "829456": "t", "841009": "r", "842128": "t", "858768": "t", "860769": "r", "863044": "t", "906185": "t", "907214": "r", "909232": "t", "912298": "r", "918857": "t", "922421": "s", "923332": "t", "955726": "t", "958071": "s", "963374": "r", "969510": "s", "978503": "r", "985961": "t", "998943": "s", "1000061": "t", "1006032": "s", "1008513": "z", "1013326": "r", "1013624": "f", "1017471": "s", "1019100": "f", "1026179": "j", "1028476": "r", "1085209": "c", "1121949": "s", "1145664": "n", "1153990": "s", "1156591": "s", "1173834": "s", "1178261": "f", "1203274": "s", "1232085": "f", "1265098": "c", "1267598": "c", "1282505": "c", "1285446": "f", "1285453": "k", "1305027": "o", "1310359": "o", "1312491": "y", "1329511": "o", "1333874": "v", "1334891": "y", "1338920": "o", "1347691": "y", "1356296": "a", "1372774": "o", "1382199": "o", "1388301": "a", "1392052": "o", "1398713": "f", "1401335": "o", "1408348": "f", "1410760": "o", "1416862": "a", "1419375": "y", "1422236": "v", "1422882": "a", "1434956": "n", "1438886": "v", "1443711": "y", "1461654": "n", "1461667": "y", "1466581": "o", "1483133": "n", "1486949": "h", "1504437": "y", "1506837": "e", "1515078": "n", "1519485": "e", "1520428": "x", "1520703": "n", "1521201": "y", "1525751": "a", "1526153": "h", "1540259": "u", "1549204": "h", "1550100": "e", "1563814": "y", "1573712": "a", "1577512": "v", "1578661": "e", "1580660": "u", "1581366": "e", "1591309": "e", "1606843": "y", "1614155": "b", "1616447": "y", "1616587": "k", "1618657": "e", "1627688": "v", "1651503": "y", "1652184": "v", "1653190": "e", "1665838": "e", "1688101": "p", "1694399": "e", "1726392": "u", "1760462": "p", "1760803": "b", "1789303": "w", "1829547": "p", "1831303": "x", "1850754": "w", "1908456": "x", "1981881": "h", "2182809": "b", "2194200": "w", "2197538": "p", "2201071": "g", "2225219": "p", "2238172": "p", "2249582": "g", "2277409": "b", "2279925": "p", "2281839": "d", "2284494": "p", "2296567": "p", "2298423": "g", "2308519": "p", "2325852": "p", "2329071": "d", "2331759": "d", "2331937": "p", "2332915": "d", "2340832": "p", "2348152": "g", "2366552": "p", "2399448": "p", "2400593": "g", "2414095": "p", "2523377": "g", "2684077": "q", "2769900": "m", "3100009": "m", "3379400": "d" }


function work() {
    var img = document.querySelector('.tool-type-img');
    getImage(img.src).then(clean).then(result => {

        result = result.map(x => x.hash).map(recognize).join('');
        console.log(result)

        document.querySelector('#tool-type-word').value = result;
        $('#tool-type-word').trigger('submit')
    })
}


function getImage(n) {
    return new Promise(done => {
        var img = document.createElement('img');
        img.src = n;
        img.onload = function () {
            done(img);
        }
    })
}
/**
 * @return {[HTMLCanvasElement,CanvasRenderingContext2D]} 
 */
function Canvas(width, height) {
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    canvas.width = width;
    canvas.height = height;
    return [canvas, ctx];
}

function Part(part) {
    var [canvas, ctx] = Canvas(part.length / 24, 24);
    var imgdata = ctx.getImageData(0, 0, canvas.width, canvas.height);

    var newPart = [];
    var min = Number.MAX_SAFE_INTEGER;
    for (var x = 0; x < canvas.width; x++) {
        var count = 0;
        for (var y = 0; y < 24; y++) {
            var i = x * 24 + y;
            if (part[i]) break;
            count++;
        }
        min = Math.min(min, count);
    }

    for (var x = 0; x < canvas.width; x++) {
        newPart.push(false)

        for (var y = 0; y < 24 - min; y++) {
            var i = x * 24 + y + min;
            newPart.push(part[i]);
        }
        for (var y = 0; y < min - 1; y++) {
            newPart.push(false)
        }
    }

    part = newPart;
    var me = this;
    var s = 0;
    part.map((x, i) => {
        if (x) s += i * i;
    })
    this.hash = s;


    var data = imgdata.data;
    for (var i in part) {
        var x = Math.floor(i / 24);
        var y = i % 24;
        var j = (x + y * canvas.width) * 4;
        data[j + 1] = part[i] ? 255 : 0;
        data[j + 3] = 255;
    }
    ctx.putImageData(imgdata, 0, 0);
    this.canvas = canvas;
}

function clean(img) {
    var [canvas, ctx] = Canvas(img.width, img.height);
    ctx.drawImage(img, 0, 0);
    var imgdata = ctx.getImageData(0, 0, img.width, img.height);
    var data = imgdata.data;

    var part = [];
    var parts = [];

    for (var x = 0; x < img.width; x++) {
        var hasvalue = false;
        for (var y = 0; y < img.height; y++) {
            var i = (x + y * img.width) * 4;
            var [r, g, b, a] = data.subarray(i, i + 4);

            var value = g < 20 || r == g;
            r = g = b = value ? 255 : 0;

            part.push(value);
            hasvalue |= value;

            data[i++] = r;
            data[i++] = g;
            data[i++] = b;
            data[i++] = a;
        }
        if (!hasvalue) {
            if (part.filter(x => x).length != 0) parts.push(part)
            part = [];
        }
    }
    return parts.map(part => new Part(part));
}

function recognize(hash) {
    var keys = [...Object.keys(map)].map(x => +x)
    var key = keys.sort((a, b) => {
        return Math.abs(a - hash) - Math.abs(b - hash)
    })[0];
    return map[key];
}


