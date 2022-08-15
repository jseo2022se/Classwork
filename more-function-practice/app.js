// let foods = ['kimchi', 'tacos', 'arepas', 'spam']

// forEach (build-in array method)
// foods.forEach(function(item, idx, arr) {
//     console.log(item)
//     console.log(idx)
//     console.log(arr)
// })

// anonymous function
// () => 
// function() { }

// callback functions
// const myForEachFuntion = funtion() {

// }

// filter (built-in array method)
// let newFoodsArr = foods.filter((item, idx) => {
//     // if you return true
//     // keep the item
//     // if you return false
//     // discard it
//     if(item[0] === 'k' || item[0] === 's') {
//         return true;
//      } else {
//         return false;
//      }
// })

// map (built-in array method)
// let brandNewArr = foods.map(function(item, idx) {
//     // change the current item
//     return item + '!'
// })

// console.log(brandNewArr)

// // reduce (built-in array method)
// let nums = [4, 10, 25, 30, 100]
// let result = nums.reduce((previousValue, currentValue) => {
//     return currentValue + previousValue
// }, 0)
// console.log(result)


// EXERCISE FIZZ BUZZ
// const numsList = Array.from(Array(51).keys())
// const fizzOrBuzz = numsList.map(function(item, idx) {
//     if (item % 3 == 0) {
//         return 'Fizz'
//     }
//     else if (item % 3 != 0 && item % 5 == 0) {
//         return 'Buzz'
//     } else {
//         return item
//     }
// })

// console.log(fizzOrBuzz)

// const fizzAndBuzz = numsList.map(function(item, idx) {
//     if (item % 3 == 0) {
//         if (item % 3 == 0 && item % 5 == 0) {
//             return 'FizzBuzz'
//         } else {
//             return 'Fizz'
//         }
//     }
//     else if (item % 5 == 0) {
//         return 'Buzz'
//     }
//     else {
//         return item
//     }
// })

// console.log(fizzAndBuzz)

// FANCY WAY TO DO FIZZ BUZZ
// for(let i=0;i<100;)console.log((++i%3?'':'fizz')+(i%5?'':'buzz')||i)



// EXERCISE VENDING MACHINE 

// const vendingMachine = (initialMoney, cost) => {
//     let quarters = 0;
//     netMoney = (initialMoney - cost) * 100
//     while (netMoney > 0) {
//         netMoney -= 25;
//         quarters++;
//     }
//     return Math.floor(quarters);
// }

// console.log(vendingMachine(10,4.5));


// EXERCISE BILLS RETURNED

// const billsReturned = (initialBill, cost) => {
//     initialBill -= cost;
//     initialBill = Math.floor(initialBill);
//     let totalBills= 0;
//     while (initialBill > 0) {
//         initialBill -= 1;
//         totalBills++;
//     }
//     return totalBills;
// }
// console.log(billsReturned(100, 27.38))

// Can't figure this one out
// let fee = [100, 27.38]
// const billsReturnedArr = fee.reduce((initialBill, cost) => {
//     let totalBills= 0;
//     initialBill -= cost;
//     initialBill = Math.floor(initialBill);
//     while (initialBill > 0) {
//         initialBill -= 1;
//         totalBills++;
//     }
//     return totalBills;
// }, 0)

// console.log(billsReturnedArr);