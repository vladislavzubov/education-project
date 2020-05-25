const express = require('express');
const mongoose = require('mongoose');
require('./app/models');
const config = require('./config');

const app = express();
config.express(app);
config.routes(app);

const { appPort, mongoURi } = config.app;

mongoose
  .connect(mongoURi)
  .then(() =>
    app.listen(appPort, () => console.log(`listening on port ${appPort}...`))
  )
  .catch((err) => console.error(`Error connecting to mongo: ${mongoURi}`, err));
