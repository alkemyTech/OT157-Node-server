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
  getComments:async(req,res)=>{
    try{
      const comments=await db.Comment.findAll({
        where:{
          new_id:req.params.id
        }
      })
      res.status(200).json(comments)
    } catch (error){
      res.status(404).json(error)
    }
  }
};

module.exports = newsController;
