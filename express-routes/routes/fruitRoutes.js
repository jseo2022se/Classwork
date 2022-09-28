// Load express
const express = require('express');
// const { find } = require('../models/fruit');

// INDUCES
// Index, New, Delete, Update, Create, Edit, Show

// Load our fruits data
// const fruits = require('../models/fruits')

// Loading our Model of fruit
// const Fruit = require('../models/fruit')

// Bring in seed data
// const seed = require('../models/seed')

const { 
    findAllFruits, 
    showNewView, 
    createNewFruit, 
    seedStarterData,
    showOneFruit,
    showEditView,
    showUpdateView,
    deleteOneFruit,
    clearData} = require('../controllers/fruitController')

// Create a special router object for our routes
const router = express.Router()

// setup "root" routes
// router.get('/', (req, res) => {
//     res.send('<h1>Hello World!</h1>')
// })

// example of index action
router.get('/', findAllFruits);

// example of new action
router.get('/new', showNewView)

// example of delete action
router.delete('/:id', deleteOneFruit)

// example of update action
router.put('/:id', showUpdateView)

// example of create action
router.post('/', createNewFruit)

// example of edit action
router.get('/:id/edit', showEditView)

// Setup "seed" route
router.get('/seed', seedStarterData)

// Clear route to delete all docs.
router.get('/clear', clearData)

// example of show action
router.get('/:id', showOneFruit)

// // Setup "seed" route
// router.post('/seed', seedStarterData)

// // Clear route to delete all docs.
// router.get('/clear', clearData)

module.exports = router