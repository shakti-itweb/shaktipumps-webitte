const express = require('express');
const router = express.Router();
const noticeInvestorController = require('../controllers/noticeInvestorController');

// Route for all the news at a particular page
router.get('/notice-list', noticeInvestorController.getNoticeListing);
//Information about a particular news after clicking on the page
router.get('/particular-notice',noticeInvestorController.getParticularNotice);

//Route for information about event page
router.get('/investor-list',noticeInvestorController.getInvestorListing);

//Route for information of particular event
router.get('/particular-investor',noticeInvestorController.getParticularInvestor)


module.exports = router;
