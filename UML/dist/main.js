var Block = /** @class */ (function () {
    function Block(w, h) {
        this.width = w;
        this.height = h;
    }
    return Block;
}());
var Layout = /** @class */ (function () {
    function Layout() {
    }
    Layout.arrange = function (blocks) {
        for (var _i = 0, blocks_1 = blocks; _i < blocks_1.length; _i++) {
            var block = blocks_1[_i];
            console.log('block:', block.width, block.height);
        }
    };
    return Layout;
}());
var a = new Block(10, 10);
var b = new Block(20, 40);
Layout.arrange([a, b]);
