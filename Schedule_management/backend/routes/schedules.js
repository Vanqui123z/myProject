const express = require('express');
const router = express.Router();
const Schedule = require('../models/schedule');

// Lấy tất cả thời khóa biểu
router.get('/', async (req, res) => {
  try {
    const schedules = await Schedule.find(); 
    res.json(schedules);
  } catch (err) {
    console.error('Lỗi khi lấy dữ liệu:', err);
    res.status(500).json({ message: 'Lỗi khi lấy dữ liệu' });
  }
});

// Thêm lịch
router.post('/', async (req, res) => {
  console.log('Request body:', req.body); 
  try {
    const newSchedule = new Schedule(req.body);
    await newSchedule.save();
    res.status(201).json(newSchedule);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Không thể thêm lịch học' });
  }
});


// Xóa lịch
router.delete('/delete/:id', async (req, res) => {
  try {
    const schedule = await Schedule.findById(req.params.id);
    if (!schedule) {
      return res.status(404).json({ error: 'Không tìm thấy lịch học' });
    }
    await schedule.deleteOne();
    res.status(200).json({ message: 'Đã xóa thành công' });
  } catch (error) {
    console.error('Lỗi khi xóa lịch:', error);
    res.status(500).json({ error: 'Không thể xóa lịch học' });
  }
});

// Sửa lịch
router.put('/edit/:id', async (req, res) => {
  try {
    const updatedSchedule = await Schedule.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedSchedule);
  } catch (error) {
    res.status(500).json({ error: 'Không thể sửa lịch học' });
  }
});



module.exports = router;
