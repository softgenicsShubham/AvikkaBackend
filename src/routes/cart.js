const express = require('express')
const router = express.Router()
const cartapi = require('../controllers/cart')
const { userAuth } = require('../middleware/authmiddleware')

router.get('/getCartProduct/', userAuth, cartapi.getCartProduct)
router.post('/addProductToCart/', userAuth, cartapi.addProductToCart)
router.delete('/removeProductFromCart/:product_id', userAuth, cartapi.removeProductFromCart)
router.patch('/updateProductQuantity/', userAuth, cartapi.updateProductQuantity)

module.exports = router;
