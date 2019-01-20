// ==UserScript==
// @name KeyBr hack
// @namespace Violentmonkey Scripts
// @match https://www.keybr.com/*
// @grant none
// ==/UserScript==


KE = Event
Event = function () {
    console.log(...arguments)
    KE.bind(this)(...arguments)
    this.isTrusted = true
}

function answer() {
    return Array.from(document.querySelectorAll('.TextInput-fragment>span:not(.TextInput-item--ready)')).map(x => x.textContent == '␣' ? ' ' : x.textContent == '↵' ? '\n' : x.textContent).join('')
}


_addEventListener = window.addEventListener


let events = {}


window.addEventListener = function (e, f) {
    console.log(...arguments)
    _addEventListener.bind(window)(...arguments)
    events[e] = f
}

function simkey(char) {
    events.keydown(keyevent(char))
    events.keypress(keyevent(char))
    events.keyup(keyevent(char))
}

window.simkey = simkey
window.events = events



// , a = t.altKey
// , n = t.charCode
// , r = t.code
// , i = t.ctrlKey
// , o = t.key
// , s = t.keyCode
// , c = t.location
// , l = t.metaKey
// , u = t.repeat
// , d = t.shiftKey
// , f = t.timeStamp
// , y = t.type;
let special = {
    '\n': 'Enter',
    ',': 'Comma',
    '.': 'Period',
    ' ': 'Space'
}
function keyevent(char) {
    return new KeyboardEvent('keydown', {
        isTrusted: true,
        altKey: false,
        charCode: char.charCodeAt(),
        code: special[char] || ('Key' + char),
        ctrlKey: false,
        key: char == '\n' ? 'Enter' : char,
        keyCode: char.charCodeAt(),
        metaKey: false,
        shiftKey: false,
        timeStamp: Date.now()
    })
}