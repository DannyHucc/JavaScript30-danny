'use strict'

const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
}
makeGreen()

const console = {
    isDev: true,
    log(...args) {
        if (!this.isDev) return
        window.console.log(...args)
    },
    logStyle() {
        if (!this.isDev) return
        window.console.log('%clog styled', 'font-size:20px; color:red;')
    },
    warn(...args) {
        if (!this.isDev) return
        window.console.warn(...args)
    },
    error(...args) {
        if (!this.isDev) return
        window.console.error(...args)
    },
    info(...args) {
        if (!this.isDev) return
        window.console.info(...args)
    },
    assert(...args) {
        if (!this.isDev) return
        window.console.assert(...args)
    },
    dir(...args) {
        if (!this.isDev) return
        window.console.dir(...args)
    },
    table(...args) {
        if (!this.isDev) return
        window.console.table(...args)
    },
    count(...args) {
        if (!this.isDev) return
        window.console.count(...args)
    },
    time(...args) {
        if (!this.isDev) return
        window.console.time(...args)
    },
    timeEnd(...args) {
        if (!this.isDev) return
        window.console.timeEnd(...args)
    },
}

// Regular
console.log('one', 'two')
console.log(...dogs)

// Interpolated
console.log('My name is %s', 'Danny') // string
console.log('I have %d dollars', 666666) // decimal
console.log('I have %f dollars', 66666.6) // float
const money = 666666
console.log(`I have ${money} dollars`) // template literals

// Styled
console.logStyle(...dogs)

// warning!
console.warn('warning')

// Error :|
console.error('error')

// Info
console.info(...dogs)

// Testing
console.assert(true, 'assert')
console.assert(false, 'false')
console.assert("", 'empty content')
console.assert(0, '0')
console.assert(NaN, 'NaN')
console.assert(null, 'null')
console.assert(undefined, 'undefined')

// clearing
// CTRL + L

// Viewing DOM Elements
const q = document.querySelector("p")
console.log(q)
console.dir(q)

// Grouping together
console.table(dogs)
console.table(dogs, ['age'])

// counting
console.count('one')
console.count('three')
console.count('two')
console.count('three')
console.count('two')
console.count('three')

// timing
const times = 10000000

console.time('i1 j1 out')
let i1
let j1
for (i1 = 1; i1 < times; i1++) {
    j1 = i1
}
console.timeEnd('i1 j1 out')

console.time('i2 j2 in')
for (let i2 = 1; i2 < times; i2++) {
    let j2 = i2
}
console.timeEnd('i2 j2 in')

console.time('i3 out j3 in')
let i3
for (i3 = 1; i3 < times; i3++) {
    let j3 = i3
}
console.timeEnd('i3 out j3 in')

console.time('i4 in j4 out')
let j4
for (let i4 = 1; i4 < times; i4++) {
    j4 = i4
}
console.timeEnd('i4 in j4 out')