const mongoose = require("mongoose")

const studentSchema = new mongoose.Schema({
    name :{type: String, required: true},
    math: { type: Number, required: false},
    liter: {type: Number, required:false},
    eng: {type: Number, required:false},
})

module.exports = mongoose.model('Student', studentSchema, 'Student');