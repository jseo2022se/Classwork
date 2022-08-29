// hackerrank codes practice
// review for array methods

// map
// filter
// forEach

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]
const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']

// array methods take a callback function as an argument
// callbacks are functions that will run at a later time
// exmaple of a forEach array method: nums.forEach()

// every method
// if every element/value is greater than zero, return true
let test = nums.every(myCallback) // -> returns either true or false

// creating our very own callback function
// this callback checks if every element/value is greater than 0
function myCallback (element) {
    if (element >= 0) { // or return element >= 0
        return true
    } else {
        return false
    }
}

// console.log('The result of our every array method check is...', test)

// MDN Docs example of a callback
// const isBelowThreshold = (currentValue) => currentValue < 40;

// same thing as ...
function isBelowThreshold (customElements) {
    return currentValue < 40
}


let test2 = panagram.every(myNewCallback)

function myNewCallback(element) {
    if (element.length < 8) {
        return true
    } else {
        return false
    }
}

// console.log('the result of our every array method check for words is...', test2)

// filter method examples
let test3 = nums.filter(element => element < 4)
// console.log('Filter method result shows...', test3)
let test4 = panagram.filter(element => element.length % 2 == 0)
// console.log('Filtering even length words...', test4)

// find method
let test5 = nums.find(element => element % 5 == 0)
let test6 = panagram.find(element => element.length > 5)
// console.log(test5)
// console.log(test6)

// find index method
let test7 = nums.findIndex(element => element % 3 == 0)
let test8 = panagram.findIndex(word => word.length < 2)

// forEach method
// let test9 = nums.forEach(element => console.log(element * 3))
// let test10 = panagram.forEach((word) => console.log(word + '!'))

// map method
let mapNum = nums.map(element => element * 100)
// console.log(mapNum)
let mapWords = panagram.map(words =>  words.toUpperCase())
// console.log(mapWords)

// some method
let someNum = nums.some(element => element % 7 === 0)
// console.log('Checking some nums list...', someNum)
let someWords = panagram.some((words) => words.indexOf('a') > -1)
// console.log('Checking some words list...', someWords)

