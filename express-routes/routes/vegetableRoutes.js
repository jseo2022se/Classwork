// Load express
const express = require('express')

// Load vegetable data
// const vegetables = require('../models/vegetables')

const Vegetable = require('../models/vegetables')

// router object setup
const router = express.Router()

// index for vegetables
router.get('/', (req, res) => {
    // res.render('vegetables/Index', {vegetables: vegetables})

    Vegetable.find({}, (err, foundVegetable) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('vegetables/Index', {vegetables: foundVegetable})
        }
    })
});

// new for vegetables
router.get('/new', (req, res) => {
    // res.send('<form>Create fruit</form>')
    res.render('vegetables/New')
})

// create for vegetables
router.post('/', (req, res) => {
    // vegetables.push(req.body)
    // console.log(vegetables)
    // res.redirect('/vegetables')
    Vegetable.create(req.body, (err, createdVegetable) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect('/vegetables')
        }
    })
})

// show for vegetables
router.get('/:id', (req, res) => {
    // res.render('vegetables/Show', {
    //     vegetable: vegetables[req.params.index]
    // })
    Vegetable.findById(req.params.id, (err, foundVegetable) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('vegetables/Show', { vegetable: foundVegetable})
        }
    })
});

module.exports = router