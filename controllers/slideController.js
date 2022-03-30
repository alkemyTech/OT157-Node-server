const db = require("../models");

const getAllSlide = async (req, res) => {
  const slides = await db.Slide.findAll();
  res.status(400).json({slides});
};

const getSlideById = async (req, res) => {
  const {id} = req.params;
  const slides = await db.Slide.findByPk(id);
  res.status(400).json({slides});
};

module.exports = {getAllSlide, getSlideById};
