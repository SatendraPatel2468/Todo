const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],

    },
    description: {
        type: String,
        required: [true, 'Description name is required'],

    },
    isCompleted: {
        type: Boolean,
        trim: true,
    },
    createdBy: [
        {
            userName: {
                type: String,
                required: [true, "Please enter the User name"]
            }
        }
    ],


    createdAt: {
        type: Number,
        default: Date.now()  
    },

    updatedAt: {
        type: Date,
        default: Date.now
    }
})


module.exports = mongoose.model('Todo', todoSchema)