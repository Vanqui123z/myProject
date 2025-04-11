const express = require('express');
const router = express.Router();
const InforStudentControllers = require('../controllers/InforStudentControllers');


// Route con /news/hello
router.get('/inf', InforStudentControllers.show);

module.exports = router;
