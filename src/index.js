'use strict';

const app = require('./app');

Object.assign(process.env, app.config);

app.listen(process.env.port, () => console.log(`App listening on port ${process.env.port}`));