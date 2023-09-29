const express = require('express')
const router= express.Router()
const authentication = require('./authentication')
const brand=require('./brand')
const Product=require('./Products')
const productImage=require('./products_images')
const carousel=require('./carousel')
const Review=require('./review')
router.use('/', authentication)
router.use('/', brand)
router.use('/', Product)
router.use('/', productImage)
router.use('/', carousel)
router.use('/', Review)




module.exports = router