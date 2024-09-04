const express = require('express');
const router = express.Router();
const csrController = require('../controllers/csrController');

// Route for the about page
router.get('/', csrController.getCsrPage);

// Route for some about-related information
router.get('/info', csrController.getCsrInfo);

module.exports = router;