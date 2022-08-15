// ARRAYS 


// learners[0] = 4;

// learners.push(5);

// learners.pop();

// learners.shift();

// learners.unshift();


// let learners = ['Sami', 'Chris', 'Stephin']; // can put whatever data type inside array in JS

// let instructors = ['Jade', 'Rixio', 'Teo'];

// // spread operator

// // let everybody = [...learners, ...instructors];


// // rest parameters

// function add(... numbers) {

//     // first index is always 0
//     // last index is always length of array - 1

//     for(let i = 0; i < numbers.length; i++) {
//         console.log(numbers[i]);
//     }
// }

// add(4, 5, 6, 10, 100, 50);



// FUNCTIONS AND ARRAYS LAB EXERCISES


// EXERCISE 1

// function maxOfTwoNumbers(number1, number2) {
//     if (number1 <= number2) {
//         return number2;
//     } else {
//         return number1;
//     }
// }


// EXERCISE 2

// function maxOfThree (number1, number2, number3) {
//     if (number1 >= number2) {
//         if (number1 >= number3) {
//             return number1
//         } else {
//             return number3
//         } 
//     } else {
//             if (number2 >= number3) {
//                 return number2;
//             }
//             else {
//                 return number3;
//             }
//         }
// }


// EXERCISE 3

// function isCharAVowel(letter) {
//     letLower = letter.toLowerCase();
//     vowels = ['a','e','i','o','u'];
//     for(let i = 0; i < vowels.length; i++) {
//         if(vowels[i] == letLower) {
//             return true;
//         }
//     }
//     return false;
// }


// EXERCISE 4

// function sumArray(arrayNum) {
//     let sum = 0;
//     for (let i = 0; i < arrayNum.length; i++) {
//         sum += arrayNum[i];
//     }
//     return sum;
// }


// EXERCISE 5

// function multiplyArray(arrayNum) {
//     let prod = 1;
//     for (let i = 0; i < arrayNum.length; i++) {
//         prod *= arrayNum[i];
//     }
//     return prod;
// }


// EXERCISE 6

// function numArgs(...numArray) {
//     return numArray.length;
// }
// console.log(numArgs(1,2,3,4,5,20));


// EXERCISE 7

// function reverseString(sentence) {
//     let reverse = '';
//     for(let i = sentence.length - 1; i >= 0; i--) {
//         reverse += sentence[i];
//     }
//     return reverse;
// }


// EXERCISE 8

// function longestStringInArray(stringArray) {
//     let output = 0;
//     for (let i = 0; i < stringArray.length; i++) {
//         if (stringArray[i].length > output) {
//             output = stringArray[i].length;
//         } 
//     }
//     return output
// }


// EXERCISE 9

// function stringsLongerThan(numberLength, arrayOfStrings) {
//     let output = [];
//     for (let i = 0; i < arrayOfStrings.length; i++) {
//         if (arrayOfStrings[i].length > numberLength) {
//             output.push(arrayOfStrings[i]);
//         }
//     }
//     return output;
// }


// CHALLENGE
// function addList(...listNumbers) {
//     let sum = 0;
//     if (!listNumbers) {
//         return 0;
//     }
//     for (let i = 0; i < listNumbers.length; i++) {
//         sum += listNumbers[i];
//     }
//     return sum;
// }

// console.log(addList (7,-12));
