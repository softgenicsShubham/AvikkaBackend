
const express = require('express')
const router = express.Router();
const videoapi = require('../controllers/video')

router.post('/addvideo',videoapi.Addvideo )
router.get('/getvideo',videoapi.getvideo)
router.get('/getvideoinfobyVideothumnail_id/:Videothumnail_id',videoapi.getvideoinfobyVideothumnail_id)

module.exports = router;
