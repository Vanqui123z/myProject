const mongoose = require('mongoose');


const ScheduleSchema = new mongoose.Schema({
  day: { type: String, required: true },
  dayOfWeek: { type: String, required: true },
  classPeriod: { type: String, required: true },
  classroom: { type: String, required: true },
  subject: { type: String,srequired: true },
  teacher: { type: String, required: true },
  session: { type: String, required: true },
});

// Đảm bảo collection sử dụng tên 'schedule' trong MongoDB
module.exports = mongoose.model('schedule', ScheduleSchema, 'scheduleData');

