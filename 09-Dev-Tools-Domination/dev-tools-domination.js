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

// Viewing DOM Elements

// Grouping together

// counting

// timing

