const { getCategoriesList, createCategory, getCategoryDetail, deleteCategory } = require('../controllers/categoriesController');
const express = require('express');
const router = express.Router();
const { validateCreate } = require('../validators/categoriesValidator');



router.get('/', getCategoriesList);
router.get('/:id', getCategoryDetail);
router.post('/', validateCreate, createCategory);
router.delete('/:id', deleteCategory);





module.exports = router;