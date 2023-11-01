const express = require('express')
const router = express.Router()
const whislistapi = require('../controllers/wishlist')
const { userAuth } = require('../middleware/authmiddleware')

router.get('/getWishlistItems/', userAuth, whislistapi.getWishlistItems)
router.post('/addProductToWishlist/',userAuth,whislistapi.addProductToWishlist)
router.delete('/removeProductFromWishlist/:product_id', userAuth, whislistapi.removeProductFromWishlist)
// router.patch('/updateProductQuantity/', userAuth, cartapi.updateProductQuantity)

module.exports = router;
