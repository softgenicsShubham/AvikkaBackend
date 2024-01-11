const express = require('express')
const router = express.Router()

const {userAuth}=require('../middleware/authmiddleware')
const wallet=require("../controllers/wallet")

router.post("/create-wallet/", userAuth, wallet.createWallet)
// router.get("/view-balance",userAuth,wallet.viewWallet);
// router.put('/update-wallet',userAuth,wallet.update);
// router.post('/bankdetail',userAuth,wallet.bankdetail);
// router.post('/transferdata',userAuth,wallet.transfferdata);
router.post('/withdraw/',userAuth,wallet.withdraw);
router.post('/addBalance/',userAuth,wallet.addBalance)
router.get('/getwalletbalance/', userAuth,wallet.getwalletbalance)
// router.get('/addamount_wallet/', userAuth,wallet.addamount_wallet)


module.exports = router;