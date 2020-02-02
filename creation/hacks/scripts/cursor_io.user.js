// ==UserScript==
// @name New Script
// @namespace Violentmonkey Scripts
// @match http://cursors.io/
// @grant none
// ==/UserScript==

var oldRequestAnimationFrame = window.requestAnimationFrame

var target = null

window.requestAnimationFrame = function () {
    if (target == null) {
        target = arguments[0]
        // console.log(...arguments)

    }

    oldRequestAnimationFrame(target)
}


var canvas = document.createElement('canvas')
var ctx = canvas.getContext('2d')
document.body.append(canvas)
canvas.width = 400
canvas.height = 300
canvas.style.border = '1px solid black'
//
//
// ORIGINAL CODE
//
//
//

var w = window
var Game_Document = document

function qa(a) {
    return a << 1
}
function ra(a) {
    return a << 1
}
function S() {
    return Game_Document.pointerLockElement === Game_Container || Game_Document.mozPointerLockElement === Game_Container || Game_Document.webkitPointerLockElement === Game_Container
}
function aa() {
    Game_CTX.fillStyle = "#000000";
    Game_CTX.font = "35px NovaSquare";
    Game_CTX.fillText("Please do not embed our website, thank you.", 400 - Game_CTX.measureText("Please do not embed our website, thank you.").width / 2, 300);
    Game_CTX.font = "16px NovaSquare";
    Game_CTX.fillText("Play the game on http://cursors.io/", 400 - Game_CTX.measureText("Play the game on http://cursors.io/").width / 2, 330);
    top.location = "http://cursors.io";
    throw "Please do not embed our website, thank you.";
}
// function game_on_mousemove(a) {
//     T(a)
// }
function U(a, b) {
    F = a;
    G = b;
    k = p = a;
    l = s = b;
    A = p << 1;
    B = s << 1
}
function game_on_mousedown(a) {
    if (y)
        return H = !1,
            game_on_mousemove(a),
            !1;
    // S() ? V || (V = !0,
    //     U(k, l)) : (V = !1,
    //         y || I.checked || x.requestPointerLock && x.requestPointerLock());
    if (H)
        H = !1,
            J();
    else if (game_on_mousemove(a),
        (a.ctrlKey || a.shiftKey) && !false)
        W = !0,
            N = k,
            O = l;
    else if (100 < t - ba && p == k && s == l) {
        ba = t;
        D.push([p << 1, s << 1, t]);
        ua(p, s);
        var b = [p, s];
        K.push(b);
        setTimeout(function () {
            K.remove(b)
        }, 1E3)
    }
    return !1
}
function game_on_mouseup(a) {
    W = !1
}
// function ca() {
//     function a(b, n) {
//         q = new WebSocket("ws://" + (b || "[" + n + "]") + ":2828");
//         q.binaryType = "arraybuffer";
//         q.onopen = wa;
//         q.onmessage = xa;
//         q.onclose = ya;
//         q.onerror = za
//     }
//     null == q && (Aa ? a("127.0.0.1", null) : m28n.findServerPreference("cursors", function (b, c) {
//         null == q && (b || 0 == c.length ? (console.error(b),
//             setTimeout(ca, 1E3)) : a(c[0].ipv4, c[0].ipv6))
//     }))
// }
function Ba() {
    // w.localStorage && I && (w.localStorage.setItem("noCursorLock", I.checked ? "1" : "0"),
    //     w.localStorage.setItem("noDrawings", false ? "1" : "0"))
}
function game_on_mousemove(a) {
    if (S()) {
        var b = a.webkitMovementX || a.mozMovementX || a.movementX || 0;
        a = a.webkitMovementY || a.mozMovementY || a.movementY || 0;
        300 > Math.abs(b) + Math.abs(a) && X(A + b, B + a)
    } else
        a.offsetX ? X(a.offsetX, a.offsetY) : a.layerX && X(a.layerX, a.layerY);
    if (y)
        k = p,
            l = s;
    else if (Y(),
        !S() || p == k && s == l || (a = b = 0,
            p > k && (b = 1),
            s > l && (a = 1),
            p = k,
            s = l,
            A = (p << 1) + b,
            B = (s << 1) + a),
        W && (N != k || O != l) && 50 < t - da) {
        b = N;
        a = O;

        var c = k
            , d = l;
        if (!y && null != q && q.readyState == WebSocket.OPEN) {
            var f = new ArrayBuffer(9)
                , e = new DataView(f);

            e.setUint8(0, 3);
            e.setUint16(1, b, !0);
            e.setUint16(3, a, !0);
            e.setUint16(5, c, !0);
            e.setUint16(7, d, !0);
            // q.send(f)
        }
        N = k;
        O = l;
        da = t
    }
}
function X(a, b) {
    A = a;
    B = b;
    p = A >> 1;
    s = B >> 1
}
function Y() {
    var a = k
        , b = l;
    if (P(k, l)) {
        var c;
        a: {
            c = k;
            var d = l
                , f = []
                , e = new Uint8Array(12E4);
            f.push([c, d]);
            e[c + 400 * d] = 1;
            do {
                var h = f.shift()
                    , g = h[0]
                    , h = h[1];
                if (!(0 > g || 0 > h || 400 <= g || 300 <= h)) {
                    if (!P(g, h)) {
                        c = {
                            x: g,
                            y: h
                        };
                        break a
                    }
                    e[g - 1 + 400 * h] || (f.push([g - 1, h]),
                        e[g - 1 + 400 * h] = 1);
                    e[g + 1 + 400 * h] || (f.push([g + 1, h]),
                        e[g + 1 + 400 * h] = 1);
                    e[g + 400 * (h - 1)] || (f.push([g, h - 1]),
                        e[g + 400 * (h - 1)] = 1);
                    e[g + 400 * (h + 1)] || (f.push([g, h + 1]),
                        e[g + 400 * (h + 1)] = 1)
                }
            } while (0 < f.length); c = {
                x: c,
                y: d
            }
        }
        k = c.x;
        l = c.y
    }
    if (k != p || l != s)
        c = ea(k, l, p, s),
            k = c.x,
            l = c.y;
    fa(F, G, a, b) && !fa(F, G, k, l) && (J(a, b),
        J(k, l));
    a: {
        for (a = 0; a < m.length; a++)
            if (b = m[a],
                2 == b.type && !(k < b.x || l < b.y || k >= b.x + b.width || l >= b.y + b.height)) {
                a = !0;
                break a
            }
        a = !1
    }
    a && J()
}
function Z() {
    Q.set(Ca);
    m = [];
    D = [];
    L = []
}
function wa() {
    Z();
    console.log("Connected!")
}
function ya(a) {
    Z();
    console.log("Socket closed: " + a.reason)
}
function za(a) {
    console.log("Socket error")
}
function Da(a, b) {
    for (var c = "", d = 0, f = 0; 0 != (f = a.getUint8(b)); ++b)
        d <<= 8,
            d |= f,
            f & 128 || (c += String.fromCharCode(d),
                d = 0);
    0 != d && (c += String.fromCharCode(d));
    return [c, b + 1]
}
function Ea(a, b) {
    setTimeout(function () {
        var c = a.getUint16(b, !0)
            , d = 0;
        a: for (; d < c; d++) {
            for (var f = a.getUint16(b + 2 + 4 * d, !0), e = a.getUint16(b + 4 + 4 * d, !0), h = 0; h < K.length; h++) {
                var g = K[h];
                if (g[0] == f && g[1] == e) {
                    K.splice(h, 1);
                    continue a
                }
            }
            D.push([f << 1, e << 1, t])
        }
    }, 100);
    return b + 2 + 4 * a.getUint16(b, !0)
}
function Fa(a, b) {
    !false && setTimeout(function () {
        for (var c = a.getUint16(b, !0), d = 0; d < c; d++) {
            var f = a.getUint16(b + 2 + 8 * d, !0)
                , e = a.getUint16(b + 4 + 8 * d, !0)
                , h = a.getUint16(b + 6 + 8 * d, !0)
                , g = a.getUint16(b + 8 + 8 * d, !0);
            L.push([f << 1, e << 1, h << 1, g << 1, t])
        }
    }, 50);
    return b + 2 + 8 * a.getUint16(b, !0)
}

function xa(b) {
    // a = a.data;
    // var b = new DataView(a);
    // console.log(b)
    switch (b.getUint8(0)) {
        case 0:
            break;
            ga = b.getUint32(1, !0);
            // console.log(ga)
            break;
        case 1:
            break;
            var c;
            ha = c = b.getUint16(1, !0);
            ia = 100 <= c;
            var d = [], f;
            for (f in v)
                v.hasOwnProperty(f) && d.push(f);
            for (var e = 0; e < c; e++) {
                f = b.getUint32(3 + 8 * e, !0);
                var h = b.getUint16(7 + 8 * e, !0)
                    , g = b.getUint16(9 + 8 * e, !0);
                if (f != ga)
                    if (null != v[f]) {
                        for (var r = 0; r < d.length; r++)
                            if (d[r] == f) {
                                d.splice(r, 1);
                                break
                            }
                        f = v[f];
                        f.oldX = f.getX();
                        f.oldY = f.getY();
                        f.newX = h;
                        f.newY = g;
                        f.time = t
                    } else
                        v[f] = new ja(h, g)
            }
            for (e = 0; e < d.length; e++)
                delete v[d[e]];
            c = Ea(b, 3 + 8 * c);
            f = b.getUint16(c, !0);
            c += 2;
            for (d = 0; d < f; d++) {
                a: for (h = b.getUint32(c, !0),
                    e = 0; e < m.length; e++)
                    if (m[e].id == h) {
                        var k = m[e];
                        if (1 == k.type)
                            for (var h = k.x | 0, g = k.y | 0, r = k.width | 0, k = k.height | 0, l = g; l < g + k; ++l)
                                for (var p = h; p < h + r; ++p)
                                    --Q[p + 400 * l];
                        m.splice(e, 1);
                        break a
                    }
                c += 4
            }
            f = b.getUint16(c, !0);
            c += 2;
            for (d = 0; d < f; d++) {
                a: {
                    e = b.getUint32(c, !0);
                    for (h = 0; h < m.length; h++)
                        if (m[h].id == e) {
                            e = m[h];
                            break a
                        }
                    e = {
                        id: e
                    };
                    m.push(e)
                }
                c += 4;
                c = ka(b, c, e)
            }
            c = Fa(b, c);
            if (b.byteLength < c + 4)
                break;
            $ = b.getUint32(c, !0);
            break;
        case 4:
            console.log(b)
            Z();
            U(b.getUint16(1, !0), b.getUint16(3, !0));
            f = b.getUint16(5, !0);
            c = 7;
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            for (d = 0; d < f; d++) {

                e = {},
                    e.id = b.getUint32(c, !0),
                    c += 4,
                    c = ka(b, c, e);
                if (e.color)
                    ctx.fillStyle = e.color
                else ctx.fillStyle = 'black'
                if (e.type == 2 && !e.isBad) ctx.fillStyle = 'green'
                if (e.type == 2 && e.isBad) ctx.fillStyle = 'red'

                ctx.beginPath()
                ctx.rect(e.x, e.y, e.width, e.height)
                ctx.fill()
                m.push(e);
            }

            // MAP DATA


            console.log(m)
            b.byteLength >= c + 4 ? u = Math.max(u, b.getUint32(c, !0)) : Game_CTX.byteLength >= c + 2 && (u = Math.max(u, b.getUint16(c, !0)));
            // Y();



            break;

        case 5:
            break;
            U(b.getUint16(1, !0), b.getUint16(3, !0)),
                9 <= b.byteLength ? u = Math.max(u, b.getUint32(5, !0)) : 7 <= b.byteLength && (u = Math.max(u, b.getUint16(5, !0))),
                Y()
    }
}
function J(a, b) {
    if (!y && !H && null != q && q.readyState == WebSocket.OPEN && ("undefined" == typeof a && (a = k),
        "undefined" == typeof b && (b = l),
        a != F || b != G)) {
        var c = new ArrayBuffer(9)
            , d = new DataView(c);
        d.setUint8(0, 1);
        d.setUint16(1, a, !0);
        d.setUint16(3, b, !0);
        d.setUint32(5, u, !0);
        q.send(c);
        F = a;
        G = b
    }
}
function ua(a, b) {
    if (!y && null != q && q.readyState == WebSocket.OPEN) {
        var c = new ArrayBuffer(9)
            , d = new DataView(c);
        d.setUint8(0, 2);
        d.setUint16(1, a, !0);
        d.setUint16(3, b, !0);
        d.setUint32(5, u, !0);
        q.send(c)
    }
}
function ka(a, b, c) {
    function d() {
        c.x = a.getUint16(b, !0);
        b += 2;
        c.y = a.getUint16(b, !0);
        b += 2;
        c.width = a.getUint16(b, !0);
        b += 2;
        c.height = a.getUint16(b, !0);
        b += 2
    }
    function f() {
        for (var d = a.getUint32(b, !0).toString(16); 6 > d.length;)
            d = "0" + d;
        b += 4;
        c.color = "#" + d
    }
    var ID_type = b
    // a.setUint8(b, 0)
    var e = a.getUint8(b);
    b += 1;
    c.type = e;
    switch (e) {
        case 255:
            break;
        case 0:
            c.x = a.getUint16(b, !0);
            b += 2;
            c.y = a.getUint16(b, !0);
            b += 2;
            c.size = a.getUint8(b);
            b += 1;
            c.isCentered = !!a.getUint8(b);
            b += 1;
            e = Da(a, b);
            c.text = e[0];
            b = e[1];
            break;
        case 1:
            d();
            var h = !c.color;
            f();
            var e = c.x | 0
                , g = c.y | 0
                , k = c.width | 0
                , l = c.height | 0;
            if (h)
                for (h = g; h < g + l; ++h)
                    for (var m = e; m < e + k; ++m)
                        ++Q[m + 400 * h];
            break;
        case 2:
            d();
            c.isBad = !!a.getUint8(b);
            // if(c.isBad){
            //     a.setUint8(ID_type, 1)
            //     a.setUint8(b, 0)
            // }
            b += 1;
            break;
        case 3:
            d();
            c.count = a.getUint16(b, !0);
            b += 2;
            f();
            break;
        case 4:
            d();
            c.count ? c.count > a.getUint16(b, !0) && (c.lastClickAt = t) : c.lastClickAt = 0;
            c.count = a.getUint16(b, !0);
            b += 2;
            f();
            break;
        default:
            throw Error("Unknown object type " + e);
    }
    return b
}
function la() {
    Game_CTX.clearRect(0, 0, 800, 600);
    Game_CTX.save();
    if (null != q && q.readyState != WebSocket.OPEN || H) {
        var n;
        if (null == q)
            n = "Click to begin";
        else
            switch (q.readyState) {
                case WebSocket.CONNECTING:
                    n = "Connecting";
                    break;
                case WebSocket.CLOSING:
                case WebSocket.CLOSED:
                    n = "Lost connection to server";
                    break;
                default:
                    n = "Click to begin"
            }
        Game_CTX.font = "60px NovaSquare";
        Game_CTX.fillText(n, 400 - Game_CTX.measureText(n).width / 2, 315);
        ma();
        na(!1)
    } else {
        Game_CTX.fillStyle = "#000000";
        Game_CTX.save();
        Game_CTX.globalAlpha = 1;
        Ga();
        for (n = 0; n < m.length; n++) {
            var b = m[n];
            if (0 == b.type) {
                Game_CTX.font = b.size + "px NovaSquare";
                var c = b.x << 1
                    , d = b.y << 1;
                b.isCentered && (c -= Game_CTX.measureText(b.text).width / 2);
                Game_CTX.fillStyle = "#000000";
                Game_CTX.fillText(b.text, c, d)
            } else if (1 == b.type)
                Game_CTX.fillStyle = b.color,
                    Game_CTX.fillRect(b.x << 1, b.y << 1, b.width << 1, b.height << 1),
                    Game_CTX.strokeStyle = "#000000",
                    Game_CTX.globalAlpha = .2,
                    Game_CTX.lineWidth = 2,
                    Game_CTX.strokeRect((b.x << 1) + 1, (b.y << 1) + 1, (b.width << 1) - 2, (b.height << 1) - 2),
                    Game_CTX.globalAlpha = 1;
            else if (2 == b.type)
                Game_CTX.fillStyle = b.isBad ? "#FF0000" : "#00FF00",
                    Game_CTX.globalAlpha = .2,
                    Game_CTX.fillRect(b.x << 1, b.y << 1, b.width << 1, b.height << 1),
                    Game_CTX.globalAlpha = 1;
            else if (3 == b.type) {
                var c = b.x << 1
                    , d = b.y << 1
                    , f = b.width << 1
                    , e = b.height << 1;
                Game_CTX.fillStyle = b.color;
                Game_CTX.globalAlpha = .2;
                Game_CTX.fillRect(c, d, f, e);
                Game_CTX.globalAlpha = .5;
                Game_CTX.fillStyle = "#000000";
                40 > b.width || 40 > b.height ? (Game_CTX.font = "30px NovaSquare",
                    Game_CTX.fillText(b.count, c + f / 2 - Game_CTX.measureText(b.count).width / 2, d + e / 2 + 10)) : (Game_CTX.font = "60px NovaSquare",
                        Game_CTX.fillText(b.count, c + f / 2 - Game_CTX.measureText(b.count).width / 2, d + e / 2 + 20));
                Game_CTX.globalAlpha = 1
            } else if (4 == b.type) {
                c = b.x << 1;
                d = b.y << 1;
                f = b.width << 1;
                e = b.height << 1;
                Game_CTX.fillStyle = b.color;
                Game_CTX.strokeStyle = b.color;
                Game_CTX.globalAlpha = 1;
                Game_CTX.fillRect(c, d, f, e);
                Game_CTX.globalAlpha = .2;
                Game_CTX.fillStyle = "#000000";
                Game_CTX.fillRect(c, d, f, e);
                Game_CTX.globalAlpha = 1;
                Game_CTX.fillStyle = b.color;
                var h = 150 > t - b.lastClickAt
                    , g = h ? 8 : 12;
                Game_CTX.fillRect(c + g, d + g, f - 2 * g, e - 2 * g);
                Game_CTX.strokeStyle = "#000000";
                Game_CTX.globalAlpha = .1;
                Game_CTX.beginPath();
                Game_CTX.moveTo(c, d);
                Game_CTX.lineTo(c + g, d + g);
                Game_CTX.moveTo(c + f, d);
                Game_CTX.lineTo(c + f - g, d + g);
                Game_CTX.moveTo(c, d + e);
                Game_CTX.lineTo(c + g, d + e - g);
                Game_CTX.moveTo(c + f, d + e);
                Game_CTX.lineTo(c + f - g, d + e - g);
                Game_CTX.moveTo(c, d);
                Game_CTX.rect(c, d, f, e);
                Game_CTX.rect(c + g, d + g, f - 2 * g, e - 2 * g);
                Game_CTX.stroke();
                Game_CTX.fillStyle = "#000000";
                Game_CTX.globalAlpha = .5;
                50 > b.width || 50 > b.height ? (Game_CTX.font = "35px NovaSquare",
                    Game_CTX.fillText(b.count, c + f / 2 - Game_CTX.measureText(b.count).width / 2, d + e / 2 + 13)) : (Game_CTX.font = "45px NovaSquare",
                        Game_CTX.fillText(b.count, c + f / 2 - Game_CTX.measureText(b.count).width / 2, d + e / 2 + 16));
                h && (Game_CTX.fillStyle = "#000000",
                    Game_CTX.globalAlpha = .15,
                    Game_CTX.fillRect(c + g, d + g, f - 2 * g, e - 2 * g));
                Game_CTX.globalAlpha = 1
            }
        }
        Game_CTX.restore();
        y || (Game_CTX.font = "12px NovaSquare",
            Game_CTX.strokeStyle = "#000000",
            Game_CTX.fillStyle = "#FFFFFF",
            Game_CTX.lineWidth = 2.5,
            n = ia ? "Area too full, not all cursors are shown" : 30 < ha ? "Area too full, drawing is disabled" : "Use shift+click to draw",
            Game_CTX.globalAlpha = .5,
            Game_CTX.strokeText(n, 10, 590),
            Game_CTX.globalAlpha = 1,
            Game_CTX.fillText(n, 10, 590),
            0 != $ && (n = $ + " players online",
                b = Game_CTX.measureText(n).width,
                Game_CTX.globalAlpha = .5,
                Game_CTX.strokeText(n, 790 - b, 590),
                Game_CTX.globalAlpha = 1,
                Game_CTX.fillText(n, 790 - b, 590)));
        ma();
        if (!false) {
            Game_CTX.save();
            Game_CTX.strokeStyle = "#000000";
            Game_CTX.lineWidth = 1;
            t = +new Date;
            for (n = 0; n < L.length; n++)
                b = L[n],
                    c = 10 - (t - b[4]) / 1E3,
                    0 >= c ? (L.splice(n, 1),
                        --n) : (1 < c && (c = 1),
                            Game_CTX.globalAlpha = .3 * c,
                            Game_CTX.beginPath(),
                            Game_CTX.moveTo(b[0] - .5, b[1] - .5),
                            Game_CTX.lineTo(b[2] - .5, b[3] - .5),
                            Game_CTX.stroke());
            Game_CTX.restore()
        }
        Game_CTX.save();
        for (var k in v)
            v.hasOwnProperty(k) && Game_CTX.drawImage(M, qa(v[k].getX()) - 6, ra(v[k].getY()) - 6, 23, 30);
        Game_CTX.restore();
        na(!0)
    }
    Game_CTX.restore();
    w.requestAnimationFrame(la)
}
function ma() {
    Game_CTX.save();
    Game_CTX.strokeStyle = "#000000";
    t = +new Date;
    for (var n = 0; n < D.length; n++) {
        var b = D[n]
            , c = (t - b[2]) / 1E3
            , d = 1 - 2 * c;
        0 >= d ? (D.splice(n, 1),
            --n) : (c *= 50,
                Game_CTX.beginPath(),
                Game_CTX.globalAlpha = .3 * d,
                Game_CTX.arc(b[0], b[1], c, 0, 2 * Math.PI, !1),
                Game_CTX.stroke())
    }
    Game_CTX.restore()
}
function na(n) {
    if (y)
        Game_CTX.save(),
            Game_CTX.globalAlpha = 1,
            Game_CTX.drawImage(M, A - 5, B - 5);
    else {
        var b = 0
            , c = 0;
        p != k || s != l ? (Game_CTX.save(),
            n && (Game_CTX.globalAlpha = .2,
                Game_CTX.fillStyle = "#FF0000",
                Game_CTX.beginPath(),
                Game_CTX.arc(A + 2, B + 8, 20, 0, 2 * Math.PI, !1),
                Game_CTX.fill()),
            Game_CTX.globalAlpha = .5,
            Game_CTX.drawImage(M, A - 5, B - 5, 23, 30),
            Game_CTX.restore()) : (b = A & 1,
                c = B & 1);
        Game_CTX.save();
        n && (Game_CTX.globalAlpha = .2,
            Game_CTX.fillStyle = "#FFFF00",
            Game_CTX.beginPath(),
            Game_CTX.arc((k << 1) + b + 2, (l << 1) + c + 8, 20, 0, 2 * Math.PI, !1),
            Game_CTX.fill());
        Game_CTX.globalAlpha = 1;
        Game_CTX.drawImage(Ha, (k << 1) + b - 5, (l << 1) + c - 5, 23, 30)
    }
    Game_CTX.restore()
}
function ja(a, b) {
    this.oldX = this.newX = a;
    this.oldY = this.newY = b;
    this.time = t
}
function oa(a) {
    return a * a * (3 - 2 * a)
}
function ea(a, b, c, d) {
    a |= 0;
    b |= 0;
    c |= 0;
    d |= 0;
    if (P(a, b))
        return {
            x: a,
            y: b
        };
    if (a == c && b == d)
        return {
            x: c,
            y: d
        };
    var f = a
        , e = b;
    c = c - a | 0;
    d = d - b | 0;
    var h = 0
        , g = 0
        , k = 0
        , l = 0;
    0 > c ? h = -1 : 0 < c && (h = 1);
    0 > d ? g = -1 : 0 < d && (g = 1);
    0 > c ? k = -1 : 0 < c && (k = 1);
    var m = Math.abs(c) | 0
        , p = Math.abs(d) | 0;
    m <= p && (m = Math.abs(d) | 0,
        p = Math.abs(c) | 0,
        0 > d ? l = -1 : 0 < d && (l = 1),
        k = 0);
    c = m >> 1;
    for (d = 0; d <= m && !P(a, b); d++)
        f = a,
            e = b,
            c += p,
            c >= m ? (c -= m,
                a += h,
                b += g) : (a += k,
                    b += l);
    return {
        x: f,
        y: e
    }
}
function fa(a, b, c, d) {
    a = ea(a, b, c, d);
    return a.x == c && a.y == d
}
function P(a, b) {
    return 0 > a || 400 <= a || 0 > b || 300 <= b ? !0 : Q[a + 400 * b]
}
var Aa = "file:" == w.location.protocol, Game_Canvas, Game_CTX, Game_Container, ha = 0, p = 0, s = 0, A = 0, B = 0, k = 0, l = 0, F = -1, G = -1, I = null, C = null, M = new Image;
M.src = "img/cursor.png";
var Ha = M
    , y = -1 != w.location.search.indexOf("editor")
    , D = []
    , L = []
    , t = 0
    , ba = 0
    , q = null
    , ga = -1
    , v = {}
    , $ = 0
    , ia = !1
    , W = !1
    , N = 0
    , O = 0
    , da = 0
    , V = !1
    , H = !y && !0
    , Q = new Uint8Array(12E4)
    , m = []
    , K = []
    , R = w.devicePixelRatio;
Array.prototype.remove = function (a) {
    a = this.indexOf(a);
    return -1 != a ? (this.splice(a, 1),
        !0) : !1
}
    ;
var u = 0;
ja.prototype = {
    oldX: 0,
    oldY: 0,
    newX: 0,
    newY: 0,
    time: 0,
    getX: function () {
        var a = this.newX - this.oldX
            , b = (t - this.time) / 100
            , b = oa(0 >= b ? 0 : 1 <= b ? 1 : b);
        return this.oldX + b * a
    },
    getY: function () {
        var a = this.newY - this.oldY
            , b = (t - this.time) / 100
            , b = oa(0 >= b ? 0 : 1 <= b ? 1 : b);
        return this.oldY + b * a
    }
};
var pa = function () {
    function n() {
        var a = 0
            , b = 0
            , c = p / 10
            , d = s / 10;
        h < c ? (c = Math.ceil(c),
            a = Math.floor(h)) : (c = Math.floor(c),
                a = Math.ceil(h));
        g < d ? (d = Math.ceil(d),
            b = Math.floor(g)) : (d = Math.floor(d),
                b = Math.ceil(g));
        if (a > c)
            var e = c
                , c = a
                , a = e;
        b > d && (e = d,
            d = b,
            b = e);
        return {
            sx: a,
            sy: b,
            fx: c,
            fy: d
        }
    }
    function b() {
        e = !0;
        h = p / 10;
        g = s / 10
    }
    function c(a) {
        return "0x" + parseInt(a.slice(1), 16).toString(16).toUpperCase()
    }
    function d(a, b, c, d, e) {
        a = {
            x: 10 * ~~(k / 10) - ~~(a / 2) + c,
            y: 10 * ~~(l / 10) - ~~(b / 2) + d,
            width: a,
            height: b
        };
        for (var f in e)
            e.hasOwnProperty(f) && (a[f] = e[f]);
        return a
    }
    function f(a, b) {
        for (var c = null, d = Number.POSITIVE_INFINITY, e = 0; e < m.length; e++) {
            var f = m[e];
            if (f.hasOwnProperty("x") && f.hasOwnProperty("y") && f.hasOwnProperty("width") && f.hasOwnProperty("height")) {
                var g = f.x + f.width / 2
                    , h = f.y + f.height / 2
                    , g = (a - g) * (a - g) + (b - h) * (b - h);
                g < d && (d = g,
                    c = f)
            }
        }
        return c
    }
    var e = !1
        , h = 0
        , g = 0
        , r = 1
        , q = 200
        , t = 150
        , v = new Uint8Array(1200)
        , u = "#000000 #FF9999 #9999FF #FFFF99 #99FFFF #FF99FF #3333FF".split(" ");
    window.mouseUp = function () {
        if (e) {
            for (var a = n(), b = r, c = a.sy; c < a.fy; ++c)
                for (var d = a.sx; d < a.fx; ++d)
                    v[d + 40 * c] = b;
            e = !1
        }
    }
    // z.addEventListener("mousemove", function () { });
    w.generateCode = function () {
        for (var a = "class Level? : public Level {\npublic:\n\tLevel?() : Level(" + q + ", " + t + "){}\n\n\tvoid OnInit(){\n", a = a + ("\t\tstd::vector<LevelObject*> wallByColor[" + u.length + "];\n"), b = new Uint8Array(1200), d = [], e = 0; 30 > e; ++e)
            for (var f = 0; 40 > f; ++f)
                if (!b[f + 40 * e]) {
                    var g = v[f + 40 * e];
                    if (0 != g) {
                        for (var h = f; 40 > f && v[f + 40 * e] == g && !b[f + 40 * e];)
                            b[f + 40 * e] = !0,
                                ++f;
                        var k = f--
                            , n = k - h
                            , l = e++;
                        a: for (; 30 > e;) {
                            for (var p = h; p < k; ++p) {
                                if (v[p + 40 * e] != g)
                                    break a;
                                if (b[p + 40 * e])
                                    break a
                            }
                            for (p = h; p < k; ++p)
                                b[p + 40 * e] = !0;
                            ++e
                        }
                        k = e - l;
                        e = l;
                        d.push({
                            x: 10 * h,
                            y: 10 * l,
                            width: 10 * n,
                            height: 10 * k,
                            color: g - 1
                        })
                    }
                }
        for (b = 0; b < d.length; b++)
            e = d[b],
                0 == e.color ? a += "\t\tAddObject(new ObjWall(" + e.x + ", " + e.y + ", " + e.width + ", " + e.height + ", 0x000000));\n" : (f = c(u[e.color]),
                    a += "\t\twallByColor[" + e.color + "].push_back(AddObject(new ObjWall(" + e.x + ", " + e.y + ", " + e.width + ", " + e.height + ", " + f + ")));\n");
        for (b = 0; b < m.length; b++)
            d = m[b],
                0 != d.type && (2 == d.type ? a += "\t\tAddObject(new ObjTeleport(LevelManager::GetNextLevel(this), " + d.x + ", " + d.y + ", " + d.width + ", " + d.height + "));\n" : 3 == d.type ? (a += "\t\tAddObject(new ObjAreaCounter(wallByColor[" + d.colorCode + "], " + d.x + ", " + d.y + ", " + d.width + ", " + d.height + ", ",
                    a += d.count + ", " + c(d.color) + "));\n") : 4 == d.type && (a += "\t\tAddObject(new ObjClickBox(wallByColor[" + d.colorCode + "], " + d.x + ", " + d.y + ", " + d.width + ", " + d.height + ", ",
                        a += d.count + ", 1000, " + c(d.color) + "));\n"));
        return a += "\t}\n};\n"
    }
        ;
    // z.addEventListener("keydown", function (a) {
    //     if (y) {
    //         var b = a.keyCode;
    //         65 == b ? (--r,
    //             0 > r && (r = u.length)) : 83 == b ? (++r,
    //                 r > u.length && (r = 0)) : 66 == b ? 1 >= r || m.push(d(40, 40, 5, 5, {
    //                     type: 4,
    //                     color: u[r - 1],
    //                     colorCode: r - 1,
    //                     count: 5
    //                 })) : 90 == b ? m.pop() : 87 == b ? m.push(d(50, 50, -5, -5, {
    //                     type: 2,
    //                     isBad: !1
    //                 })) : 79 == b ? (q = k,
    //                     t = l) : 78 == b ? 1 >= r || m.push(d(40, 40, 0, 0, {
    //                         type: 3,
    //                         color: u[r - 1],
    //                         colorCode: r - 1,
    //                         count: 1
    //                     })) : 37 == b ? (b = f(p, s),
    //                         null != b && (a.shiftKey ? b.width -= 10 : (b.x -= 10,
    //                             b.width += 10),
    //                             0 == b.width && m.splice(m.indexOf(b), 1))) : 39 == b ? (b = f(p, s),
    //                                 null != b && (a.shiftKey ? (b.x += 10,
    //                                     b.width -= 10) : b.width += 10,
    //                                     0 == b.width && m.splice(m.indexOf(b), 1))) : 38 == b ? (b = f(p, s),
    //                                         null != b && (a.shiftKey ? b.height -= 10 : (b.y -= 10,
    //                                             b.height += 10),
    //                                             0 == b.height && m.splice(m.indexOf(b), 1))) : 40 == b && (b = f(p, s),
    //                                                 null != b && (a.shiftKey ? (b.y += 10,
    //                                                     b.height -= 10) : b.height += 10,
    //                                                     0 == b.height && m.splice(m.indexOf(b), 1)))
    //     }
    // });
    return {
        renderEditor: function () {
            if (y) {
                Game_CTX.save();
                Game_CTX.fillStyle = "#FF0000";
                Game_CTX.strokeStyle = "#FF0000";
                Game_CTX.lineWidth = 1;
                Game_CTX.globalAlpha = .09;
                Game_CTX.beginPath();
                for (var b = 0; 400 > b; b += 10)
                    Game_CTX.moveTo((b << 1) + .5, 0),
                        Game_CTX.lineTo((b << 1) + .5, 600);
                for (var c = 0; 300 > c; c += 10)
                    Game_CTX.moveTo(0, (c << 1) + .5),
                        Game_CTX.lineTo(800, (c << 1) + .5);
                Game_CTX.stroke();
                Game_CTX.lineWidth = 2;
                Game_CTX.beginPath();
                Game_CTX.moveTo(400.5, 0);
                Game_CTX.lineTo(400.5, 600);
                Game_CTX.moveTo(0, 300.5, 0);
                Game_CTX.lineTo(800, 300.5);
                Game_CTX.stroke();
                Game_CTX.lineWidth = 1;
                Game_CTX.globalAlpha = 1;
                Game_CTX.fillStyle = "#000000";
                for (var d = n(), c = 0; 300 > c; c += 10)
                    for (b = 0; 400 > b; b += 10) {
                        var f = b / 10 | 0
                            , g = c / 10 | 0
                            , h = v[f + 40 * g];
                        e && f >= d.sx && f < d.fx && g >= d.sy && g < d.fy && (h = r);
                        0 != h && (Game_CTX.fillStyle = u[h - 1],
                            Game_CTX.fillRect(b << 1, c << 1, 20, 20))
                    }
                Game_CTX.save();
                Game_CTX.globalAlpha = .09;
                Game_CTX.fillStyle = "#0000FF";
                Game_CTX.beginPath();
                Game_CTX.arc(q << 1, t << 1, 20, 0, 2 * Math.PI, !1);
                Game_CTX.fill();
                Game_CTX.restore();
                Game_CTX.save();
                Game_CTX.fillStyle = "#FFFFFF";
                Game_CTX.strokeStyle = "#000000";
                Game_CTX.lineWidth = 2.5;
                Game_CTX.font = "14px NovaSquare";
                Game_CTX.globalAlpha = .5;
                Game_CTX.strokeText("Current color: ", 10, 590);
                Game_CTX.globalAlpha = 1;
                Game_CTX.fillText("Current color: ", 10, 590);
                0 == r ? Game_CTX.fillText("ESR", 105, 590) : (Game_CTX.fillStyle = "#000000",
                    Game_CTX.fillRect(104, 575, 22, 22),
                    Game_CTX.fillStyle = u[r - 1],
                    Game_CTX.fillRect(105, 576, 20, 20));
                Game_CTX.restore();
                Game_CTX.restore()
            }
        },
        initEditor: function () {
            Game_Container.addEventListener("mousedown", b)
        }
    }
}()
    , Ga = pa.renderEditor
    , Ia = pa.initEditor
    , Ca = new Uint8Array(12E4);
Array.prototype.remove = function (a) {
    a = this.indexOf(a);
    return -1 != a ? (this.splice(a, 1),
        !0) : !1
}
    ;
w.addEventListener('load', function () {
    Game_Canvas = Game_Document.getElementById("canvas");
    Game_CTX = Game_Canvas.getContext("2d");
    Game_Container = Game_Document.getElementById("canvasContainer") || Game_Canvas;
    // try {
    //     w.top.location.origin != w.location.origin && aa()
    // } catch (k) {
    //     aa()
    // }
    Game_Canvas.width = 800 * R;
    Game_Canvas.height = 600 * R;
    Game_CTX.scale(R, R);
    Game_Container.addEventListener('mousemove', game_on_mousemove)
    Game_Container.addEventListener('mousedown', game_on_mousedown)
    Game_Container.addEventListener('mouseup', game_on_mouseup)
    // x.onmousemove = sa;
    // x.onmousedown = ta;
    // x.onmouseup = va;
    // I = z.getElementById("noCursorLock");
    // C = z.getElementById("noDrawings");
    // null != localStorage && (I.checked = "1" == w.localStorage.getItem("noCursorLock") ? !0 : !1,
    //     false = "1" == w.localStorage.getItem("noDrawings") ? !0 : !1);
    // w.onbeforeunload = Ba;
    // x.requestPointerLock = x.requestPointerLock || x.mozRequestPointerLock || x.webkitRequestPointerLock;
    Game_Canvas.style.cursor = "none";
    // Ia();
    // y || ca();
    // setInterval(J, 50);
    // w.requestAnimationFrame(la)
})

//
//
//  AFTER BURNER
//
//
var oldDataView = DataView

DataView = function () {
    // console.log('get', ...arguments)
    var dataview = new oldDataView(...arguments)
    this.getUint8 = dataview.getUint8.bind(dataview)
    this.setUint8 = dataview.setUint8.bind(dataview)

    this.getUint16 = dataview.getUint16.bind(dataview)
    this.setUint16 = dataview.setUint16.bind(dataview)

    this.getUint32 = dataview.getUint32.bind(dataview)
    this.setUint32 = dataview.setUint32.bind(dataview)
    xa(dataview)
}

var oldSend = WebSocket.prototype.send
WebSocket.prototype.send = function (data) {
    var dv = new oldDataView(data)
    var id = dv.getUint8(0)
    
    var x = dv.getUint16(1)
    var y = dv.getUint16(3)
    var px = dv.getUint16(5)
    var py = dv.getUint16(7)


    console.log(x)
    console.log(y)


    dv.setUint16(1, x)
    dv.setUint16(3, y)
    dv.setUint16(5, px)
    dv.setUint16(7, py)
    oldSend.bind(this)(dv)
}




