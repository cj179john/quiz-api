const { Router } = require('express');
const activitiesController = require('./controllers/activities-controller.js');

const router = Router();

router.get('/healthcheck', (req, res) => res.send('API is up and running'));
router.use('/activities', activitiesController);

module.exports = router;
