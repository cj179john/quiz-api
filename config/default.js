'use strict';

module.exports = {
  port: '3002',
  name: 'quiz-api',
  cors: {
    origin: [
      'http://localhost:3001'
    ]
  },
  timeouts: {
    keepalive: parseInt(process.env.KEEPALIVE_TIMEOUT, 10) || 0
  },
  environment: process.env.NODE_ENV || require('os').hostname
};
