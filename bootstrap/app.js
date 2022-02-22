require('dotenv').config();

const appConfig = require('../config/app'),
  databaseConfig = require('../config/database');

const apiRoutes = require('../routes/api'),
  webRoutes = require('../routes/web');

module.exports.config = {
  app: appConfig,
  database: databaseConfig,
};

module.exports.extendApp = function ({ app }) {
  app.locals.config = this.config;

  app.use('/api', apiRoutes);
  app.use(webRoutes);
};
