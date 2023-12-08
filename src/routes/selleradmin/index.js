const express = require('express')
const router = express.Router()










const sellerproduct = require('./product')
const sellerbrand=require('./brand')
const sellersubcategories=require('./subcategories')
const sellersubcategoriesitem=require('./item')


const sellercategories=require('./categories')

const sellercolor=require('./color')















// seller admin api
router.use('/sellerproduct', sellerproduct)
router.use('/sellerbrand', sellerbrand)
router.use('/sellercategories', sellercategories)
router.use('/sellersubcategories', sellersubcategories)
router.use('/sellersubcategoriesitem', sellersubcategoriesitem)
router.use('/sellercolor', sellercolor)





















module.exports = router