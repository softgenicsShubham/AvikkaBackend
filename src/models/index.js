const Registration = require("./registration");
const Brand = require("./Brand")
const Products = require("./products")
const ProductsImages = require('./products_images')
const Carousel = require('./carousel')
const Review = require('./Review')
const Categories = require('./Categories')
const subCetegories = require('./Subcategories')
const item = require('./item')
const Cart = require('./Cart')
const Wishlist = require('./Wishlist')
const Homebrandimage = require('./homebrandimage')
const Hometopbanner = require('./hometopbanner')
const Address = require('./addresses')
const Video = require('./Video')
const Videothumnail = require('./Videothumnail')
const Offer = require('./offer')
const ProductOffer = require('./productoffer')
const Color = require('./color')
const Quantity = require('./Quantity')
const Specification = require('./specification')
const orderItem = require('./OrderItem')

const bank_detail=require('./bank_detail')

const wallet=require('./wallet')
const transaction=require('./transaction')


module.exports = {
  Registration,
  Brand,
  Products,
  ProductsImages,
  Carousel,
  Review,
  Categories,
  subCetegories,
  item,
  Cart,
  Wishlist,
  Homebrandimage,
  Hometopbanner,
  Address,
  Video,
  Videothumnail,
  Offer,
  ProductOffer,
  Color,
  Quantity,
  Specification,
  orderItem,
  bank_detail,
  wallet,
  transaction
};
