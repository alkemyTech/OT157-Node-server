const express = require("express");
const router = express.Router();
const { getAllContacts } = require("../controllers/contactoController");

const { validarJWT } = require("../middlewares/validarJWT");
const { esAdminRol } = require("../middlewares/validateRole");

router.get("/", [validarJWT, esAdminRol], getAllContacts);

module.exports = router;
