const express = require('express')
const router = express.Router();
const sellerbrandapi=require('../../controllers/Selleradmin/sellerbrand')
 
// router.post('seller_panel/product',(req,res)=>{
//     res.send('hello')
// })
router.get('/getbrand',sellerbrandapi.getbrand)
module.exports = router;
