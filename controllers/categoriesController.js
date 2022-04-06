const { listAll, create, categoryDetail, categoryDelete } = require('../repositories/categoriesRepository');


const getCategoriesList = async (req, res) => {
    const categories = await listAll();
    if (!categories) return res.status(404).json({ message: 'Categories not found' });
    return res.status(200).json(categories);
}

const getCategoryDetail = async (req, res) => {
    const category = await categoryDetail(req.params.id);
    if (!category) return res.status(404).json({ message: 'Category not found' });
    return res.status(200).json(category);
}

const createCategory = async (req, res) => {
    const category = await create(req.body);
    if (!category) return res.status(403).json({ message: 'Category not created' });
    return res.status(200).json(category);
}

const deleteCategory = async (req, res) => {
    const category = await categoryDelete(req.params.id);
    if (!category) return res.status(404).json({ message: 'Category not found' });
    return res.status(200).json({ message: 'Category deleted' });
}

module.exports = { getCategoriesList, createCategory, getCategoryDetail, deleteCategory };








