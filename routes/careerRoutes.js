const express = require('express');
const router  = express.Router();
const careerController = require('../controllers/careerController');

router.get('/' , careerController.home);
router.get('/life-at-shakti' , careerController.lifeAtShakti);
router.get('/jobDetails' , careerController.jobDetails);

module.exports = router