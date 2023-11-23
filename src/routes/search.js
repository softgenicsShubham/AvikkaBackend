const express = require('express')
const router = express.Router();
const searchapi = require('../controllers/search')








router.get('/search/all', searchapi.searchresult);



module.exports = router;
