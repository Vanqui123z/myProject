const express = require('express');
const router = express.Router();
const NewController = require('../controllers/SiteController');

// Route chính cho /news
router.get('/', NewController.news);

// Route con /news/hello
router.get('/hello', (req, res) => {
    res.send("Hello from News!");
});

module.exports = router;
