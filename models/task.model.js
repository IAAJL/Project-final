const mongoose = require('mongoose')
var taskSchema = new mongoose.Schema({

    taskName :{
        type : String
    },
    taskDesc :{
        type :String
    }
})
mongoose.model('Task',taskSchema)  //Here Task not linked with database name