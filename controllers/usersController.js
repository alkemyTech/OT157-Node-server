const { validationResult } = require("express-validator");
const userService = require("../services/userService")

const usersController = {
  login: async function (req, res) {
    let errors = validationResult(req);

    if (errors.isEmpty()) {
      await userService.postLogin(req, res);
    } else {
      return res.status(400).json(errors);
      console.log(errors);
    }
  },
};

module.exports = usersController;
