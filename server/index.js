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

const port = process.env.PORT || 80;

mongoose
  .connect(mongoURi)
  .then(() =>
    app.listen(port, () =>
      console.log(`listening on port ${port} ${appPort}...`)
    )
  )
  .catch((err) => console.error(`Error connecting to mongo: ${mongoURi}`, err));
