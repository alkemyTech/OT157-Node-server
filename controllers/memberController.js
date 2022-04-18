"use strict";
const db = require("../models");

const getMembers = async (req, res) => {
  try {
    const data = await db.Member.findAll();
    return res.status(200).json(data);
  } catch (error) {
    res.status(400).json("error getting members" + error);
  }
};

module.exports = {
  getMembers,
};
