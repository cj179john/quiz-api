'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./config.js');
const routes = require('./routes');
const errorHandler = require('./middlewares/errorHandler-middleware');
const morgan = require('morgan');

const app = express();

// enable all cors call, we should filter specific URL when it is in production
app.use(cors());

app.myRouter = express.Router();

// load config
app.config = config;

app.use(morgan('combined'));

// convert request and respond bodies to json
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api', routes);

app.use(errorHandler);

process.on('uncaughtException', (err) => {
  console.error(err);
  process.exit(1);
});

module.exports = app;