const express = require('express');
const mongoose = require('mongoose');
const config = require('./config');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
config.express(app);

app.use(express.static(path.resolve(__dirname, '../', 'build')));
console.log(path.resolve(__dirname, '../', 'build'));
console.log(path.resolve(__dirname, '../', 'build/index.html'));

app.use(cors());
app.use(bodyParser.json({ type: '*/*' }));

config.routes(app);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../', 'build/index.html'));
});

const { appPort, mongoURi } = config.app;

mongoose
  .connect(mongoURi)
  .then(() =>
    app.listen(appPort, () =>
      console.log(`listening on port ${process.env.NODE_ENV} ${appPort}...`)
    )
  )
  .catch((err) => console.error(`Error connecting to mongo: ${mongoURi}`, err));
