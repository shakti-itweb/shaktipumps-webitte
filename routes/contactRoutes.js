const express = require('express');
const router  = express.Router();
const contactController = require('../controllers/contactController');
const { route } = require('./homeRoutes');

router.get('/' , contactController.home);
// route for handlling form submission
router.post('/submitForm', contactController.formSubmission)
module.exports = router