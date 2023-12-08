
const express = require('express')
const router = express.Router();
const subCategories = require('../../controllers/Selleradmin/sellersubcategories')

// router.post('/subCategories', subCategories.postsubCetegories);
router.get('/getSubCategories', subCategories.getSubCategories);
// router.put('/subCategories/edit/:id', subCategories.editSubCategories);
// router.delete('/subCategories/delete/:id', subCategories.deleteSubCategories);
// router.get('/getSubCategoriesbyname/:name', subCategories.getSubCategoriesbyname);


module.exports = router;
