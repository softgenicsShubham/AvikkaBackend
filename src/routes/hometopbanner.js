const express = require('express')
const router = express.Router()
const hometopbannerapi=require('../controllers/hometopbanner')
router.post('/addhometopbanner/',  hometopbannerapi.hometopbannerimage)
router.get('/gethometopbanner/',  hometopbannerapi.gethometopbanner)


module.exports = router;
