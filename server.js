const express = require('express')
const app = express()
const personList = require('./persons.json')


app.set('view engine', 'ejs')
app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))

app.get('/person',(req,res) => {
    const person = {
        "Name": "Eunice",
        "Age": 21,
        "Nationality": "Filipino",
        "Motto": "motto"
    }
    personList.push(person)
    console.log(req)
    res.send(personList)
})

app.post('/person', (req, res) => {
    const person = req.body
    personList.push(person)
    res.redirect('/')
})

// app.post('/person',(req,res) => {
//     const name = req.query.name
//     const age = req.query.age
//     const nationality = req.query.nationality
//     const motto = req.query.motto
//     const tblRow = document.createElement('tr')
//     const table = document.querySelector('.table')
    
//     console.log(req.body.name)
//     const rowContent = `<td>${name}</td>
//                         <td>${age}</td>
//                         <td>${nationality}</td>
//                         <td>${motto}</td>`
//     console.log(rowContent)
//     tblRow.innerHTML = rowContent
//     table.append(tblrow)
//     res.send(table)
// })

// app.post('/',(req,res) => {

// })

app.listen(3000);
