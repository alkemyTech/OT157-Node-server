const { Categories } = require('../models/index');


const listAll = async () => {
    return await Categories.findAll({ attributes: ['name'] });
}

const create = async (body) => {
    const category = await Categories.create({
        name: body.name,
        description: body.description,
        image: body.image,
    });
    return category;
}


module.exports = { listAll, create };
