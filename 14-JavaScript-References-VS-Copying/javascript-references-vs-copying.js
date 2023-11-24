'use strict'

// start with strings, numbers and booleans
// numbers
let num = 1
let num1 = num
console.log(num, num1)
num = 2
console.log(num, num1)
// string
let str = 'str'
let str1 = str
console.log(str, str1)
str = 'str1'
console.log(str, str1)
// booleans
let booleans = false
let booleans1 = booleans
console.log(booleans, booleans1)
booleans = !booleans1
console.log(booleans, booleans1)

let a = "A"
let b = "A"
let c = "A"
b = "B", c = "C", a += b, a += c
console.log(a, b, c)

// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

// and we want to make a copy of it.

// You might think we can just do something like this:

// however what happens when we update that array?

// now here is the problem!

// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!

// one way

// or create a new array and concat the old one in

// or use the new ES6 Spread

// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
    name: 'Wes Bos',
    age: 80
};

// and think we make a copy:

// how do we take a copy instead?

// We will hopefully soon see the object ...spread

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.