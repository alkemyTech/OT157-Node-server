const express = require("express");
const {getAllSlide, getSlideById} = require("../controllers/slideController");
const router = express.Router();

router.get("/", getAllSlide);
router.get("/:id", getSlideById);

module.exports = router;
