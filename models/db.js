const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/TaskDB',{useNewUrlParser : true}, (err) =>
{
    if(!err)
    console.log("Mongodb successully started")
    else
    console.log("Error : "+err)
})

require('./task.model.js')
