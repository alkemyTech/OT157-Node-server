'use strict';
var express = require('express');
var router = express.Router();
var {validateUpdate}=require('../validators/organizationValidator');
const {updateOrganization,getOrganization}=require('../controllers/organizationController');

router.get('/public',getOrganization);
router.post('/public/:id',validateUpdate,updateOrganization);

module.exports= router;