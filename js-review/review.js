/* JavaScript Total  Recall


I. Variables & Datatypes


A. Q+A

1. Using an assignment operator '='; let variable = 1;
2. variable = 2; by assigning it a new value like this
3. 
    let variable2 = variable; 

4. 
    declare = means to first name a variable
    assign = to set a value to a variable
    define = means to provide information all the information about something (like a variable, or the body of a function or the class)

5. Pseudocoding is writing or creating a rough draft of a program using non-strict programming language. One should do it because it helps
   with planning the creation of a program and also is easier to read.

6. More than 60% should be spent on thinking to solve a problem vs actually typing in code. */


// B. Strings

// let firstVariable = 'Hello World';
// firstVariable = 1;
// let secondVariable = firstVariable;
// secondVariable = 'Codex Astartes';
// console.log(firstVariable); // 6. the value of the firstVariable is 1
// let yourName = 'Jeonghyun Seo';
// console.log('Hello my name is ' + yourName);


// C. Booleans

// const a = 4;
// const b = 53;
// const c = 57;
// const d = 16;
// const e = 'Kevin';

// console.log(a < b);
// console.log(c > d);
// console.log('Name' === 'Name'); // or ==
// console.log(true || false);
// console.log(false || false || false || false || false || true);
// console.log(false === false);
// console.log(e === 'Kevin');
// console.log(a + b === c);
// console.log(a * a === d);
// console.log(48 == '48');


// D. The Farm

// const animal = 'pig';
// if (animal === 'cow') {
//     console.log('mooooo');
// } else {
//     console.log("Hey! You're not a cow.");
// }


// E. Driver's Ed

// let personAge = 15; 
// if (personAge >= 16) {
//     console.log("Here are the keys!");
// } else {
//     console.log("Sorry, you're too young.");
// }


// II. LOOPS

// A. The Basics

// 1.
// for (let i = 0; i < 11; i++) {
//     console.log(i);
// }

// 2. 
// for (let i = 10; i < 401; i++) {
//     console.log(i);
// }

// 3. 
// for (let i = 12; i < 4001; i+=3) {
//     console.log(i);
// }


// B. GET EVEN

// for (let i = 1; i <= 100; i++) {
//     if (i % 2 === 0) {
//         console.log(i +"<-- is an even number");
//     } else {
//         console.log(i);
//     }
// }


// C. GIVE ME FIVE

// for (let i = 0; i <= 100; i++) {
//     if (i === 0) {
//         continue;
//     }
//     if (i % 3 === 0) {
//         if (i % 5 === 0 ) {
//             console.log('I found a ' + i + '. Three is a crowd');
//             console.log('I found a ' + i + '. High five!');
//         }
//         else {
//             console.log('I found a ' + i + '. Three is a crowd');
//         }
//     } 
//     else if (i % 5 === 0) {
//         if (i % 3 === 0) {
//             console.log('I found a ' + i + '. Three is a crowd');
//             console.log('I found a ' + i + '. High five!');
//         } else {
//             console.log('I found a ' + i + '. High five!');           
//         }
//     }
// }

// D. Savings Account

// 1.
// const bank_account = () => {
//     let sum = 0;
//     for (let i = 1; i <= 10; i++) {
//         sum += i;
//     }
//     return sum;
// }
// console.log(bank_account());

// 2.
// const bank_account = () => {
//     let sum = 0;
//     for (let i = 1; i <= 100; i++) {
//         sum += i;
//     }
//     return sum * 2;
// }
// console.log(bank_account());



// III. Arrays & Control flow


// A. Talk about it

// 1. The things in an array are called elements.
// 2. Yes, they are ordered as one can iterate through arrays in increasing order
// 3. Some real life things one could model with an array is maybe a list of games that you currently own that would increase 
//   whenever a new game is purchased or added to the library.


// B. Easy Does It

// let quotes = ['To be or not to be', 'Fortune favors the bold', 'I think, therefore I am'];


// C. Accessing elements

// 1. randomThings[0];
// 2. randomThings[2] = "World";
// 3. console.log(randomThings);


// D. Change values

// 1. console.log(ourClass[2]);
// 2. ourClass[4] = "Octocat";
// 3. ourClass.push("Cloud City");


// E. Mix It Up

// const myArray = [5, 10, 500, 20];

// myArray.push("Aegon");
// myArray.shift();
// myArray.unshift("Bob Marley");
// myArray.pop();
// myArray.reverse(); 
// console.log(myArray); 
// Mutate means to change the original structure, which reverse does.
// While reverse itself doesn't print anything, it does reverse the order withing the myArray array


// F. Biggie Smalls

// let number = prompt("enter number : ");
// if (number < 100) {
//     console.log("little number");
// } else {
//     console.log("big number");
// }


// G. Monkey in the Middle

// if (number < 5) {
//     console.log('little number');
// } else if (number > 10) {
//     console.log('big number');
// } else {
//     console.log('monkey');
// }


// H. What's in Your Closet?

// 1. console.log('Kristyn is rocking that ' + kristynsCloset[2] + 'today!');
// 2. kirstynsCloset.splice(6, 0, 'raybans');
// 3. kirstynsCloset[5] = 'stained knit hat';
// 4. thomsCloset[0][0];
// 5. thomsCloset[0][3];
// 6. thomsCloset[1][2];
// 7. console.log('Thom is looking fierce in a ' + thomsCloset[0][0] + ', ' + thomsCloset[0][1] + ' and ' + thomsCloset[2][1] + '!');
// 8. thomsCloset[1][2] = 'Footie Pajamas';


// IV. Functions

// A. printGreeting

// function printGreeting(name) {
//     return `Hello there, ${name}!`;
// }
// console.log(printGreeting('jeonghyun seo'));

// B. printCool

// function printCool(name) {
//     return `${name} is cool`;
// }
// console.log(printCool('jeonghyun seo'));

// C. calculateCube

// function calculateCube(number) {
//     return number * number * number;
// }

// D. isVowel

// function isVowel (ch) {
//     let char = ch.toLowerCase();
    
//     switch(char) {
//         case 'a':
//         case 'e':
//         case 'i':
//         case 'o':
//         case 'u':
//             return true;
//             break;
//         default:
//             return false;
//     }
// }

// E. getTwoLengths

// function getTwoLengths(string1, string2) {
//     let lengthArr = [string1.length, string2.length];
//     return lengthArr;
// }
// console.log(getTwoLengths('Hank', 'Hippopopalous'));

// F. getMultipleLengths

// function getMultipleLengths(arrString) {
//     let stringLengths =[];
//     for (let i = 0; i < arrString.length; i++) {
//         stringLengths.push(arrString[i].length);
//     }
//     return stringLengths;
// }
// console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));

// G. maxOfThree

// function maxOfThree (variable1, variable2, variable3) {
//     if (variable1 >= variable2) {
//         if (variable1 >= variable3) {
//             return variable1;
//         } else {
//             return variable3;
//         }
//     } else {
//         if (variable2 >= variable3) {
//             return variable2;
//         } else {
//             return variable3;
//         }
//     }
// }
// console.log(maxOfThree(2,5,7))

// H. printLongestWord

// function printLongestWord (stringsArr) {
//     let longest = stringsArr[0];
//     for (let i = 1; i < stringsArr.length; i++) {
//         if (longest.length == stringsArr[i].length) {
//             continue;
//         } else if (longest.length < stringsArr[i].length) {
//             longest = stringsArr[i];
//         }
//     }
//     return longest;
// }
// console.log(printLongestWord(['BoJack', 'Princess', 'Diane', 'a', 'Max', 'Peanutbutter', 'big']))


// OBJECTS

// A. Make a user object

// const user = {
//     name: 'Jeong',
//     email: '1234@gmail.com',
//     age: 27,
//     purchased: []
// };

// // B. Update the user

// user.email = '2020@gmail.com';
// user.age = 28;

// // C. Adding keys and values

// user['location'] = 'New Jersey';
// // console.log(user);

// // D. Shopaholic!

// user.purchased.push('carbohydrates');
// user.purchased.push('peace of mind');
// user.purchased.push('Merino jodhpurs');
// // console.log(user.purchased[2]);

// // E. Object-within-object

// user['friend'] = {
//     name: 'Grace Hopper',
//     age: 27,
//     location: 'New York',
//     purchased: []
// };
// // console.log(user.friend.name);
// // console.log(user.friend.location);
// user.friend.age = 55;
// user.friend.purchased.push('The One Ring');
// user.friend.purchased.push('A latte');
// console.log(user.friend.purchased[1]);

// F. Loops
// for (let i = 0; i < user.purchased.length; i++) {
//     console.log(user.purchased[i]);
// }
// for (let j = 0; j < user.friend.purchased.length; j++) {
//     console.log(user.friend.purchased[j]);
// }

// G. Functions can operate on objects
// function updateUser() {
//     user.age++;
//     user.name = user.name.toUpperCase();
// }
// // updateUser();
// // console.log(user)

// function oldAndLoud(person) {
//     person.age++;
//     person.name = person.name.toUpperCase();
// }
// oldAndLoud(user);
// console.log(user);


// Cat Combinator

// const cat1 = {
//     name: 'Janine',
//     breed: 'Shorthair',
//     age: 6
// }
// console.log(cat1.age);
// console.log(cat1.breed);

// const cat2 = {
//     name: 'Joe',
//     breed: 'Longhair',
//     age: 7
// }

// const combineCats = (mama, papa) => {
//     let newCat = {
//         name: mama.name + papa.name,
//         age: 1,
//         breed: mama.breed + '-' + papa.breed
//     }
//     return newCat;
// }
// // console.log(combineCats(cat1, cat2));

// console.log(combineCats(combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)), combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2))));