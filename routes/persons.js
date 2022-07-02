const express = require('express')
const Router = express.Router()
const data = require('../models/data')
const personList = require('../persons.json')

Router.post('/', async (req, res) => {

    const newPerson = new data({
        Name: req.body.Name,
        Age: req.body.Age,
        Nationality: req.body.Nationality,
        Motto: req.body.Motto
    })

    try {
        const personAdded = await newPerson.save()
        console.log("Person successfull added")
    } catch (error) {
        console.log('Error adding new person' + error)
    }
    
    res.redirect('/')
})

module.exports = Router