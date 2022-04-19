"use strict";
const {Member} = require("../models");

const getMembers = async (req, res) => {
  try {
    const data = await Member.findAll();
    return res.status(200).json(data);
  } catch (error) {
    res.status(400).json("error getting members" + error);
  }
};

const createMembers = async (req, res) => {
  const {body} = req;
  try {
    const member = new Member(body);
    await member.save();
    return res.status(200).json({msg: "successful creation"});
  } catch (error) {
    return res.status(500).json({
      msg: `error in the creation of member`,
      error,
    });
  }
};

module.exports = {
  getMembers,
  createMembers,
};
