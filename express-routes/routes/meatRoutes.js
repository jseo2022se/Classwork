// Load express
const express = require('express')

// Load meat data
const meat = require('../models/meat')

// Create router object
const router = express.Router()

// meat index
router.get('/', (req, res) => {
    res.render('meats/Index', {meat: meat});
});

// meat New
router.get('/new', (req, res) => {
    // res.send('<form>Create fruit</form>')
    res.render('meats/New')
})

// example of create action
router.post('/', (req, res) => {
    console.log(req.body)
    meat.push(req.body)
    console.log(meat)
    res.redirect('/meats')
})


// meat show
router.get('/:index', (req, res) => {
    // res.send(fruits[req.params.index]);
    res.render('meats/Show', {
        meats: meat[req.params.index]
    })
});


module.exports = router