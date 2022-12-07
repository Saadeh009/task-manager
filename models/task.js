const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    name: {
        type:String,
        required:[true,"must provide name"],
        trim:true,
        maxlength:[35,"Name size cannot exceed 35"]
    },
    completed: {
        type:Boolean,
        default:false
    }
})

module.exports = mongoose.model("Task",taskSchema)