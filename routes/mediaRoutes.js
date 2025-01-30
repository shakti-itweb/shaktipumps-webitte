const express = require('express');
const router = express.Router();
const mediaController = require('../controllers/mediaController');
const { route } = require('./homeRoutes');

router.get('/',mediaController.mediaHome);
router.get('/news-details' , mediaController.newsDetails);
router.get('/blog-listing' , mediaController.listBlog);
router.get('/blog-details', mediaController.blogDetails);
router.get('/newsListing', mediaController.newsListing);
router.get('/press-release', mediaController.pressRelease);
module.exports = router