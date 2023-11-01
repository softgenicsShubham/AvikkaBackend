
const express = require('express')
const router = express.Router();
const videothumbnailapi = require('../controllers/videothumbnail')

router.post('/addvideothumnail',videothumbnailapi.addvideothumnail )
router.get('/getvideothumbnail',videothumbnailapi.getvideothumbnail)
module.exports = router;
