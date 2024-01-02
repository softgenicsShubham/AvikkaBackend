const express = require('express')
const router = express.Router();
const productofferController = require('../controllers/ProductOffer')
// const validateOffer=require('../middleware/offerValidation');
router.get('/getproductoffer',productofferController.getproductoffer);


module.exports = router;