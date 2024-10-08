const express = require('express');
const router = express.Router();
const solaroemController = require('../controllers/solarOEMController');

// Route for the about page
router.get('/', solaroemController.getSolarOEM);

// Route for some about-related information
router.get('/info', solaroemController.getSolarOEMInfo);

module.exports = router;