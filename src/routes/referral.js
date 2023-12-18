const express = require('express')
const router = express.Router()
const referral = require('../controllers/referral');

router.post('/createreferral/',referral.createreferral);
router.get('/view_all_createreferral/',referral.getallreferral);

module.exports = router;
