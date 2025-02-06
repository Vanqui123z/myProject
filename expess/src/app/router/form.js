const express = require('express');
const router = express.Router();
const formController = require('../controllers/FormController');

// Route chính cho /news
router.post('/delete/:name', formController.delete);
router.post('/add', formController.add);
router.get('/', formController.show);
module.exports = router;
