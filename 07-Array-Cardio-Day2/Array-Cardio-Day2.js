'use strict'

// ## Array Cardio Day 2

const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
];

const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
const questionOne = people.some(p => {
    return new Date().getUTCFullYear() - p.year >= 19
})
console.log('questionOne:', questionOne)

// Array.prototype.every() // is everyone 19 or older?
const questionTow = people.every(p => {
    return new Date().getUTCFullYear() - p.year >= 19
})
console.log('questionTow:', questionTow)

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const questionThree = comments.find(comment => {
    return comment.id.toString() === '823423'
})
console.log('questionThree:', questionThree)
console.table(questionThree)

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
const findIndex = comments.findIndex(comment => {
    return comment.id.toString() === '823423'
})
const sliceStart = comments.slice(0, findIndex)
const sliceEnd = comments.slice(findIndex + 1)
const questionFour = [...sliceStart, ...sliceEnd]
console.log('questionFour', questionFour)
console.table(questionFour)