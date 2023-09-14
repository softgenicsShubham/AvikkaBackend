const express = require('express')
const router = express()
const authenticationapi = require('../controllers/authentication')

router.post('/auth/', authenticationapi.getAuthentication)
router.post('/auth/verify-otp/', authenticationapi.getverifyotp)

module.exports = router;
