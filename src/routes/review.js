const express = require('express')
const router = express.Router();
 const Reviewapi=require('../controllers/review')
router.post('/review/',Reviewapi.AddReviewAndRating)
router.get('/review/allreview/:productid',Reviewapi.getallreview)


module.exports = router;
