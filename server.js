const express = require('express')
const app = express()
const personRoute = require('./routes/persons')
const dataRoute = require('./routes/data')
const mongoose = require('mongoose')

require('dotenv/config')
app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))

//import routes
app.use('/data', dataRoute)
app.use('/person', personRoute)

//connect to cluster
connectDB()

async function connectDB(){
    try {
        const resolve = await mongoose.connect(process.env.DB_STRING)
        console.log('connected to cluster')
    } catch (error) {
        console.log("error in connection to cluster" + error)
    }
}

//connect to port
app.listen(3000);
