const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const api = require('./server/routes/api')
const mongoose = require('mongoose')

const app = express()

mongoose.connect("mongodb://localhost/mongoose-expense",  {useNewUrlParser: true,  useUnifiedTopology: true } )

app.use(express.static(path.join(__dirname,  'node_modules')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', api)


const port = 3500
app.listen(port, function(){
    console.log(`Running server on port ${port}`)
})
