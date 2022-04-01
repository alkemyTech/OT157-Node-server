'use strict';
const {validationResult}= require('express-validator');

const validateOrganization = (req, res, next) => {
    try {
        validationResult(req).throw();
        return next();
    } catch (err) {
        return res.status(403).json({
            message: err
        });
    }
}

module.exports={validateOrganization};