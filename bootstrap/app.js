require('dotenv').config();

const appConfig = require('../config/app'),
  databaseConfig = require('../config/database'),
  redisConfig = require('../config/redis'),
  telegramConfig = require('../config/telegram');

const apiRoutes = require('../routes/api'),
  webRoutes = require('../routes/web');

module.exports.config = {
  app: appConfig,
  database: databaseConfig,
  redis: redisConfig,
  telegram: telegramConfig,
};

module.exports.extendApp = function ({ app }) {
  app.locals.config = this.config;

  app.use('/api', apiRoutes);
  app.use(webRoutes);
};
