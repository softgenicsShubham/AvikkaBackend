const express = require('express')
const router = express.Router();
const productapi=require('../controllers/products')
 
router.post('/product/',productapi.Addproduct)

module.exports = router;
