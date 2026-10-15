function noise(x) {
    return Math.abs(Math.sin(x * 52 + 2)) * 41123.32322 % 1;
}

Object.assign = function (a, b) {
    for (var i in b) a[i] = b[i]
    return a;
}

function splitX(box, x) {
    x = Math.round(x)
    return [{
        x: box.x, y: box.y,
        w: x,
        h: box.h,
        level: box.level + 1
    }, {
        x: box.x + x, y: box.y,
        w: box.w - x,
        h: box.h,
        level: box.level + 1
    }]
}

function splitY(box, y) {
    y = Math.round(y)
    return [{
        x: box.x, y: box.y,
        w: box.w,
        h: y,
        level: box.level + 1
    }, {
        x: box.x, y: box.y + y,
        w: box.w,
        h: box.h - y,
        level: box.level + 1
    }]
}


function genLayout(target) {

    let blocks = target.querySelectorAll('.layout')
    let rect = target.getBoundingClientRect()
    let box_stack = [{
        x: 0, y: 0,
        w: rect.width,
        h: window.innerHeight,
        level: 0
    }];

    let box_done = [];
    let index = 0;

    while (box_stack.length > 0) {
        index++;
        let box = box_stack.pop();
        if (box_done.length >= blocks.length) break;
        if (index > 100) break;
        if (box.w <= 128 || box.h <= 32) {
            box_done.push(box);
            continue;
        }
        let boxes = [];
        if (box.w > box.h) boxes = splitX(box, box.w * 0.618)
        if (box.h > box.w) boxes = splitY(box, box.h * 0.618)
        box_stack.push(boxes[1])


        if (boxes[0].level < 2)
            box_stack.push(boxes[0])
        else
            box_done.push(boxes[0])

    }


    let canvas = document.createElement('canvas')
    let ctx = canvas.getContext('2d')
    ctx.font = "1000px " + getComputedStyle(document.body).fontFamily

    for (var i = 0; i < blocks.length; i++) {
        blocks[i].style.opacity = 0;
        blocks[i].style.display = "none";
    }

    box_done.map(function (box, i) {
        let div = blocks[i]
        let minSize = Math.min(box.w, box.h)
        let maxSize = Math.max(box.w, box.h)
        Object.assign(div.style, {
            position: "absolute",
            left: box.x + 'px',
            top: box.y + 'px',
            width: box.w + 'px',
            height: box.h + 'px',
            opacity: 1,
            display: "",
            transitionDelay: (noise(i)) * .2 + "s",
            borderRadius: [0, 0, 3, 4].map(function (x) {
                if (x != 0 && noise(i + x * 2 + box.x) < .5) return minSize + "px";
                return '0'
            }).join(' '),
        });

        let word = div.querySelector('.word')
        if (word != null) {
            let mesure = ctx.measureText(word.textContent.trim())
            let size = 1000 * (box.w - 16) / mesure.width
            //size = Math.min(box.h, size)
            word.style.fontSize = size + 'px'
        }
    })
}

let target = document.getElementById('cover')
window.addEventListener('resize', function () {
    genLayout(target);
})

genLayout(target);


let bgText = document.getElementById('bgText')
for (var i = 0; i < 20; i++) {
    bgText.innerHTML += 'PORTFOLIO '
}