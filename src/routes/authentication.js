const express = require('express')
const router = express.Router()
const authenticationapi = require('../controllers/authentication')
const {userAuth}=require('../middleware/authmiddleware')
router.post('/auth/', authenticationapi.getAuthentication)
router.get('/auth/', userAuth,authenticationapi.userInfo)

router.post('/auth/verify-otp/', authenticationapi.getverifyotp)

module.exports = router;
