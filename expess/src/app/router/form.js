const express = require('express');
const router = express.Router();
const formController = require('../controllers/FormController');

// Route chính cho /news
router.post('/delete/:name', formController.delete);
router.post('/add', formController.add);
router.get('/edit/:name', formController.edit);
router.post('/update/:name', formController.update);
router.get('/', formController.show);
module.exports = router;
