const express    = require('express');
const bodyParser = require('body-parser');
// const config     = require('config');

module.exports = () => {
  const app = express();
  app.set('port', process.env.PORT);

  // MIDDLEWARES
  app.use(express.json())

  return app;
};
