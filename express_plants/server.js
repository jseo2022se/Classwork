// Load express
const express = require('express')
const port = 3000

// Create the app
const app = express()

const plants = ['Monstera Deliciosa', 'Corpse Flower', 'Elephant-Foot Yam', "Witches' Butter"]


// Define routes (when ready)

app.get('/plants', (req, res) => {
    res.send(`
    <h1>Plants are awesome!</h1>
    <img src="https://static.boredpanda.com/blog/wp-content/uuuploads/plant-sculptures-mosaicultures-internationales-de-montreal/plant-sculptures-mosaicultures-internationales-de-montreal-14.jpg" >
  `);
})

app.get('/:index', (req, res) => {
    if(plants[req.params.index]) {
        res.send(plants[req.params.index])
    } else {
        res.send('Cannot find anything at this index ' + req.params.index)
    }
})

// Example with multiple params
app.get('/hello/:firstname/:lastname', (req, res) => {
    console.log(req.params)
    res.send('hello ' + req.params.firstname + ' ' + req.params.lastname)
})

// Example with req.queries
app.get('/howdy/:firstName', (req, res) => {
    console.log(req.params, ': parameters')
    console.log(req.query, ': queries')
    res.send('testing')
})

// Listen to port 3000
app.listen(port, () => {
    console.log('Listening on port', port)
})