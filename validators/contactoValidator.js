'use strict';
const {check}= require('express-validator');
const {validate}=require('../util/validateHelper')

const validateUpdateContacto = [
    check('facebook').isString().isURL().notEmpty(),
    check('instagram').isString().isURL().notEmpty(),
    check('linkedin').isString().isURL().notEmpty(),

    (req, res, next) => validate(req, res, next)
]

module.exports = { validateUpdateContacto }