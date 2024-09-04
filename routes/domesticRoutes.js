const express = require('express');
const router = express.Router();
const domesticController = require('../controllers/domesticController');

// Route for the about page
router.get('/', domesticController.getDomestic);

// Route for some about-related information
router.get('/info', domesticController.getDomesticInfo);

module.exports = router;