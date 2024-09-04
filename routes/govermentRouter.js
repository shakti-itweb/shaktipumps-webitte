const express = require('express');
const router = express.Router();
const govermentController = require('../controllers/govermentController');

// Route for the about page
router.get('/', govermentController.getGoverment);

// Route for some about-related information
router.get('/info', govermentController.getGovermentInfo);

module.exports = router;