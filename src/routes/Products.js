const express = require('express')
const router = express.Router();
const productapi=require('../controllers/products')
 
router.post('/product/',productapi.Addproduct)
router.get('/product/',productapi.getproduct)
router.get('/product/productdetail/:productId',productapi.productdetail)
router.post('/api/products/all/filter/data', productapi.fillterDataget)
router.post('/products/applyfilter', productapi.applyfilter)
//router.post('/products/edit/:productId',productapi.Editproduct)

module.exports = router;
