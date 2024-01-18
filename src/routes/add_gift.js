const express = require('express')
const router = express.Router()
const gift = require('../controllers/addgiftController');


router.post('/add_gift', gift.add_gift);
router.delete('/delete_gift/:id', gift.deleteGift);
router.get('/view_all_gift', gift.view_add_gift);
router.get("/view_gifts",gift.view_gift)


module.exports = router;







