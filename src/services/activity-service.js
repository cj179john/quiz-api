'use strict';

module.exports = class ActivityService {
  constructor(model) {
    this.model = model;
  }

  async getQuestions(activityId, skip = 0, take = 0) {
    const activity = await this.model.getOne(activityId);
    let questions = activity.questions;
    if (skip) {
      questions = questions.slice(skip);
    }

    if (take) {
      questions = questions.slice(0, take);
    }
    return questions;
  }

  async getQuestionsCount(activityId) {
    const activity = await this.model.getOne(activityId);
    return activity.questions.length;
  }

  async getActivities() {
    const activities = await this.model.getAll();
    return activities.map(activity => ({
      id: activity.id,
      name: activity.name
    }));
  }

  async getRounds(activityId) {
    const activity = await this.model.getOne(activityId);
    return activity.rounds;
  }

  // @TODO: support pagination
  async getQuestionsOfRound(activityId, roundId) {
    const activity = await this.model.getOne(activityId);
    return activity.questions.filter(question => question.roundId === roundId);
  }
}