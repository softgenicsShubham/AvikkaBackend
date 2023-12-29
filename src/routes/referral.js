const express = require('express')
const router = express.Router()
const referral = require('../controllers/referral');
const {userAuth}=require('../middleware/authmiddleware')

router.post('/createreferral/',referral.createreferral);
router.get('/view_all_createreferral/',referral.getallreferral);
router.post('/checkreferal/',userAuth,referral.checkreferal);


module.exports = router;
