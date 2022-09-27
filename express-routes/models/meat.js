// const meat = [
//     {
//         name: 'hamburger',
//         type: 'rare'
//     },
//     {
//         name: 'bacon',
//         type: 'crispy',
//     },
//     {
//         name: 'chicken',
//         type: 'wing',
//     }
// ];

// module.exports = meat

const mongoose = require('mongoose')

const Schema = mongoose.Schema

const meatSchema = new Schema ({
    name: { type: String, required: true },
    type: { type: String, required: true }
})

const Meat = mongoose.model('Meat', meatSchema)

module.exports = Meat