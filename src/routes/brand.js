const express = require('express')
const router = express.Router();
const brandapi = require('../controllers/brand')


router.post('/brand', brandapi.Addbrand)
router.get('/testing', brandapi.testing)


module.exports = router;
