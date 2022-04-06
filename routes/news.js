const express = require("express");
const router = express.Router();
const { getNewsList, getSingle, createNews } = require("../controllers/newsController");
const { validateCreate } = require("../validators/newsValidator");

/* POST Routes */

//Create news
router.post("/", validateCreate, createNews);

/* GET Routes */

//Get all news
router.get("/list", getNewsList);

//Get news by ID
router.get("/:id", getSingle);

module.exports = router;
