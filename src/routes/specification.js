const express = require('express')
const router = express.Router();
const specificationcontroler = require('../controllers/specification')

router.post('/Addproductspecification', specificationcontroler.Addproductspecification)

module.exports = router;
