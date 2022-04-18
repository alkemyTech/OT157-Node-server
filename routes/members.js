const express = require("express");
const router = express.Router();
const { getMembers } = require("../controllers/memberController");

const { validarJWT } = require("../middlewares/validarJWT");
const { esAdminRol } = require("../middlewares/validateRole");

router.get("/", getMembers);

module.exports = router;
