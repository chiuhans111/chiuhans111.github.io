interface ISize {
    width: Number,
    height: Number
}

class Layout {
    static arrange(blocks: ISize[]) {
        for (var block of blocks) {
            console.log('block:', block.width, block.height)
        }
    }
}

