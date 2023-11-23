const express = require('express')
const router = express.Router();
const quantitycontroler = require('../controllers/quantity')

router.post('/Addquantity', quantitycontroler.AddQuantity)

module.exports = router;
