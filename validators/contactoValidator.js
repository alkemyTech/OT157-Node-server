'use strict';
const {check}= require('express-validator');
const { validarJWT } = require('../middlewares/validarJWT');
const { esAdminRol } = require('../middlewares/validateRole');
const {validate}=require('../util/validateHelper')

const validateUpdateContacto = [
    validarJWT,
    esAdminRol,
    check('facebook').isString().isURL().notEmpty(),
    check('instagram').isString().isURL().notEmpty(),
    check('linkedin').isString().isURL().notEmpty(),

    (req, res, next) => validate(req, res, next)
]

module.exports = { validateUpdateContacto }