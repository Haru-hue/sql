const { urlencoded } = require('express')
const express = require('express')
const app = express()
const path = require('path')

const input = require('./routes/input')
const home = require('./routes/home')
const sign = require('./routes/sign-in')
const control = require('./controllers/error')
const server = require('./models/database')

app.use(urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'pug')

server.connect((err) => {
    if(err) throw err
    console.log("Server connected!")
})

app.use(home)
app.use(input)
app.use(sign)
app.use(control.NotFound)

app.listen(3000, () => {
    console.log("Connected!")
})