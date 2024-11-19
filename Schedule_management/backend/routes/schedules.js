const express = require('express');
const router = express.Router();
const Schedule = require('../models/schedule');

// Lấy tất cả thời khóa biểu
router.get('/', async (req, res) => {
  try {
    const schedules = await Schedule.find(); 
    res.json(schedules)
    
  } catch (err) {
    console.error('Lỗi khi lấy dữ liệu:', err);
    res.status(500).json({ message: 'Lỗi khi lấy dữ liệu' });
  }
});

module.exports = router;
