'use strict'

// start with strings, numbers and booleans
console.log('1.start with strings, numbers and booleans')
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
// and we want to make a copy of it.
console.log('2. Array for problem')
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];
console.log(players)
// You might think we can just do something like this:
let palyers2 = players

// however what happens when we update that array?
palyers2[0] = 'Danny'

// now here is the problem!
console.log(players, palyers2)

// oh no - we have edited the original array too!
// Why? It's because that is an array reference, not an array copy. They both point to the same array!
// So, how do we fix this? We take a copy instead!

// one way
console.log('2. Array for ues slice()')
console.log('players: ', players)

let palyersSlice = players.slice()

palyersSlice[0] = '2. Array for ues slice()'

console.log('players: ', players)
console.log('palyersSlice: ', palyersSlice)

// or create a new array and concat the old one in
console.log('2. Array for ues concat()')
console.log('players: ', players)

let palyersConcat = [].concat(players)
palyersConcat[0] = '2. Array for ues concat()'

console.log('players: ', players)
console.log('palyersConcat: ', palyersConcat)

// or use the new ES6 Spread
console.log('2. Array for ues Spread')
console.log('players: ', players)

let palyersSpread = [...players]
palyersSpread[0] = '2. Array for ues Spread'

console.log('players: ', players)
console.log('palyersSpread: ', palyersSpread)

// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object
// with Objects
let person = {
    name: 'Wes Bos',
    age: 80
}

// and think we make a copy:
// how do we take a copy instead?
console.log('3. Objects for use object assign')
console.log('person', person)

let objectAssign = Object.assign({}, person)
person.name = 'Danny'

console.log('person', person)
console.log('objectAssign', objectAssign)


person.name = 'Wes Bos'
console.log('3. Objects for use json parse and stringify')
console.log('person', person)

let jsonParseStringify = JSON.parse(JSON.stringify(person))
person.name = 'Danny'

console.log('person', person)
console.log('jsonParseStringify', jsonParseStringify)

// We will hopefully soon see the object ...spread
person.name = 'Wes Bos'
console.log('3. Objects for use spread')
console.log('person', person)

let personSpread = { ...person }
person.name = 'Danny'

console.log('person', person)
console.log('personSpread', personSpread)


// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
