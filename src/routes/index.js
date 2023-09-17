const express = require('express')
const router= express.Router()
const authentication = require('./authentication')
const brand=require('./brand')
const Product=require('./Products')
const productImage=require('./products_images')

router.use('/', authentication)
router.use('/', brand)
router.use('/', Product)
router.use('/', productImage)


module.exports = router