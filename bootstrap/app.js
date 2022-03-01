require('dotenv').config();

const { v4: uuidv4 } = require('uuid');

const Database = require('../app/Classes/Database');
const Logger = require('../app/Classes/Logger');
const MethodConstant = require('../app/Constants/MethodConstant');

const appConfig = require('../config/app'),
  databaseConfig = require('../config/database'),
  loggerConfig = require('../config/logger'),
  redisConfig = require('../config/redis'),
  telegramConfig = require('../config/telegram');

const apiRoutes = require('../routes/api'),
  webRoutes = require('../routes/web');

module.exports.config = {
  app: appConfig,
  database: databaseConfig,
  logger: loggerConfig,
  redis: redisConfig,
  telegram: telegramConfig,
};

module.exports.extendApp = function ({ app }) {
  app.locals.databaseConnections = new Database(
    this.config.database
  ).createConnections();
  app.locals.config = this.config;

  // Midddleware to setup logger
  app.use(function (req, res, next) {
    req.log = new Logger(req.app.locals.config.logger).child({
      reqId: uuidv4(),
    });

    const { method, headers, body, query, originalUrl } = req;
    const logMessage = {
      method,
      headers,
      endpoint: originalUrl,
    };

    // TODO:: Add ip here, implementation may vary based on setup

    if (MethodConstant.POST === method || MethodConstant.PATCH === method) {
      logMessage['body'] = body;
    } else if (
      MethodConstant.GET === method ||
      MethodConstant.DELETE === method
    ) {
      logMessage['query'] = query;
    }

    req.log.info(logMessage);

    next();
  });

  app.use('/api', apiRoutes);
  app.use(webRoutes);
};
