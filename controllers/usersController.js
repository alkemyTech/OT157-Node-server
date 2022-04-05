const db = require("../models");
const bcryptjs = require("bcryptjs");
const {generarJWT} = require("../helpers/generarJWT");

const getAllUser = async (req, res) => {
  const users = await db.User.findAll({
    attributes: ["id", "firstName", "lastName", "email", "image", "roleId"],
  });
  res.status(400).json({users});
};

const getUserById = async (req, res) => {
  const {id} = req.params;
  const user = await db.User.findByPk(id, {
    attributes: ["id", "firstName", "lastName", "email", "image", "roleId"],
  });
  res.status(400).json({user});
};

const login = async (req, res) => {
  const {email, password} = req.body;

  try {
    //1 Verificar si el email existe
    const user = await db.User.findOne({
      where: {
        email: email,
      },
    });
    if (!user) {
      return res.status(400).json({
        msg: "Credenciales no validas!!!-El correo no pertenece a un usuario del sistema",
      });
    }
    //2 TODO verificar si el usuario esta activo

    //3 verificar la contraseña
    const validarPassword = bcryptjs.compareSync(password, user.password);
    if (!validarPassword) {
      return res.status(400).json({
        msg: "Credenciales no validas!! - password incorrecto",
      });
    }

    //4 generar JWT
    const token = await generarJWT(user.id);
    res.json({
      user,
      token,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: "Algo salio mal!",
    });
  }
};
module.exports = {getAllUser, getUserById};

/* 
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

module.exports = usersController; */
