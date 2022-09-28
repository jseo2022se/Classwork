const Meat = require('../models/meat')
const seed = require('../models/seed')

// index
const findAllMeats = (req, res) => {
    // res.render('meats/Index', {meat: meat});
    Meat.find({}, (err, foundMeat) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('meats/Index', {meat: foundMeat})
        }
    })
}

// new
const showNewMeat = (req, res) => {
    // res.send('<form>Create fruit</form>')
    res.render('meats/New')
}

// delete
const deleteMeat = (req, res) => {
    Meat.findByIdAndDelete(req.params.id, (err, deleteMeat) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect('/meats')
        }
    })
}

// update
const updateMeat = (req, res) => {
    Meat.findByIdAndUpdate(req.params.id, req.body, (err, foundMeat) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect(`/meats/${req.params.id}`)
        }
    })
}


// create
const createMeat = (req, res) => {
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
}

// edit
const editMeat = (req, res) => {
    Meat.findById(req.params.id, (err, foundMeat) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('meats/Edit', {meats: foundMeat})
        }
    })
}

// show
const showUniqueMeat = (req, res) => {
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
}

// seed
const seedMeatData = (req, res) => {
    // Delete all remaining documents (if there are any)

    Meat.deleteMany({}, (err, deletedMeats) => {
        if (err) {
            res.status(400).json(err)
        } else {
            console.log('deleted data.')
            console.log(seed.meats)
            // Data has been successfully deleted
            // Now use seed data to repopulate the database
            Meat.create(seed.meats, (err, createdMeat) => {
                if (err) {
                    res.status(400).json(err)
                } else {
                    res.status(200).redirect('/meats')
                }
            })
        }
    })
}

const clearMeats = (req, res) => {
    // Delete all remaining documents (if there are any)

    Meat.deleteMany({}, (err, deletedMeats) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect('/meats')
        }
    })
}


module.exports = {
    findAllMeats,
    showNewMeat,
    deleteMeat,
    updateMeat,
    createMeat,
    editMeat,
    showUniqueMeat,
    seedMeatData,
    clearMeats
}