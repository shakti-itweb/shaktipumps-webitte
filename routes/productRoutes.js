const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Route for the about page
router.get('/', productController.getProduct);

// Route for some about-related information
router.get('/info', productController.getProductInfo);

router.get('/product-listing/:pageValue',productController.getfetchProductsForListing);
router.get('/product-details/:table/:item',productController.getfetchProductDetails);

module.exports = router;