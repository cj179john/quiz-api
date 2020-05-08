const { isEmpty } = require('lodash');
const { Router } = require('express');

const router = new Router();
const data = require('../../data/questions.json');

router.get('/', async (req, res) => {
  const result = data.activities.map(activity => activity.activity_name);
  return res.json(result);
});

router.get('/:id/questions', async (req, res) => {
  const {id} = req.params;
  const {skip, take} = req.query;

  const activity = data.activities
    .find(activity => activity.order === parseInt(id));

  if (!activity) {
    throw new Error('Activity not found');
  }

  let questions = activity.questions;

  if (skip) {
    questions = questions.slice(skip);
  }

  if (take) {
    questions = questions.slice(0, take);
  }

  return res.json(questions);
});
// router.get('/:id/rounds', activitiesHandler);
// router.get('/:id/rounds/questions', activitiesHandler);
module.exports = router;
