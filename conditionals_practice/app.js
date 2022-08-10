// // mutable block scoped) <- Good!
// let mage;

// // old way, also mutable but global/funtion scoped)(Hoisting) Bad! <- not really
// var page;

// // Constant
// const age = 10; 

// //DATA TYPES

// // NUMBER
// const age2 = 10;

// // STRINGS
// const name = 'Shakespeare: "to be or not to be" '

// // BOOLEAN
// const employed = true;

// // UNDEFINED
// const example = undefined;

// // NULL
// const example2 = null;

// // STRING OPERATOR
// let firstName = "Bob"
// let lastName = "The Builder"

// // CONCATENATION
// let fullName = firstName + lastName
// let concatenation = "con" + "cat" + "ena" + "nation"

// //console.log(concatenation)

// // CAMEL CASE
// // myFavoriteDesert

// // PASCAL CASE
// // MyFavoriteDesert


// // my_favorite_desert

// // KEBAB CASE
// //my-favorite-desert

// // LOGICAL OPERATORS
// // AND    &&
// // OR     ||
// // NOT    !

// // SHORTHANDS

// let fire = 0;

// fire = fire + 1;

// fire += 1;

// // Only for incrementing or decrementing by 1
// fire-- // decrement by 1
// fire++ // increment by 1

// // EXERCISE 1

// let num1 = 20;
// let num2 = 21;
// let total = num1 + num2;
// console.log(total)

// // EXERCISE 2

// let num3 = -39
// let num4 = -23
// let total2 = total + (num3 * num4)
// console.log(total2)

// // EXERCISE 3

// let num5 = 34
// let num6 = 49
// let num7 = 4
// let num8 = 2
// let num9 = 3
// let num10 = -70

// let avg1 = (num1 + num2 + num3 + num4 + num5)/5
// console.log(avg1)

// let avg2 = (num6 + num7 + num8 + num9 + num10)/5
// console.log(avg2)

// let totalavg = (avg1 + avg2)/2
// console.log(totalavg)

// // EXERCISE 4

// let avg3 = (4+10+22-30+55)/5
// console.log(avg3)

// let avg4 = (68+7-22+9+100)/5
// console.log(avg4)

// let avg5 = (avg3 + avg4)/2
// console.log(avg5)

// // EXTRA EXERCISE 

// let box1, box2, temp;

// box1 = 2;
// box2 = 3;

// temp = box1;
// box1 = box2;
// box2 = temp;

// console.log(box1)
// console.log(box2)

// // CONDITIONALS

// if (true){
//     console.log('true')
// }
// else {
//     //do this
// }

// // EXERCISE CONDITIONALS 1

// let num = 14;

// if (num >= 0){
//     console.log('positive')
// } else {
//     console.log('negative')
// }

// // EXERCISE CONDITIONALS 2

// num = -14;

// if (num >= 0) {
//     console.log('positive')
// } else {
//     console.log('negative')
// }

// // EXERCISE CONDITIONALS 3

// if (age >= 18) {
//     console.log('access granted')
// } else {
//     console.log('access denied')
// }

// NESTED CONDITIONALS EXERCISES 1

let nested_num = 20;

if (nested_num >= 0) {
    if (nested_num > 100) {
        console.log('number is positive and greater than 100');
    } else {
        console.log('number is positive but not greater than 100');
    }
} else {
    console.log ('number is not positive');
}

// NESTED CONDITIONALS EXERCISE 2

let pass = true;
let grade = 67;

if (pass) {
    if (grade >= 90) {
        console.log('A');
    } else if (grade >= 80) {
        console.log('B');
    } else if (grade >= 70) {
        console.log('C');
    } else {
        console.log('D');
    }
} else {
    console.log('F');
}

// SWITCH STATEMENT EXERCISE 

let letter = 'F';

switch(letter) {
    case 'A':
    case 'E':
    case 'I':
    case 'O':
    case 'U':
        console.log('Vowel');
        break;
    default:
        console.log('Consonant');
}

// TERNARY OPERATORS EXERCISE

let guess_number = -12;
let status = guess_number > 0 ? 'Positive' : guess_number === 0 ? 'Neither positive nor negative' :
'Negative';
console.log(status);