const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const scheduleRoutes = require('../routes/schedules');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/schedules', scheduleRoutes);
// Đảm bảo route đúng

// Kết nối MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Kết nối MongoDB thành công');
    app.listen(PORT, () => console.log(`Server đang chạy tại http://localhost:${PORT}`));
  })
  .catch((err) => console.error('Lỗi khi kết nối MongoDB:', err));

