const express = require('express')
const router = express.Router();
const productimagesapi=require('../controllers/products_images')
 
router.post('/product_images',productimagesapi.AddImaages)

module.exports = router;
