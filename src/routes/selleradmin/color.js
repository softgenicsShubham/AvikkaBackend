const express = require('express')
const router = express.Router();
const colorcontroler = require('../../controllers/Selleradmin/sellercolor')

router.post('/Addcolor', colorcontroler.Addcolor)
router.get('/getcolor', colorcontroler.getcolor)

router.delete('/Deletecolor/:color_id', colorcontroler.Deletecolor)
router.patch('/editcolor',colorcontroler.editcolor)

module.exports = router;
