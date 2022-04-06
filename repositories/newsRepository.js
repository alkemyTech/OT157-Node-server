const db = require("../models");

const usersRepositories = {
  getAll: async function () {
    const news = await db.News.findAll({
      /* include: [{
        association: 'category',
      }], */
    })
    return news;
  },
  findByPk: async function (id) {
    const news = await db.News.findByPk(id);
    return news;
  },
  create: async function (body) {
    const news = await db.News.create({
      name: body.name,
      content: body.content,
      image: body.image,
      categoryId: body.categoryId,
  });
  return news;
  },
};

module.exports = usersRepositories;
