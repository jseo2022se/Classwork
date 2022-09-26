// Load express
const express = require('express')

// Load vegetable data
const vegetables = require('../models/vegetables')

// router object setup
const router = express.Router()

// index for vegetables
router.get('/', (req, res) => {
    res.render('vegetables/Index', {vegetables: vegetables})
});

// new for vegetables
router.get('/new', (req, res) => {
    // res.send('<form>Create fruit</form>')
    res.render('vegetables/New')
})

// create for vegetables
router.post('/', (req, res) => {
    vegetables.push(req.body)
    console.log(vegetables)
    res.redirect('/vegetables')
})

// show for vegetables
router.get('/:index', (req, res) => {
    res.render('vegetables/Show', {
        vegetable: vegetables[req.params.index]
    })
});

module.exports = router