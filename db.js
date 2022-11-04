const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://test:test@project.hknbo.mongodb.net/Project?retryWrites=true&w=majority',{useNewUrlParser : true}, (err) =>
{
    if(!err)
    console.log("Mongodb successully started")
    else
    console.log("Error : "+err)
})

require('./task.model.js')
