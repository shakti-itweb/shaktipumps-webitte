// routes/aboutRoutes.js

const express = require('express');
const router = express.Router();
const aboutController = require('../controllers/aboutController');

// Route for the about page
router.get('/', aboutController.getAboutPage);

// Route for some about-related information
router.get('/info', aboutController.getAboutInfo);

module.exports = router;
