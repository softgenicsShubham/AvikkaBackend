
// const express = require('express')
// const router = express.Router();
// const offerController = require('../controllers/offer')

// router.post('/Addoffer', offerController.PostOffer)
// router.get('/getproduct_with_offer', offerController.getproductwithoffer)
// router.get('/getproductwithoffersinfo', offerController.getproductwithoffersinfo)
// // router.delete('/item/delete/:id', itemController.deleteItem)

// module.exports = router;
const express = require('express')
const router = express.Router();
const offerController = require('../controllers/offer')
// const validateOffer=require('../middleware/offerValidation');
const offerManagement =require('../controllers/offerManagement')
router.post('/Addoffer', offerController.PostOffer)
router.get('/getproduct_with_offer', offerController.getproductwithoffer)
router.get('/getproductwithoffersinfo', offerController.getproductwithoffersinfo)
// router.delete('/item/delete/:id', itemController.deleteItem)
router.post('/applyOffer',offerManagement.appliedOffer);
router.get('/availableOffer',offerManagement.getAllOffers);
router.get('/productOffer',offerManagement.getAllOffers);
router.post('/getofferdetail',offerController.getofferdetail)

module.exports = router;
