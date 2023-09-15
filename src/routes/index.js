const express = require('express')
const router= express.Router()
const authentication = require('./authentication')
const brand=require('./brand')

router.use('/', authentication)
router.use('/', brand)
module.exports = router