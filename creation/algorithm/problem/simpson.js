main();

function main() {
    var n, i;
    var integral;
    integral = simpson(1.0, 2.0, 5000);
    console.log("切成5000小塊地辛普森法之數學函數的定積分近似值為", integral);
    return 0;
}

function f(x) {
    var z = 0;
    var xx = 0;
    z = ((x * x - 2.0) * x * x + 1.0) * x - 5.0;
    if (z < 0) {
        xx = -1.0 * Math.pow(-1.0 * z, 1.0 / 3.0);
    }
    else {
        xx = 1.0 * Math.pow(1.0 * z, 1.0 / 3.0);
    }
    return xx;
}
function simpson(a, b, n) {
    var h = (b - a) / (2.0 * n);
    var sum = 0.0;
    var x = a + h;
    var i;
    for (i = 0; i <= n - 1; i++) {
        sum = sum + Math.abs(f(x));
        x = x + 2.0 * h;
    }
    sum = sum * 4.0;
    x = a + 2.0 * h;
    var area = 0.0;
    for (i = 1; i <= n - 1; i++) {
        area = area + Math.abs(f(x));
        x = x + 2.0 * h;
    }
    sum = sum + 2.0 * area + Math.abs(f(a)) + Math.abs(f(b));
    return sum * h / 3.0;
}