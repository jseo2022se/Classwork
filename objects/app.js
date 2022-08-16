// OOP = Object Oriented Programming

//           0        1         2
let arr = ['kiwi', 'banana', 'apple']

// object literal
const cat = {
    name: 'Mr. Bean', // 'name': 'Mr. Bean' also works
    fur: 'grey, black and white',
    legs: 4,
    age: 3,
    favoriteThings: ['yarn', 'string', 'food'],
    canSpeakFrench: false,
    meow: function() {  // methods
        console.log('meow')
    },
    purr: () => {
        console.log('purr')
    },
    talk(speech) {
        console.log(speech)
    }
}

// access a property with dot notation
// console.log(cat.name)
// console.log(cat.fur)
// console.log(cat.legs)

// we can also access properties with brackets
// console.log(cat['name'])

// let propName = 'fur'
// console.log(cat[propName])

cat.breed = 'calico'

// console.log(cat)

cat.temperament = 'mild'

// console.log(cat)

cat.temperament = 'angry'

// cat = 'nothing'

// console.log(cat)

// if (cat.canSpeakFrench === true) {
//     console.log('oui')
// } else {
//     console.log('non')
// }

// for (let i = 0; i < cat.legs; i++) {
//     console.log('LEG')
// }

// console.log('Does my cat have legs?')
// if (cat.legs) { // if cat.science -> undefined -> skips to else 
//     console.log('yes')
// } else {
//     console.log('no')
// }

/// function ... how do we run it again?
// cat.meow()    
// cat.purr()
// cat.talk('get up!')


// // Extra Things
// for (let item of arr) {

// }

// for (let prop in cat) { // prop represent ... fur, name, legs, age...
//     console.log('Key: ', prop)
//     console.log('value: ', cat[prop])
//     console.log()
// }


// PRACTICE

const food = {
    cuisine: 'korean',
    goodTaste: true,
    numOfDishes: 3,
    cook(dish) {
        console.log('Cooking ' + dish)
    },
    temperatureIsHot: (measurement) => {
        if (measurement) {
            console.log('Hot')
        } else {
            console.log('Cold')
        }
    }
}

// for (let keys in food) {
//     console.log('Keys: ', keys)
//     console.log('Values: ', food[keys])
//     console.log()   
// }
// food.cook('kimchi pancake')
// food.temperatureIsHot(false)

const leagueOfLegends = {
    type: 'moba',
    multiplayer: true,
    numOfPlayers: 10,
    amWinning(answer) {
        if(answer) {
            console.log('Still winnable.')
        } else {
            console.log('/ff')
        }
    },
    reportPlayer: (playerName, severalTimes) => {
        console.log('Reporting ' + playerName + ' ' + severalTimes + ' times')
    }
}

// for (let keys in leagueOfLegends) {
//     console.log('Keys: ', keys)
//     console.log('Values: ', leagueOfLegends[keys])
//     console.log()   
// }
// leagueOfLegends.amWinning(false)
// leagueOfLegends.reportPlayer('friend123', 10)


// EXERCISES CHARACTER COUNT

// const characterCount = (word) => {
//     const characters = {}
//     let count, ch
//     for (let i = 0; i < word.length; i++) {
//         ch = word[i]
//         count = characters[ch]
//         if (!(count)) {
//             characters[ch] = 1
//         } else {
//             characters[ch] = count + 1
//         }
//     }
//     return characters
// }


// const characterCount = (word) => {
//     const characters = {};
//     let count, ch;
//     for (let i = 0; i < word.length; i++) {
//         // ch = word[i]
//         // count = characters[ch]
//         if (!(characters.word[i].count)) {
//             characters.word[i].count = 1;
//         } else {
//             characters.word[i].count += 1
//         }
//     }
//     return characters
// }
// console.log(characterCount('hello'))

// EXERCISE DENOMINATIONS #2 (WORKING ON IT ...)


// const denomination = (totalMoney, cost) => {
//     netSum = Math.floor(totalMoney - cost);
//     netSum *= 10;
//     const bills = {};

//     while (netSum !== 0) {
//         if (netSum >= 10000) {
//         }
//     }
//     // for (let i = 0; i < word.length; i++) {
//     //     ch = word[i]
//     //     count = characters[ch]
//     //     if (!(count)) {
//     //         characters[ch] = 1
//     //     } else {
//     //         characters[ch] = count + 1
//     //     }
//     // }
//     return bills
// }


// const cat = {
//     name: 'Mr. Bean',
//     legs: 4,
//     type: 'Feline',
//     friends: [
//         {
//             name: 'Georgey',
//             legs: 4,
//             type: 'Feline'
//         }, 
//         {
//             name: 'Snake',   // cat.friends[1].name    
//             legs: 3,         // cat['friends'][1]['name']
//             type: 'Feline'
//         }, 
//         {
//             name: 'Rixio', //  cat.friends[2].name
//             legs: 5,       //  cat['friends'][2]['name']
//             buddies: [
//                 {
//                     name: 'Arthur',
//                     fins: 5,   //   cat.friends[2].buddies[0].fins    ->   5
//                     type: 'fish' // cat['friends'][2]['buddies'][0]
//                 },
//                 {  
//                     name: 'Hannibal',
//                     type: 'Platypus' //  cat.friends[2].buddies[1].type[4]
//                 }
//             ]
//         }
//     ]
// }
// // How do access nested values???
// // 1. How do we access the string 'Snake'?
// // console.log(cat.friends[1].name) 
// // 2. How do we access the string 'Rixio'?
// // console.log(cat.friends[2].name)
// // 3. How do we access the fins property?
// // console.log(cat.friends[2].buddies[0].fins)
// cat.friends
// cat['friends']
// console.log(cat.friends[2].buddies[1].type[4])
// console.log(cat.friends[2].buddies[1][1])
// console.log(cat.friends[2].buddies[1].type.charAt(4))


// LAB ASSIGNMENT


const radio = {
    stations: [
        {
            name: 'Pop & Rap',
            songs: [
                {
                    title: 'Godzilla',
                    artist: 'Eminem'
                },
                {
                    title: 'Umbrella',
                    artist: 'Rihanna'
                },
                {
                    title: 'Hotline Bling',
                    artist: 'Drake'
                },
                {
                    title: "Don't Blame Me",
                    artist: 'Taylor Swift'
                }
            ]
        },
        {
            name: 'Classical Music',
            songs: [
                {
                    title: 'The Magic Flute',
                    artist: 'Wolfgang Amadeus Mozart'
                },
                {
                    title: 'Für Elise',
                    artist: 'Ludwig van Beethoven'
                },
                {
                    title: 'Danse macabre',
                    artist: 'Camille Saint-Saëns'
                },
                {
                    title: 'Clair de lune',
                    artist: 'Claude Debussy'
                }
            ]
        },
        {
            name: 'Jazz Music',
            songs: [
                {
                    title: 'The Girl from Ipanema',
                    artist: 'Astrud Gilberto and Stan Getz'
                },
                {
                    title: 'So What',
                    artist: 'Miles Davis'
                },
                {
                    title: 'Fly Me to the Moon',
                    artist: 'Frank Sinatra'
                },
                {
                    title: 'Take Five',
                    artist: 'Dave Brubeck'
                }
            ]
        }
    ],
    stationSong: (number1, number2) => {
        stationNumber = Math.floor(Math.random() * number1);
        songRandom = Math.floor(Math.random() * number2);
        return "Now playing: " + radio.stations[stationNumber].songs[songRandom].title +
        " by " + radio.stations[stationNumber].songs[songRandom].artist;
    }
}
// console.log(radio)
console.log(radio.stationSong(3,4))