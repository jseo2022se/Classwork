const Vegetable = require('../models/vegetables')
const seed = require('../models/seed')

// index of vegetables
const findAllVegetables = (req, res) => {
    // res.render('vegetables/Index', {vegetables: vegetables})

    Vegetable.find({}, (err, foundVegetable) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('vegetables/Index', {vegetables: foundVegetable})
        }
    })
}

// new vegetable
const showNewVegetable = (req, res) => {
    // res.send('<form>Create fruit</form>')
    res.render('vegetables/New')
}

// delete vegetable
const deleteVegetable = (req, res) => {
    Vegetable.findByIdAndDelete(req.params.id, (err, deleteVegetable) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect('/vegetables')
        }
    })
}

// update vegetable
const updateVegetable = (req, res) => {
    Vegetable.findByIdAndUpdate(req.params.id, req.body, (err, foundVegetable) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect(`/vegetables/${req.params.id}`)
        }
    }) 
}

// create vegetable
const createsVegetable = (req, res) => {
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
}

// edit vegetable
const editVegetable = (req, res) => {
    Vegetable.findById(req.params.id, (err, foundVegetable) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('vegetables/Edit', { vegetable: foundVegetable})
        }
    })
}

// show vegetable
const showUniqueVegetable = (req, res) => {
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
}

// seed vegetable data
const seedVegetable = (req, res) => {
    Vegetable.deleteMany({}, (err, deletedVegetables) => {
        if (err) {
            res.status(400).json(err)
        } else {
            Vegetable.create(seed.vegetables, (err, createdVegetables) => {
                if (err) {
                    res.status(400).json(err)
                } else {
                    res.status(200).redirect('/vegetables')
                }
            })
        }
    })
}

// clear vegetables
const clearVegetables = (req, res) => {
    Vegetable.deleteMany({}, (err, deletedVegetables) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect('/vegetables')
        }
    })
}

module.exports = {
    findAllVegetables,
    showNewVegetable,
    deleteVegetable,
    updateVegetable,
    createsVegetable,
    editVegetable,
    showUniqueVegetable,
    seedVegetable,
    clearVegetables
}