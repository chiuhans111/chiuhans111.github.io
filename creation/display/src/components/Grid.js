function Grid(width, height) {
    this.width = width
    this.height = height
    this.data = {}

    this.set = function (x, y, obj) {
        if (x < 0 || x >= this.width || y < 0 || y >= this.height) return
        if (this.data[x] == null) this.data[x] = {}
        this.data[x][y] = obj
    }

    this.get = function (x, y) {
        if (x < 0 || x >= this.width || y < 0 || y >= this.height) return undefined
        if (this.data[x] == null) return null
        this.data[x][y]
    }

    this.map = function (f) {
        for (var i in this.data) {
            for (var j in this.data[i]) {
                f(this.data[i][j], i, j, this)
            }
        }
    }

    this.setall = function (f) {
        for (var i = 0; i < this.width; i++) {
            for (var j = 0; j < this.height; j++) {
                this.set(i, j, f(this.get(i, j), i, j, this))
            }
        }
    }


    this.setGrid = function (x, y, grid) {
        for (var i = 0; i < grid.width; i++) {
            for (var j = 0; j < grid.height; j++) {
                this.set(x + i, y + j, grid.get(i, j))
            }
        }
    }
}



export default Grid