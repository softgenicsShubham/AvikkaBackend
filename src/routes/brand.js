const express = require('express')
const router = express.Router();
const brandapi = require('../controllers/brand')


router.post('/brand', brandapi.Addbrand)
router.get('/brand', brandapi.getbrand)
router.get('/brand/product/:brandName', brandapi.getbrandproduct)



module.exports = router;
