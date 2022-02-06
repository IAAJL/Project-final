require('./models/db.js')
const taskController = require('./controllers/taskController.js')
const express = require('express')
const path = require('path')
const exphbs = require('express-handlebars')
var app = express()
const bodyparser = require('body-parser')
app.use(bodyparser.urlencoded((extended = true)))
app.use(bodyparser.json())

app.set('views',path.join(__dirname,'/views/'))
app.engine('hbs',exphbs.engine({extname:'hbs',defaultLayout:'mainLayout',layoutsDir : __dirname+'/views/layouts'}))
app.set('view engine','hbs')
app.listen(7999,()=>
{
    console.log("Express server started")
})

app.use('/task',taskController)