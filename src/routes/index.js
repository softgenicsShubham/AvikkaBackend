const express = require('express')
const router = express.Router()





const authentication = require('./authentication')
const brand = require('./brand')
const Product = require('./Products')
const productImage = require('./products_images')
const carousel = require('./carousel')
const Review = require('./review')
const Categories = require('./categories')
const subCategories = require('./subcategories')
const item = require('./item')
const cart = require('./cart')
const wishlist = require('./whislist')
const Homebrandimage = require('./homebrandimage')
const Hometopbannerimage = require('./hometopbanner')
const Address = require('./address')
const Video = require('./video')
const videothumbnail = require('./Videothumnail')
const offer = require('./offer')
const color = require('./color')
const quantity = require('./quantity')
const specification = require('./specification')
const order = require('./order')
const search = require('./search')
const pay = require('./payment')
const add_bank_detail = require('./bank_details')
const seller=require('./seller');

const referral=require('./referral');
const productoffer=require('./ProductOffer');




const selleradmin = require('./selleradmin/index')






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
router.use('/', Hometopbannerimage)
router.use('/', Address)
router.use('/', Video)
router.use('/', videothumbnail)
router.use('/', offer)
router.use('/', Homebrandimage)
router.use('/', color)
router.use('/', quantity)
router.use('/', specification)
router.use('/', order)
router.use('/', search)
router.use('/', pay)
router.use('/', add_bank_detail)
router.use('/',seller);

router.use('/',referral);
router.use('/',productoffer);




// seller admin api
router.use('/selleradmin', selleradmin)

















module.exports = router