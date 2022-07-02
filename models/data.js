const mongoose = require('mongoose')

const DataSchema = mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Age: {
        type: String,
        required: true
    },
    Nationality: {
        type: String,
        required: true
    },
    Motto: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Persons', DataSchema)