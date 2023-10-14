
const express = require('express')
const router = express.Router();
const itemController = require('../controllers/categoriesitem')

router.post('/item', itemController.postItem)
router.get('/item/all', itemController.getItem)
router.put('/item/edit/:id', itemController.editItem)
router.delete('/item/delete/:id', itemController.deleteItem)

module.exports = router;