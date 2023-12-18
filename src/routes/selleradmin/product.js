const express = require('express')
const router = express.Router();
const productadminapi=require('../../controllers/Selleradmin/Selleradmin_product')
const {loginsellerauth}=require("../../middleware/sellerauth")

// router.post('seller_panel/product',(req,res)=>{
//     res.send('hello')
// })
router.post('/Addproduct',loginsellerauth,productadminapi.Addproduct)
router.get('/getproduct',productadminapi.getproduct)
router.get('/getallsellerproduct',loginsellerauth,productadminapi.gettotalindivisualproduct)
router.get('/sellergetproduct',loginsellerauth,productadminapi.sellergetproduct)
router.get('/sellergetproductid/:id',loginsellerauth,productadminapi.sellergetproductid)
router.patch('/editproduct/:id',loginsellerauth,productadminapi.editproduct)
router.delete('/deleteproduct/:id',loginsellerauth,productadminapi.deleteproduct)





module.exports = router;
