const express = require('express');
const router = express.Router();
const internationalController = require('../controllers/internationalController');

// Route for the about page
router.get('/', internationalController.getInternational);

// Route for some about-related information
router.get('/info', internationalController.getInternationalInfo);

module.exports = router;