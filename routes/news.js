const express = require("express");
const router = express.Router();
const { getNewsList, getSingle, createNews, updateNews, deleteNews } = require("../controllers/newsController");
const { pagination } = require("../middlewares/paginationMiddleware");
const { validarJWT } = require("../middlewares/validarJWT");
const { esAdminRol } = require("../middlewares/validateRole");
const { validateCreate } = require("../validators/newsValidator");

//Create news
router.post("/", validarJWT, esAdminRol, validateCreate, createNews);

//Get all news
router.get("/", pagination, getNewsList);

//Get news by ID
router.get("/:id", getSingle);

//Update news by ID
router.put("/:id", validarJWT, esAdminRol, validateCreate, updateNews);

//Delete news by ID
router.delete("/:id", validarJWT, esAdminRol, deleteNews);

module.exports = router;
