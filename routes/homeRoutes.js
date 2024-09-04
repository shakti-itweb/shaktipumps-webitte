const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');


//Route for home page
router.get('/', homeController.getHomePage);
//Route for data to be shown from an api 
router.get('/data', homeController.getHomeData);

module.exports = router;
