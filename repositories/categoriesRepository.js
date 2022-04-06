const { Categories } = require('../models/index');


const listAll = async () => {
    return await Categories.findAll({ attributes: ['name'] });
}

const categoryDetail = async (id) => {
    const category = await Categories.findOne({
        where: { id },
        attributes: ['id', 'name', 'description', 'image', 'createdAt', 'updatedAt'],
    });
    return category;
}

const create = async (body) => {
    const category = await Categories.create({
        name: body.name,
        description: body.description,
        image: body.image,
    });
    return category;
}

const categoryDelete = async (id) => {
    const category = await Categories.destroy({
        where: { id },
    });
    return category;
}




module.exports = { listAll, create, categoryDetail, categoryDelete };
