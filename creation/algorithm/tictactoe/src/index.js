var Benchmark = require('benchmark');

var suite = new Benchmark.Suite;
var target = {}
for (var i = 0; i < 2000; i++) if (Math.random() > .5) target[i] = { a: 1 }

var ii = 0, jj = 0

var z = 0
function use(x) {
    z = x
}




// add tests

suite
    .add('prepared array give size', function () {
        let arr = new Array(81)
        for (let i = 0; i < 81; i++) arr[i] = i
        let arr2 = new Array(81)

    })
    .add('prepared array', function () {
        let arr = new Array()
        for (let i = 0; i < 81; i++) arr[i] = {
            p: i,
            d: "123"
        }
        for (let i = 0; i < 81; i++) use(arr[i])

    })
    .add('prepared []', function () {
        let arr = []
        for (let i = 0; i < 81; i++) arr[i] = {
            p: i,
            d: "123"
        }
        for (let i = 0; i < 81; i++) use(arr[i])

    })
    .add('pushed', function () {
        let arr = []
        for (let i = 0; i < 81; i++) arr.push({
            p: i,
            d: "123"
        })
        for (let i = 0; i < 81; i++) use(arr[i])
    })


    // add listeners
    .on('cycle', function (event) {
        console.log(String(event.target));
    })
    .on('complete', function () {
        console.log('Fastest is ' + this.filter('fastest').map('name'));
    })
    // run async
    .run({ 'async': true });

console.log(z)