const express = require('express')
const router = express.Router()
const addressapi = require('../controllers/address')
const {userAuth}=require('../middleware/authmiddleware')
router.post('/addaddress/',userAuth,addressapi.createAddress)
router.get('/getalladdressinfo/',userAuth,addressapi.getalladdressinfo)
router.patch('/editaddress/',userAuth,addressapi.editaddress)
router.delete('/removeaddress/:id',userAuth,addressapi.removeaddress)



module.exports = router;
