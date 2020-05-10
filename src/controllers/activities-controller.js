'use strict';

const { Router } = require('express');
const ActivityService = require('../services/activity-service');
const ActivityModel = require('../models/activity');

const router = new Router();
const service = new ActivityService(new ActivityModel());

router.get('/', async (req, res, next) => {
  try {
    const result = await service.getActivities();
    return res.json(result);
  } catch (err) {
    next(err);
  }
});

router.get('/:id/questions', async (req, res, next) => {
  const {id} = req.params;
  const {skip, take} = req.query;
  try {
    const questions = await service.getQuestions(parseInt(id), skip, take);
    return res.json(questions);
  } catch (err) {
    next(err);
  }
});

router.get('/:id/questions/count', async (req, res, next) => {
  const {id} = req.params;
  try {
    const count = await service.getQuestionsCount(parseInt(id));
    return res.json({count});
  } catch (err) {
    next(err);
  }
});

router.get('/:id/rounds', async (req, res, next) => {
  const {id} = req.params;
  try {
    const questions = await service.getRounds(parseInt(id));
    return res.json(questions);
  } catch (err) {
    next(err);
  }
});

router.get('/:id/rounds/:roundId/questions', async (req, res, next) => {
  const {id, roundId} = req.params;
  try {
    const questions = await service.getQuestionsOfRound(parseInt(id), parseInt(roundId));
    return res.json(questions);
  } catch (err) {
    next(err);
  }
});

// @TODO: implement logic of updating a question object
router.put('/:id/questions/:id', async (req, res, next) => {
  return res.json('Not yet implemented');
});

// @TODO: implement logic of patching a question object
router.patch('/:id/questions/:id', async (req, res, next) => {
  return res.json('Not yet implemented');
});

module.exports = router;
