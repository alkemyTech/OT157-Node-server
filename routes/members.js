const express = require("express");
const {check} = require("express-validator");
const router = express.Router();
const {getMembers, createMembers} = require("../controllers/memberController");

const {validarJWT} = require("../middlewares/validarJWT");
const {validateFields} = require("../middlewares/validateFields");
const {esAdminRol} = require("../middlewares/validateRole");

router.get("/", getMembers);
router.post(
  "/",
  [
    validarJWT,
    esAdminRol,
    check("name").isString().not().isEmpty(),
    check("image", "image is require").not().isEmpty(),
    validateFields,
  ],
  createMembers
);

module.exports = router;
