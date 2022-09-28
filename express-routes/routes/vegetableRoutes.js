// Load express
const express = require('express')

// Load vegetable data
// const vegetables = require('../models/vegetables')

const Vegetable = require('../models/vegetables')
const seed = require('../models/seed')


// router object setup
const router = express.Router()

const { 
    findAllVegetables, 
    showNewVegetable,
    deleteVegetable,
    updateVegetable,
    createsVegetable,
    editVegetable,
    showUniqueVegetable,
    seedVegetable,
    clearVegetables, } = require('../controllers/vegetableController')

// index for vegetables
router.get('/', findAllVegetables)

// new for vegetables
router.get('/new', showNewVegetable)

// delete for vegetables
router.delete('/:id', deleteVegetable)

// update for vegetables
router.put('/:id', updateVegetable)

// create for vegetables
router.post('/', createsVegetable)

// edit for vegetables
router.get('/:id/edit', editVegetable)

// seed vegetable data
router.get('/seed', seedVegetable)

// clear vegetables
router.get('/clear', clearVegetables)

// show for vegetables
router.get('/:id', showUniqueVegetable)

module.exports = router