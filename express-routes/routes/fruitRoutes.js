// Load express
const express = require('express')

// INDUCES
// Index, New, Delete, Update, Create, Edit, Show

// Load our fruits data
// const fruits = require('../models/fruits')

// Loading our Model of fruit
const Fruit = require('../models/fruit')

// Create a special router object for our routes
const router = express.Router()

// setup "root" routes
// router.get('/', (req, res) => {
//     res.send('<h1>Hello World!</h1>')
// })

// example of index action
router.get('/', (req, res) => {
    // res.send(fruits);
    // res.render('fruits/Index', {fruits: fruits})

    // Find takes two arguments:
    //  1st: an object with our query (to filter our data and find exactly what we need)
    //  2nd: callback (with an error object and the found data)
    Fruit.find({}, (err, foundFruit) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('fruits/Index', {fruits: foundFruit})
        }
    })
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

    // Create has two arguments:
    //  1st: the data we want to send
    //  2nd: callback function 
    Fruit.create(req.body, (err, createdFruit) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect('/fruits')
        }
    })

    // fruits.push(req.body)
    // console.log(fruits)
    // res.redirect('/fruits')
})


// example of edit action
router.get('/:index/edit', (req, res) => {
    res.send('<form>Edit fruit</form>')
})

// example of show action
router.get('/:id', (req, res) => {
    // res.send(fruits[req.params.index]);
    // res.render('fruits/Show', {
    //     fruit: fruits[req.params.index]
    // })

    // findById accepts two arguments:
    //  1st: the id of the document in our database
    //  2nd: callback (with error object and found documents)
    Fruit.findById(req.params.id, (err, foundFruit) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('fruits/Show', { fruit: foundFruit })
        }
    })
    
})



module.exports = router