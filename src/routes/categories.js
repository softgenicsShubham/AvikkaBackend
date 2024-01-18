const express = require('express')
const router = express.Router();
const categoriesController = require('../controllers/categories')

router.post('/categories', categoriesController.postCategories)
router.get('/categories/all', categoriesController.getCategories)
router.put('/categories/edit/:id', categoriesController.editCategories)
router.delete('/categories/delete/:id', categoriesController.deleteCategories)
router.get('/singel_categories/:id',categoriesController.getcategoriesById)
router.get('/categories/:categoriesitem',categoriesController.getcategoriesitem)
module.exports = router;
