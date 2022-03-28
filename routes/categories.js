const { getCategories, createCategory } = require('../controllers/categoriesController');
const express = require('express');
const router = express.Router();
const { validateCreate } = require('../validators/categoriesValidator');


router.get('/', getCategories);
router.post('/', validateCreate, createCategory);





module.exports = router;