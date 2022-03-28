const { listAll, create } = require('../repositories/categoriesRepository');


const getCategoriesList = async (req, res) => {
    const categories = await listAll();
    if (!categories) return res.status(404).json({ message: 'Categories not found' });
    return res.status(200).json(categories);
}

const createCategory = async (req, res) => {
    const category = await create(req.body);
    if (!category) return res.status(403).json({ message: 'Category not created' });
    return res.status(200).json(category);
}

module.exports = { getCategoriesList, createCategory };








