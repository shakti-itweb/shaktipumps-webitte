// routes/aboutRoutes.js

const express = require('express');
const router = express.Router();
const newsEventListingController = require('../controllers/newseventlistingController');

// Route for all the news at a particular page
router.get('/', newsEventListingController.getNewsListing);
//Information about a particular news after clicking on the page
router.get('/particular-news',newsEventListingController.getParticularNews);

//Route for information about event page
router.get('/event-list',newsEventListingController.getEventListing);

//Route for information of particular event
router.get('/particular-event',newsEventListingController.getParticularEvent)

// Route for some about-related information
router.get('/info', newsEventListingController.getNewsListingInfo);

module.exports = router;
