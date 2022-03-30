'use strict';
const {check}= require('express-validator');
const {validateOrganization}=require('../util/validate')

const validateUpdate = [
    check('name').isString().notEmpty(),
    check('image').isString().notEmpty(),
    check('address').isString(),
    check('phone').isNumeric(),
    check('email').isEmail().notEmpty(),
    check('welcomeText').isString().notEmpty(),
    check('aboutUsText').isString(),

    (req, res, next) => validateOrganization(req, res, next)
]

module.exports = { validateUpdate }