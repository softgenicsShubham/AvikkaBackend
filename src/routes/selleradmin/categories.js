const express = require('express')
const router = express.Router();
const categoriesController = require('../../controllers/Selleradmin/sellercategories')

// router.post('/categories', categoriesController.postCategories)
router.get('/getCategories', categoriesController.getCategories)
// router.put('/categories/edit/:id', categoriesController.editCategories)
// router.delete('/categories/delete/:id', categoriesController.deleteCategories)
// router.get('/categories/:categoriesitem',categoriesController.getcategoriesitem)
module.exports = router;
