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

module.exports = router;
