const db = require("../models");
const { getAllNews, getNewsById, postNews } = require("../services/newsService");

const newsController = {
  getNewsList: async (req, res) => {
    await getAllNews(req,res)
  },
  getSingle: async (req, res) => {
    await getNewsById(req, res)
  },
  createNews: async (req, res) => {
    await postNews(req, res)
  },
};

module.exports = newsController;
