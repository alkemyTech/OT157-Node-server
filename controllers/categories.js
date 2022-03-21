const { Categories } = require('../models/index');


module.exports = {
    async getCategories(req, res) {
        const categories = await Categories.findAll();
        if (!categories) return res.status(404).json({ message: 'not found' });
        return res.status(200).json({ categories });
    }
}