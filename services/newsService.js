const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { findByPk, getAll, create } = require("../repositories/newsRepository");

const newsService = {
  getAllNews: async (req, res) => {

    const news = await getAll()
      
    .then((news) => {
        if ( news.length > 0 && news != undefined) {
          res.status(200).json(news);
        } else {
          res.status(400).json({ msg: "Sorry, there are no news to show." });
        }
      })

      .catch((errors) => {
        res.status(400).json({ msg: "Error getting the news"}),
          console.log(errors);
      });
  },

  getNewsById: async function (req, res) {

    let { id } = req.params;

    await findByPk(id)

      .then((news) => {
        if (news) {
          res.status(200).json(news);
        } else {
          res.status(400).json({ msg: "Sorry, there are no news with this id." });
        }
      })

      .catch((errors) => {
        res.status(400).json({ msg: "Error getting the news"}),
          console.log(errors);
      });
  },
  postNews: async function (req, res) {

    let body = req.body;

    await create(body)

      .then((news) => {
        if (news) {
          res.status(200).json(news);
        } else {
          res.status(400).json({ msg: "Error creating the news" });
        }
      })

      .catch((errors) => {
        res.status(400).json({ msg: "Error creating the news"}),
          console.log(errors);
      });
  },
};

module.exports = newsService;
