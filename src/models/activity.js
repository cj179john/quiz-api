'use strict';

const data = require('../../data/questions.json');

module.exports = class ActivityModel {
  async getAll() {
    return data.activities;
  }

  async getOne(activityId) {
    return data.activities.find(activity => activity.id === activityId);
  }

}