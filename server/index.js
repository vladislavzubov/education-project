const express = require('express');
const mongoose = require('mongoose');
const config = require('./config');
const http = require('http');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
require('./app/models');

const app = express();
config.express(app);
config.routes(app);

// mongoose.connect(
//   mongoURi
// );

app.use(express.static(path.join(__dirname, 'frontend/build')));

app.use(cors());
app.use(morgan('combined'));
app.use(bodyParser.json({ type: '*/*' }));

router(app);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend/build/index.html'));
});

const { appPort, mongoURi } = config.app;

const port = process.env.PORT || 3090;

mongoose
  .connect(mongoURi)
  .then(() =>
    app.listen(appPort, () =>
      console.log(`listening on port ${port} ${appPort}...`)
    )
  )
  .catch((err) => console.error(`Error connecting to mongo: ${mongoURi}`, err));
