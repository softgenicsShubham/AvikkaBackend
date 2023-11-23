const express = require('express')
const router = express.Router()
const paymentapi = require('../controllers/payment')

router.post('/pay/',paymentapi.pay)
router.all('/pay-return-url/',paymentapi.paymentreturn)

module.exports = router;
