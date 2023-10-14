const express = require('express')
const router = express.Router()
const whislistapi = require('../controllers/wishlist')
const { userAuth } = require('../middleware/authmiddleware')

// router.get('/getCartProduct/', userAuth, cartapi.getCartProduct)
router.post('/addProductToWishlist/',userAuth,whislistapi.addProductToWishlist)
// router.delete('/removeProductFromCart/:product_id', userAuth, cartapi.removeProductFromCart)
// router.patch('/updateProductQuantity/', userAuth, cartapi.updateProductQuantity)

module.exports = router;
