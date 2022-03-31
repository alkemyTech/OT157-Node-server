"use strict";
const db = require("../models");

const getMembers = async (req, res) => {
  await db.Member.findAll()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json("Error in get members" + err);
    });
};

module.exports = {
  getMembers,
};
