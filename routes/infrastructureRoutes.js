// routes/aboutRoutes.js

const express = require('express');
const router = express.Router();
const infrastructureController = require('../controllers/infrastructureController');

// Route for the about page
router.get('/', infrastructureController.getInfrastructurePage);

// Route for some about-related information
router.get('/info', infrastructureController.getInfrastructureInfo);

module.exports = router;
