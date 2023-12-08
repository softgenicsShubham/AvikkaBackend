const express = require('express')



const router = express.Router()





const authenticationapi = require('../controllers/authentication')



const { userAuth } = require('../middleware/authmiddleware')


router.post('/auth/', authenticationapi.getAuthentication)


router.get('/auth/', userAuth, authenticationapi.userInfo)

router.post('/auth/verify-otp/', authenticationapi.getverifyotp)

router.put('/auth/editprofile/', userAuth, authenticationapi.updateprofile)


module.exports = router;
