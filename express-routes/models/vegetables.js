// const vegetables = [
//     {
//         name: 'broccoli',
//         color: 'green',
//     },
//     {
//         name: 'kale',
//         color: 'green',
//     },
//     {
//         name: 'corn',
//         color: 'yellow',
//     }
// ];

// module.exports = vegetables

const mongoose = require('mongoose')

const Schema = mongoose.Schema

const vegetableSchema = new Schema({
    name: { type: String, required: true },
    color: { type: String, required: true }
})

const Vegetable = mongoose.model('Vegetable', vegetableSchema)

module.exports = Vegetable