const express = require('express')
const router = express.Router();
const productapi=require('../controllers/products')
const {userAuth} = require('../middleware/authmiddleware')
const productsController = require('../controllers/productsController') 
router.post('/product/',productapi.Addproduct)
router.get('/product/',productapi.getproduct)
router.get('/single-product/:id',productapi.getproductById)
router.get('/product/productdetail/:productId',productapi.productdetail)
//router.post('/api/products/all/filter/data', productapi.fillterDataget)
router.post('/products/applyfilter', productapi.applyfilter)
//router.post('/products/edit/:productId',productapi.Editproduct)
router.put('/products/edit/:id',productapi.editproduct)
router.get('/admin_product',productapi.admiminproduct);
router.get('/api/products/all/filter', productsController.fillterData)
router.post('/api/products/all/filter/data',productsController.fillterDataget)
router.get('/api/products/all/filter/new', productsController.fillterNewData)

module.exports = router;
