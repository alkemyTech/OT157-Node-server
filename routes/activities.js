var express = require('express');
const res = require('express/lib/response');
const activitiesController = require ('../controllers/activitiesController');
const validateActivitiesFields = require('../middlewares/validateActivities');
var router = express.Router();
/* Routes Activities */

router.get('/', activitiesController.getActivities);

router.post('/', validateActivitiesFields, activitiesController.postActivities);

router.put('/:id',validateActivitiesFields, activitiesController.updateActivity);



module.exports = router;