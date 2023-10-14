const express = require('express')
const router= express.Router()
const authentication = require('./authentication')
const brand=require('./brand')
const Product=require('./Products')
const productImage=require('./products_images')
const carousel=require('./carousel')
const Review=require('./review')
const Categories=require('./categories')
const subCategories=require('./subcategories')
const item=require('./item')
const cart=require('./cart')
const wishlist=require('./whislist')

router.use('/', authentication)
router.use('/', brand)
router.use('/', Product)
router.use('/', productImage)
router.use('/', carousel)
router.use('/', Review)
router.use('/', Categories)
router.use('/', subCategories)
router.use('/', item)
router.use('/', cart)
router.use('/', wishlist)






module.exports = router