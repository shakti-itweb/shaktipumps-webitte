// routes/aboutRoutes.js

const express = require('express');
const router = express.Router();
const industrialController = require('../controllers/industrialController');

// Route for the about page
router.get('/', industrialController.getIndustrial);

// Route for some about-related information
router.get('/info', industrialController.getIndustrialInfo);

module.exports = router;
