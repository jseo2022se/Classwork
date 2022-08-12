// inside paranthesis we have 
// three statements:

// statement 1:
// declare and initialzie a variable

// statement 2:
// a condition when true runs the 
// code in the for loop

// statement 3:
// incrementing of the variable in
// order to eventually break the loop

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// Step 1: declare and initialize variable
// Step 2: check the condition whether true/false
// Step 3: console log runs and prints i
// Step 4: variable i increments by 1
// Step 5: repeat Step 2
// Step ..: when condition returns false, stop loop

// EXERCISE 1

// for (let i = 10; i > 0; i--) {
//     console.log(i);
// }

// // EXERCISE 2

// for (let i = 0; i<=20; i++) {
//     if (i < 10 && i % 2 != 0) {
//         console.log(i);
//     }
//     if (i > 10 && i % 2 == 0) {
//         console.log(i - 10);
//     }
// }

// console.log(odd_string+even_string);

// // EXERCISE 3

// for (let i = 6; i <= 60; i+=3) {
//     console.log(i);
// }

// // EXERCISE 4

// let star = '';
// for (let i = 1; i < 8; i++) {
//     star += '#';
//     console.log(star);
// }

// // EXERCISE 5

// for (let i = 0; i <= 10; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }

// // EXERCISE 6

// for (let i = 1; i <= 20; i++) {
//     if (i == 1 || i == 3) {
//         console.log (i +' odd');
//     } else if (i == 2) {
//         console.log (i + ' even');
//     }
//     else {
//         if (i % 2 == 0) {
//             console.log(i+ ' even');
//         } else if (i % 3 == 0) {
//             console.log(i + ' odd');
//         } else {
//             console.log(i + ' prime');
//         }
//     }
// }

///////////////////////////////////////////////////////////////////////////////////

// statement 1:
// declare and initialzie a variable

// statement 2:
// a condition when true runs the 
// code in the for loop

// statement 3:
// incrementing of the variable in
// order to eventually break the loop

// let i = 1;

// while (i < 10) {
//     console.log(i);
//     i++;
// }

// // EXERCISE 1

// let i = 1
// while(i < 35) {
//     if (i % 3 == 0) {
//         console.log(i);
//     }
//     i++;
// }

// // EXERCISE 2

// let i = 1;

// while (i < 100) {
//     if (i % 5 == 0) {
//         console.log(i);
//     }
//     i++;
// }

// // EXERCISE 3

// let i = 1;

// while (i<20) {
//     if (i % 2 == 0) {
//         console.log(i*3);
//     }
//     i++;
// }

// // EXERCISE 4

// let i = 1;

// while (i < 20) {
//     if (i == 1) {
//         i++;
//         continue;
//     }
//     else if (i == 2 || i == 3) {
//         console.log(i);
//     }
//     else if (i % 2 != 0 && i % 3 != 0) {
//         console.log(i);
//     }
//     i++;
// }

// // BONUS QUESTION

// let i = 600;
// let quarters = 0;
// while (i > 0) {
//     i -= 25;
//     quarters++;
// }
// console.log(quarters + ' quarters');

// // EXERCISE 6

// let i = 1;
// while (i <= 20) {
//     if (i < 10 && i % 2 != 0) {
//         console.log(i*10);
//     }
//     if (i > 10 && i % 2 == 0) {
//         console.log((i-10)*10);
//     }
//     i++;
// }

// // EXERCISE 7 

// let i = 500;
// while (i <= 800) {
//     if (i % 4 == 0) {
//         console.log(i);
//     }
//     i++;
// }

// // EXERCISE 8

// let i = 100 - 27.83;
// let bill = 0;
// while (i > 0) {
//     i -= 1;
//     bill++;
// }
// console.log(bill-1);

// // OUTPUT 1 AS A FOR LOOP

// for (let i = 1; i <= 5; i++) {
//     let output1 = '';
//     for (let j = 1; j <= i; j++) {
//         output1 += j;
//     }
//     console.log(output1);
// }

// // OUTPUT 2 AS A FOR LOOP
// for (let i = 5; i > 0; i--) {
//     let count = i;
//     let output2 = '';
//     for (let j = i; count > 0; count--) {
//         output2 += j;
//     }
//     console.log(output2);
// }
