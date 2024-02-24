const express = require('express')
const router = express.Router();
const Reviewapi = require('../controllers/review')


const { userAuth } = require('../middleware/authmiddleware')






router.post('/review/', Reviewapi.AddReviewAndRating)
router.get('/review/allreview/:productId', Reviewapi.getallreview)
router.get('/review/getallmyreviews/',userAuth, Reviewapi.getallmyreviews)
router.get('/getallmyreviews/', Reviewapi.getallmyreviewsforadmin)
router.delete('/deletereviews/:id', Reviewapi.deletereviewsforadmin)




module.exports = router;
