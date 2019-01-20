// ==UserScript==
// @name minesweeper.io Hack
// @namespace Violentmonkey Scripts
// @match https://minesweeper.io/*
// @grant none
// ==/UserScript==


oldProxy = MinesweeperProxy

currentProxy = null

let auto = true

MinesweeperProxy = function () {
    currentProxy = this

    oldProxy.bind(this)(...arguments)
    currentProxy.new_reveal = currentProxy.revealCell

    let onScoreChanged = currentProxy.onScoreChanged.bind(this)

    currentProxy.onScoreChanged = function (s) {
        if (s.total == 0 || currentProxy.score == null || s.total < currentProxy.score) {
            clearGuess()
            SETQUEUE = []
            console.log('reseted')
        }
        currentProxy.score = s.total
        onScoreChanged(...arguments)
    }

    currentProxy.revealCell = function (x, y) {
        for (var i = -1; i <= 1; i++) {
            for (var j = -1; j <= 1; j++) {
                AUTO(x + i, y + j)
            }
        }
    }

    let _onCellChanged = currentProxy.onCellChanged
    currentProxy.onCellChanged = function (e) {

        _onCellChanged(...arguments)
        if (auto)
            e.map(x => {

                AUTO(x.x - 1, x.y)
                AUTO(x.x + 1, x.y)
                AUTO(x.x, x.y - 1)
                AUTO(x.x, x.y + 1)

            })

    }
}

window.fuck = function () {
    auto = false
    let temp = currentProxy.onCellChanged
    currentProxy.onCellChanged = _ => 0;
    for (i = 0; i < 64; i++) for (j = 0; j < 64; j++) {
        currentProxy.placeFlag(i, j)
    }
    setTimeout(() => {
        //window.location.reload()
    }, 1000);
}

window.document.querySelector('#gameMenu > table > tbody > tr > td:nth-child(3) > div > a.gameMenu_Points').addEventListener('click', function () {
    window.fuck()
})


window.changeName = function (name, flagId) {
    try {
        var e = new PlayerLocal(appController.user.id, name, flagId);
        currentProxy.join(e)
    } catch (e) { }
}





function AUTO(x, y) {
    // console.log(x, y)
    if (!auto) return true
    let result = isBomb(x, y)
    clearGuess()
    return result !== 0
}


function SET(x, y, bomb) {
    // console.log(x, y, bomb)
    if (!isUnknown(x, y)) return false
    if (bomb === true) currentProxy.placeFlag(x, y)
    else if (bomb === false) currentProxy.new_reveal(x, y)
    else return false
    return true
}


let SETQUEUE = []
function QUEUESET(x, y, bomb) {
    SETQUEUE.push([x, y, bomb])
    window.changeName(`           `, Math.floor(Math.random() * 248) + 12)
    SET(...SETQUEUE.shift())
}


let look_x = 0
let look_y = 0




function walkAndLook() {
    try {
        look_x++
        if (look_x >= currentProxy.playGrid.width) {
            look_y++
            look_x = 0
        }
        if (look_y >= currentProxy.playGrid.height) {
            look_x = 0
            look_y = 0
        }

        return AUTO(look_x, look_y)
    } catch (e) {

    }
    return true
}

let wait = 0

let cold = 4


let Name = 'Slightly better than you  '

function UPDATE() {

    // if (cold < 0) {
    //     cold = 25
    //     Name = Name.substr(2) + Name.substr(0, 2)
    //     changeName(Name)
    // }
    // cold--
    if (wait <= 0)
        if (SETQUEUE.length > 0) {
            /*
                        SETQUEUE.sort((a, b) => {
                            if (a[2]) return 1
                            return -1
                        })
            */
            try {

                if (SET(...SETQUEUE.shift())) wait = Math.random() * 5
            } catch (e) {
                console.error(e)
            }

        }


    wait--

    let times = 0

    while (walkAndLook()) {
        times++
        if (times > 64) break;
    }

    setTimeout(() => {
        UPDATE()
    }, 0);

}


window.boom = function () {

    for (var i = 0; i < currentProxy.playGrid.width; i++) {
        for (var j = 0; j < currentProxy.playGrid.height; j++) {
            AUTO(i, j)
        }
    }
}




// currentProxy.placeFlag(x, y)
// currentProxy.revealCell(x, y)

// x-y range: 2~61

// most left top is 130
// next line start from 194

// size = 64x64, only use 2~61


// id list:
// 0 = bomb opened
// 1~8 = near by mines
// 9 = opened empty
// 10 = unknown field
// 11 = not in map
// 12 and upper is flag
// return false if not in the map
function getData(x, y) {
    return currentProxy.playGrid.get(x, y)
}


// return true if it's not in the map
function isOutside(x, y) {
    if (x < 0 || y < 0 ||
        x >= currentProxy.playGrid.width ||
        y >= currentProxy.playGrid.height) return true
    return getData(x, y) === 11
}


// opened == can not do any thing about it, and the answer is sure.
// return true:  opened
// return false: close
function isOpened(x, y) {
    return getData(x, y) < 10
}

function isUnknown(x, y) {
    return getData(x, y) == 10
}


let directions = [
    { x: -1, y: -1 },
    { x: 0, y: -1 },
    { x: 1, y: -1 },
    { x: -1, y: 0 },
    { x: 1, y: 0 },
    { x: -1, y: 1 },
    { x: 0, y: 1 },
    { x: 1, y: 1 }
]

// impossible?
//  bomb count not equal Number given
//  - maximum possible bomb less than Number
//  - minimum possible bomb more than Number
// > max = bomb + not sure ; min = bomb
function isPossible(x, y, deep = 0) {
    if (deep > 7) return true

    // you are asking about a place is not yet opened, ask other
    if (!isOpened(x, y)) {
        let possible = true
        directions.map(d => {
            let nx = x + d.x
            let ny = y + d.y
            if (!possible) return
            if (!isOpened(nx, ny)) return
            if (isPossible(nx, ny, deep + 1)) return
            possible = false
        })
        return possible
    }

    let data = getData(x, y)
    if (data == 0) return true
    if (data == 9) data = 0

    let bombs = 0
    let notSure = 0

    directions.map(d => {
        let nx = x + d.x
        let ny = y + d.y
        let bomb = isBomb(nx, ny, deep + 1)
        if (bomb === 0) notSure++
        else if (bomb === null) return false
        else if (bomb) bombs++
    })

    // console.log(data, 'possible', x, y, ':', bombs, notSure)

    if (bombs + notSure < data) return false
    if (bombs > data) return false
    return true
}



// GUESS
let GuessesStack = []
let myGuesses = {}

function clearGuess() {
    for (var i in myGuesses) {
        let [x, y] = i.split(',').map(z => +z)
        data = myGuesses[i]
        QUEUESET(x, y, data)
    }
    GuessesStack = []
    myGuesses = {}
}


function getGuess(x, y) {
    return myGuesses[`${x},${y}`]
}

function setGuess(x, y, n) {
    return myGuesses[`${x},${y}`] = n
}

function saveGuess() {
    let obj = {}
    Object.assign(obj, myGuesses)
    return obj
}

function restoreGuess(obj) {
    myGuesses = {}
    Object.assign(myGuesses, obj)
}

function pushGuess() {
    let obj = saveGuess()
    GuessesStack.push(obj)
}

function popGuess() {
    restoreGuess(GuessesStack.pop())
}

// return true:     there is a bomb
// return false:     there is no bomb, include it's out side of map
// return 0:  not sure
// return null: something wrong
function isBomb(x, y, deep = 0) {
    if (deep > 6) {
        return 0
    }
    // console.log('isbomb?', x, y, deep)
    // if outside, it's no bomb
    if (isOutside(x, y)) return false

    // if sure, return either true or false
    if (!isUnknown(x, y)) return getData(x, y) == 0 || getData(x, y) > 10

    // if guessed, return guess
    let previous_guessed = getGuess(x, y)
    if (previous_guessed !== undefined) return previous_guessed

    // else you need to guess

    // 1. guess is bomb, check is it possible
    pushGuess() // store this state first..
    setGuess(x, y, true)
    let possible_bomb = isPossible(x, y, deep)
    let possible_bomb_state = saveGuess()
    // console.log(possible_bomb_state)
    popGuess()

    // 2. else guess is no bomb check is it possible
    pushGuess()
    setGuess(x, y, false)
    let possible_nobomb = isPossible(x, y, deep)
    let possible_nobomb_state = saveGuess()
    // console.log(possible_nobomb_state)
    popGuess()

    // if one of those impossible, it's another and sure.
    if (possible_bomb && !possible_nobomb) {
        restoreGuess(possible_bomb_state)
        return true
    }
    if (possible_nobomb && !possible_bomb) {
        restoreGuess(possible_nobomb_state)
        return false
    }

    // if both possible, it's not sure.
    if (possible_bomb && possible_nobomb) return 0

    // if both impossible, there is something wrong.
    return null
}


window.isBomb = isBomb

UPDATE()




