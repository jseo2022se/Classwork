const Fruit = require('../models/fruit')
const seed = require('../models/seed')

// ROUTE  GET /fruits
const findAllFruits  = (req, res) => {
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
}

// ROUTE  GET /fruits/new (new
const showNewView = (req, res) => {
    // res.send('<form>Create fruit</form>')
    res.render('fruits/New')
}

const createNewFruit = (req, res) => {
    // console.log(req.body)
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
}

const seedStarterData = (req, res) => {
    // Delete all remaining documents (if there are any)

    Fruit.deleteMany({}, (err, deletedFruits) => {
        if (err) {
            res.status(400).json(err)
        } else {
            console.log('deleted data.')
            console.log(seed.fruits)
            // Data has been successfully deleted
            // Now use seed data to repopulate the database
            Fruit.create(seed.fruits, (err, createdFruit) => {
                if (err) {
                    res.status(400).json(err)
                } else {
                    res.status(200).redirect('/fruits')
                }
            })
        }
    })
}

const clearData = (req, res) => {
    Fruit.deleteMany({}, (err, deletesAll) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect('/fruits')
        }
    })
}

const showOneFruit = (req, res) => {
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
    
}

const showEditView = (req, res) => {
   
    Fruit.findById(req.params.id, (err, foundFruit) => {
        if (err) {
            res.status(400).json(err)
        } else {
           
            res.status(200).render('fruits/Edit', { fruit: foundFruit})
        }
    })
   
}

const showUpdateView = (req, res) => {
    // res.send('Updating a fruit at index (in database)')

    // console.log(req.body)

    if (req.body.readyToEat === 'on') {
        req.body.readyToEat = true
    } else {
        req.body.readyToEat = false
    }

    console.log(req.body)
    // findByIdAndUpdate takes 4 arguments: 
    //  1st: the id 
    //  2nd: new data we want to use to update the old document
    //  3rd (optional): an options object, which looks like this: { new: true }
    //  4th: callback function (with error object and foundFruit or updatedFruit)
    Fruit.findByIdAndUpdate(req.params.id, req.body, (err, foundFruit) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect(`/fruits/${req.params.id}`)
        }
    })

}

const deleteOneFruit = (req, res) => {
    // console.log('in delete route')
    // res.send('Deleting a fruit at index (in database) ')

    Fruit.findByIdAndDelete(req.params.id, (err, deleteFruit) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect('/fruits')
        }
    })
}

module.exports = {
    findAllFruits,
    showNewView,
    createNewFruit,
    seedStarterData,
    showOneFruit,
    showEditView,
    showUpdateView,
    deleteOneFruit,
    clearData
}