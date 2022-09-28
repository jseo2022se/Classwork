// Load express
const express = require('express')
const seed = require('../models/seed')

// Load meat data
// const meat = require('../models/meat')

// const Meat = require('../models/meat')

const { 
    findAllMeats, 
    showNewMeat, 
    deleteMeat, 
    updateMeat, 
    createMeat, 
    editMeat, 
    showUniqueMeat, 
    seedMeatData, 
    clearMeats} = require('../controllers/meatController')

// Create router object
const router = express.Router()

// meat index
router.get('/', findAllMeats)

// meat New
router.get('/new', showNewMeat)

// delete action 
router.delete('/:id', deleteMeat)

// update action
router.put('/:id', updateMeat)

// example of create action
router.post('/', createMeat)

// edit action
router.get('/:id/edit', editMeat)

// seed
router.get('/seed', seedMeatData)

// clear
router.get('/clear', clearMeats)

// meat show
router.get('/:id', showUniqueMeat);



module.exports = router