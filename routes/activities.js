var express = require('express');
const res = require('express/lib/response');
const activitiesController = require ('../controllers/activitiesController')
var router = express.Router();
/* Routes Activities */

router.get('/', activitiesController.getActivities);

router.post('/', activitiesController.postActivities);



module.exports = router;