'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const events = require('events');
const config = require('./config.js');
const routes = require('./routes');

const app = express();

// enable all cors call
app.use(cors());

// event emitter
app.eventEmitter = new events.EventEmitter();
require('./services/eventService.js')(app.eventEmitter);

app.myRouter = express.Router();

// load config
app.config = config;

// convert request and respond bodies to json
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api', routes);

// error catcher
const notFoundDataMiddleware = require('./middlewares/notFoundDataMiddleware');

app.use((req, res) => notFoundDataMiddleware(req, res, app.eventEmitter));

process.on('uncaughtException', (err) => {
  console.error(err);
  process.exit(1);
});

module.exports = app;