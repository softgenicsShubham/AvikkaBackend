const express = require('express')



const router = express.Router()


const bank_detailsapi = require('../controllers/bank_details')


const { userAuth } = require('../middleware/authmiddleware')


router.post('/add_bank_details/', userAuth, bank_detailsapi.add_bank_details)


router.get('/get_bank_details/', userAuth, bank_detailsapi.getbankdetail)
router.delete('/removebankdetail/:id',userAuth, bank_detailsapi.deletebankdetail)

module.exports = router;
