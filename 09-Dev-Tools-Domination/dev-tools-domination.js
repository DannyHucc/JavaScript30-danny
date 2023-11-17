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
    logStyle(...args) {
        if (!this.isDev) return
        window.console.log('%clog styled', 'font-size:20px; color:red;')
        window.console.log(...args)
    }
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

// Error :|

// Info

// Testing

// clearing

// Viewing DOM Elements

// Grouping together

// counting

// timing

