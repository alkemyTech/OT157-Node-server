const db = require("../models");

const newsController = {
  
  newsList: async (req, res) => {
    await db.News.findAll()

      .then((data) => {
        if (data) {
          res.status(200).json(data);
        } else {
          res.status(400).json({ msg: "Sorry, there are no news to show." });
        }
      })

      .catch((errors) => {
        res.status(400).json({ msg: "Error getting the news", errors }),
          console.log(errors);
      });
  },
};

module.exports = newsController;
