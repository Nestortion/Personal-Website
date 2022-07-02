const express = require('express')
const Router = express.Router()
const data = require('../models/data')
const personList = require('../persons.json')

Router.get('/', async (req,res) => {
    try {
        const personList = await data.find()
        res.send(personList)
    } catch (error) {
        console.log('error getting personList' + error)
    }
})

module.exports = Router