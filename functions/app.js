// AVOID DRY (DON'T REPEAT YOURSELF)!

let myName = 'Jeong'

// function declaration / definition
// function declarations can be invoked above or below  the declarations; also applies to var keywords
function sayHello(name) {
    return 'Hello ' + name + '!';
}

sayHello(myName); // 'Hello Jeong!'

// function expression
// function expressions can't be invoked before; only after
const sayHi = function() {
    return 'Hi!';
}

sayHi(); // 'Hi!'

// arrow function
const sayHey = () => 'Hey';

sayHey(); // 'Hey'

// console.log(sayHello(myName));
// console.log(sayHi());
// console.log(sayHey(myName));

function add(num1, num2, num3=0, num4=0) { // () list of parameters
    return num1 + num2;
}

// console.log(add(2, 3, 4, 5)); // () list of arguments
// console.log(add(5, 5));
// console.log(add(10, 1));
// console.log(add(3, 8));
// console.log(add('Bob', ' The Builder'));

// EXERCISE 1: WRITE A FUNCTION DECLARATION

function computeArea (width, height) {
    let area = width * height;
    return 'The area of a rectangle with a width of ' + width + ' and a height of ' +
            height + ' is ' + area + ' square units.';
}
// console.log(computeArea(4,5));

// EXERCISE 2: WRITE A FUNCTION EXPRESSION

const planetHasWater = function (planet) {
    planetCase = planet.toLowerCase();
    if (planetCase == 'earth' || planetCase == 'mars') {
        return true;
    } else {
        return false;
    }
}

// console.log(planetHasWater('Venus'));

// EXTRA EXERCISE: CREATE ARROW FUNCTION VERSION OF BOTH 1 AND 2

const computeArea2 = (width, height) => 'The area of a rectangle with a width of ' + width + ' and a height of ' +
height + ' is ' + width*height + ' square units.';

// console.log(computeArea2(4,5));

const planetCheck = (planet) => {
    planetCase = planet.toLowerCase();
    if (planetCase == 'earth' || planetCase == 'mars') {
        return true;
    } else {
        return false;
    }
};

// console.log(planetCheck('MARS'));

