const express = require('express');
const router = express.Router();

const patentController = require('../controllers/patentController');
router.get('/', patentController.getPatent);

module.exports = router;