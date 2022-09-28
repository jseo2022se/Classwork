// Loading express
const express = require('express')
const methodOverride = require('method-override')

// Bring in mongoConfig function
const mongoConfig = require('./config')

require('dotenv').config()


// Creates express app
const app = express()


// Bring in our packaged routes
const fruitRoutes = require('./routes/fruitRoutes')
const vegetableRoutes = require('./routes/vegetableRoutes')
const meatRoutes = require('./routes/meatRoutes')


// Identify our port
const port = process.env.PORT


// setup our view engine
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())


// Middleware
app.use(express.urlencoded({extended:false}))
app.use(express.static("public"))
app.use(express.json())
app.use(methodOverride("_method"))


// example: ?name=kiwi&color=green&readyToEat=false

app.use('/fruits',  fruitRoutes)
app.use('/vegetables',  vegetableRoutes)
app.use('/meats',  meatRoutes)


// Listen to port
app.listen(port, () => { console.log('Listening on port: ', port) })

// Connect to DB
mongoConfig()

