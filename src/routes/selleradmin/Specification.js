const express = require('express')
const router = express.Router();
const specificationapi=require('../../controllers/Selleradmin/Sellerspecification')
const {loginsellerauth}=require("../../middleware/sellerauth")

// router.post('seller_panel/product',(req,res)=>{
//     res.send('hello')
// })
router.post('/Addproductspecification',loginsellerauth,specificationapi.Addproductspecification)






module.exports = router;
