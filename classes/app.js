// class Vehicle {
//     // vin: 'X123Y'
//     // make: 'Boeing'

//     // constructor() {}

//     constructor(vinParam, makeParam, modelParam) {
//         this.vin = vinParam;
//         this.make = makeParam;
//         this.model = modelParam;
//         this.running = false;
//         // console.log('creating a new instance of Vehicle');
//     }

//     goVroom() {
//         console.log('vroom!');
//     }
    
//     start() {
//         this.running = true;
//         console.log('running');
//     }
//     stop() {
//         this.running = false;
//         console.log('stopped...');
//     }

//     toString() {
//         return 'Vehicle (' + this.vin + ') is a ' + this.make + ' model ' + this.model;
//     }
    
// }

// const toyota = new Vehicle('X123Y', 'Boeing', 'A300');
// const tesla = new Vehicle();

// console.log(toyota, tesla);
// toyota.goVroom();
// toyota.start();
// toyota.stop();
// console.log();
// tesla.goVroom();
// tesla.start();
// tesla.stop();
// console.log(tesla.toString());
// console.log(toyota.toString());


// let arr = [1, 2, 3]
// arr.forEach() // prototype method - can only be called on by instances (objects created by class)

// let arr2 = new Array(1, 2, 3)
// console.log(arr2)

// arr2.forEach((x) => console.log(x))

// console.log(Math.random()) // example of static method - cannot be called by instances


// EXERCISES CAT AND PIRATE CLASS

// class Cat {
//     color = 'orange';
//     age = 12;
//     hungry = false;
//     constructor(nameParam) {
//         this.name = nameParam;
//     }
//     meow() {
//         console.log('Meow!');
//     }
//     giveFood(hungry) {
//         if (hungry) {
//             console.log('Giving food now...');
//         } else {
//             console.log('No food.');
//         }
//     }
//     toString() {
//         return  this.name + ' is ' + this.age + ' years old and is of ' + 
//         this.color + ' color';
//     }
// }

// const cat1 = new Cat('Oscar');
// const cat2 = new Cat('Sandy');

// console.log(cat1)
// cat1.meow()
// cat1.giveFood(true)
// console.log(cat1.toString())

// class Pirate {
//     constructor(nameParam, ageParam, bountyParam) {
//         this.name = nameParam;
//         this.bounty = bountyParam;
//         this.age = ageParam;
//     }
//     yell() {
//         console.log('Ahoy!');
//     }
//     setSail() {
//         console.log('Set sail!');
//     }
//     toString() {
//         return 'My name is ' + this.name + ' and I am ' + this.age + 
//         ' years old and my bouny is ' + this.bounty;
//     }
// }

// const jollyRoger = [new Pirate('Edward Teach', 34, 67000), new Pirate('Bartholomew Roberts', 26, 3000), new Pirate('William Kidd', 47, 50000)]

// const blackPearl = [new Pirate('Anne Bonny', 45, 45000), new Pirate('Mary Read', 32, 55000), new Pirate('Henry Every', 37, 48000)]

// for (let i = 0; i < jollyRoger.length; i++) {
//     console.log(jollyRoger[i].toString());
//     jollyRoger[i].yell();
//     jollyRoger[i].setSail();
// }

// console.log();

// for (let j = 0; j < blackPearl.length; j++) {
//     console.log(blackPearl[j].toString());
//     blackPearl[j].yell();
//     blackPearl[j].setSail();
// }


// EXTRA EXERCISE: CREATING 100 CARS

// let freighter = []
// for(let k = 0; k < 100; k++) {
//     freighter.push(new Vehicle());
// }
// console.log(freighter.length)
// console.log(freighter[0].toString())


// EXERCISE STATIC METHOD AND PROPERTIES
class Governor {
  
    static politicalParty = 'Democrat';
    static age = 49;
    static greet() {
        console.log('Hello my fellow citizens!');
    }
}

// console.log(Governor.age);
// console.log(Governor.politicalParty);
// Governor.greet();


class Person {
    constructor(nameParam, ageParam, occupation) {
        this.name = nameParam;
        this.age = ageParam;
        this.occupation = occupation;
    }

    run() {
        console.log('I am running!');
    }
    eat() {
        console.log('I am eating!');
    } 
    goBathroom() {
        console.log('Going to bathroom!');
    }
    toString() {
        return 'My name is ' + this.name + ' and I am a ' + this.age +
        ' year old ' + this.occupation;
    }
}

class PostalWorker extends Person {
    deliverMail () {
        console.log('Delivering mail!');
    }
    organizingMail () {
        console.log('Organizing mail!');
    }
}

class Chef extends Person {
    ratingFood () {
        console.log('Rating food')
    }
    cooking () {
        console.log('Cooking food!');
    }
}

const chefRamsay = new Chef('Ramsay', 48, 'chef');
const chefDaniels = new Chef('Daniels', 27, 'chef');

const mailPersonA = new PostalWorker('Dave', 21, 'postal worker');
const mailPersonB = new PostalWorker('Sam', 25, 'postal worker');

// console.log(chefRamsay.toString()); // parent class method
// chefRamsay.cooking(); // chef class method
// chefRamsay.goBathroom(); // parent class method

// console.log();
// console.log(chefDaniels.toString()); // parent class method
// chefDaniels.ratingFood(); // chef class method
// chefDaniels.eat(); // parent class method

// console.log();
// console.log(mailPersonA.toString()); // parent class method
// mailPersonA.deliverMail(); // postal worker class method 
// mailPersonA.run(); // parent class method

// console.log();
// console.log(mailPersonB.toString()); // parent class method
// mailPersonB.organizingMail(); // postal worker class method 

// BONUS EXERCISE
// class BankAccount {
//     // ownerName: 'Usman',
//     // balance: 1000000,
//     // acctNum: 485687932
//     constructor(accName, balance) {
//       this.accName = accName;
//       this.balance = balance;
//       this.acctNum = Math.floor(Math.random() * 1000)
//     } 

//     deposit(depositedAmount) {
//       this.balance += depositedAmount
//       console.log('current balance after depositing ' + depositedAmount + " is: " + this.balance)
//     }

//     withdraw(withdrawnAmount) {
//       this.balance -= withdrawnAmount
//       console.log('current balance after withdrawing ' + withdrawnAmount + " is: " + this.balance)
//     }

//   }

//   class CheckingAccount extends BankAccount {
//     constructor(accName, balance, overdraftEnabled = true) {
//       super(accName, balance) // calls the constructor from parent class (Bank Account)
//       this.overdraftEnabled = overdraftEnabled;
//     }

//     withdraw(amount) { 
//       if (amount > this.balance) {

//         if (this.overdraftEnabled) {

//           let overdraftFee = 20
//           this.balance -= (amount + overdraftFee)
//           console.log('this transaction overdrafts your balance :(')

//         } else {
//           console.log('you cannot withdraw more than you have')
//         }

//       } else {
//         this.balance -= amount
//         console.log('current balance after withdrawing ' + amount + " is: " + this.balance)
//       }
//     }
//   }

//   class SavingsAccount extends BankAccount {
//     withdraw() {
//       console.log('you cannot withdraw from this savings account :(')
//     }
//   }

//   const lucas = new BankAccount('Lucas', 1000000)
//   const usman = new CheckingAccount('Usman', 1000000)
//   const stephin = new SavingsAccount('Stephin', 5)

//   // console.log(lucas)
//   // console.log(usman)
//   // console.log(stephin)

//   lucas.withdraw(1000)
//   usman.withdraw(2000000)
//   stephin.withdraw(4) 


// Singleton (do some research on this)
// method chaining (do some research)

// Singleton (do some research on this)
// class Car {
//     constructor (maker, serialNumber) {
//       this.serialNumber = serialNumber;
//       this.maker = maker
//     }
//     drive () {
//       console.log('Vroom Vroom');
//     }
//   }
//   class Factory {
//     constructor(company) {
//       this.company = company;
//       this.cars = [];
//     }
//     generateCar () {
//       const newCar = new Car(this.company, this.cars.length);
//       this.cars.push(newCar);
//       return this
//     }
//     findCar(index) {
//       return this.cars[index];
//     }
//   }
//   // only need one instance (Singleton)
//   const tesla = new Factory('Tesla')
  
