
const express = require('express')
const router = express.Router();
const subCategories = require('../controllers/subcategories')

router.post('/subCategories', subCategories.postsubCetegories);
router.get('/subCategories/all', subCategories.getSubCategories);
router.put('/subCategories/edit/:id', subCategories.editSubCategories);
router.delete('/subCategories/delete/:id', subCategories.deleteSubCategories);
router.get('/getSubCategoriesbyname/:name', subCategories.getSubCategoriesbyname);


module.exports = router;
