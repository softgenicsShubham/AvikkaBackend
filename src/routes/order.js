const express = require('express')
const router = express.Router()
const orderapi = require('../controllers/order')
const {userAuth}=require('../middleware/authmiddleware')

router.post('/order/',userAuth,orderapi.create_order)
router.get('/getorder/',userAuth,orderapi.getorderdetail)
router.get('/getallorder/',orderapi.getallorderdetail)

module.exports = router;
