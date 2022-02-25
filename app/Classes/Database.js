const DatabaseConstant = require('../Constants/DatabaseConstant');

class Database {
  constructor(config) {
    this.config = config;
  }

  createConnections() {
    const { uses, connections } = this.config;
    const usedConnections = {};

    uses.forEach(async (connectionName) => {
      const config = connections[connectionName.trim()];

      if (config.driver === DatabaseConstant.DRIVER.MYSQL) {
        usedConnections[connectionName.trim()] = mysql.call(this, config);
      } else if (config.driver === DatabaseConstant.DRIVER.PG) {
        usedConnections[connectionName.trim()] = pg.call(this, config);
      }
    });

    return usedConnections;
  }
}

function mysql(config) {
  return require('knex')({
    client: config.driver,
    connection: {
      host: config.host,
      port: config.port,
      database: config.database,
      user: config.username,
      password: config.password,
      connectionTimeout: config.connectionTimeout,
    },
    acquireConnectionTimeout: config.acquireConnectionTimeout,
    pool: {
      min: config.poolMinConnection,
      max: config.poolMaxConnection,
      acquireTimeoutMillis: config.poolAcquireTimeoutMillis,
      createTimeoutMillis: config.poolCreateTimeoutMillis,
      destroyTimeoutMillis: config.poolDestroyTimeoutMillis,
      idleTimeoutMillis: config.poolIdleTimeoutMillis,
      reapIntervalMillis: config.poolReapIntervalMillis,
      createRetryIntervalMillis: config.poolCreateRetryIntervalMillis,
      propagateCreateError: config.poolPropagateCreateError,
    },
  });
}

function pg(config) {
  return require('knex')({
    client: config.driver,
    connection: {
      host: config.host,
      port: config.port,
      database: config.database,
      user: config.username,
      password: config.password,
      connectionTimeout: config.connectionTimeout,
    },
    acquireConnectionTimeout: config.acquireConnectionTimeout,
    pool: {
      min: config.poolMinConnection,
      max: config.poolMaxConnection,
      acquireTimeoutMillis: config.poolAcquireTimeoutMillis,
      createTimeoutMillis: config.poolCreateTimeoutMillis,
      destroyTimeoutMillis: config.poolDestroyTimeoutMillis,
      idleTimeoutMillis: config.poolIdleTimeoutMillis,
      reapIntervalMillis: config.poolReapIntervalMillis,
      createRetryIntervalMillis: config.poolCreateRetryIntervalMillis,
      propagateCreateError: config.poolPropagateCreateError,
    },
  });
}

module.exports = Database;
