const express = require('express');
const router = express.Router();

const serviceSupportController = require('../controllers/serviceSupportCntrller');

router.get('/', serviceSupportController.servicePage);
router.get('/tilt-calculator', serviceSupportController.tiltCalculator);

module.exports = router;