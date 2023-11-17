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
        if(!this.isDev) return
        window.console.log(...args)
    }
}

// Regular
console.log('one', 'two')
console.log(...dogs)

// Interpolated

// Styled

// warning!

// Error :|

// Info

// Testing

// clearing

// Viewing DOM Elements

// Grouping together

// counting

// timing

