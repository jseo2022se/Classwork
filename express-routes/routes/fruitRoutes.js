// Load express
const express = require('express')

// INDUCES
// Index, New, Delete, Update, Create, Edit, Show

// Load our fruits data
const fruits = require('../models/fruits')

// Create a special router object for our routes
const router = express.Router()

// setup "root" routes
// router.get('/', (req, res) => {
//     res.send('<h1>Hello World!</h1>')
// })

// example of index action
router.get('/', (req, res) => {
    // res.send(fruits);
    res.render('fruits/Index', {fruits: fruits})
});

// example of new action
router.get('/new', (req, res) => {
    // res.send('<form>Create fruit</form>')
    res.render('fruits/New')
})

// example of destry action
router.delete('/:index', (req, res) => {
    res.send('Deleting a fruit at index (in database) ')
})

// example of update action
router.put('/:index', (req, res) => {
    res.send('Updating a fruit at index (in database)')
})

// example of create action
router.post('/', (req, res) => {
    console.log(req.body)
    if (req.body.readyToEat === 'on') {
        req.body.readyToEat = true
    } else {
        req.body.readyToEat = false
    }
    fruits.push(req.body)
    console.log(fruits)
    res.redirect('/fruits')
})


// example of edit action
router.get('/:index/edit', (req, res) => {
    res.send('<form>Edit fruit</form>')
})

// example of show action
router.get('/:index', (req, res) => {
    // res.send(fruits[req.params.index]);
    res.render('fruits/Show', {
        fruit: fruits[req.params.index]
    })
});



module.exports = router