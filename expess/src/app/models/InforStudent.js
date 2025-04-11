const mongoose = require("mongoose")

const inforStudentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  hometown: { type: String, required: true },
  school: { type: String, required: true },
  academic_performance: { type: String, required: true },
  conduct: { type: String, required: true }
    
})

module.exports = mongoose.model('InforStudent', inforStudentSchema, 'InforStudent');