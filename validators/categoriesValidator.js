const { check } = require('express-validator');
const { validate } = require('../util/validateHelper');


const validateCreate = [
    check('name').exists().isString().not().isEmpty(),
    check('description').isString(),
    check('image').isString(),
    (req, res, next) => validate(req, res, next)
]

module.exports = { validateCreate }