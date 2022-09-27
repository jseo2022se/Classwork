// Load express
const express = require('express')

// Load meat data
// const meat = require('../models/meat')

const Meat = require('../models/meat')

// Create router object
const router = express.Router()

// meat index
router.get('/', (req, res) => {
    // res.render('meats/Index', {meat: meat});
    Meat.find({}, (err, foundMeat) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('meats/Index', {meat: foundMeat})
        }
    })
});

// meat New
router.get('/new', (req, res) => {
    // res.send('<form>Create fruit</form>')
    res.render('meats/New')
})

// example of create action
router.post('/', (req, res) => {
    // console.log(req.body)
    // meat.push(req.body)
    // console.log(meat)
    // res.redirect('/meats')
    Meat.create(req.body, (err, createdMeat) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect('/meats')
        }
    })
})


// meat show
router.get('/:id', (req, res) => {
    // res.send(fruits[req.params.index]);
    // res.render('meats/Show', {
    //     meats: meat[req.params.index]
    // })
    
    Meat.findById(req.params.id, (err, foundMeat) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('meats/Show', { meats: foundMeat})
        }
    })
});


module.exports = router