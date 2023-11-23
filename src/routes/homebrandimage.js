const express = require('express')
const router = express.Router()
const homebrandapi=require('../controllers/homebrandimage')
router.post('/addhomebrandimage/',  homebrandapi.homebrandimage)
router.get('/getbrandimage/',  homebrandapi.getbrandimage)


module.exports = router;
