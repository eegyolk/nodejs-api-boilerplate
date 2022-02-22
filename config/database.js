const EventEmitter = require('events');

module.exports = {
  /** Defaut Database Connection Name */
  default: process.env.DB_CONNECTION || 'mysql',

  /** Database Connections */
  connections: {
    mysql: {
      driver: 'mysql',
      host: process.env.DB_HOST || '127.0.0.1',
      port: process.env.DB_PORT || 3306,
      database:
        process.env.DB_DATABASE ||
        new EventEmitter().emit('error', new Error('DB_DATABASE is missing!')),
      username:
        process.env.DB_USERNAME ||
        new EventEmitter().emit('error', new Error('DB_USERNAME is missing!')),
      password:
        process.env.DB_PASSWORD ||
        new EventEmitter().emit('error', new Error('DB_PASSWORD is missing!')),
      connectionTimeout: process.env.DB_CONNECTION_TIMEOUT || 30000,
      acquireConnectionTimeout:
        process.env.DB_ACQUIRE_CONNECTION_TIMEOUT || 15000,
      poolMinConnection: process.env.DB_POOL_MIN_CONNECTION || 0,
      poolMaxConnection: process.env.DB_POOL_MAX_CONNECTION || 10,
      poolAcquireTimeoutMillis:
        process.env.DB_POOL_ACQUIRE_TIMEOUT_MILLIS || 15000,
      poolCreateTimeoutMillis:
        process.env.DB_POOL_CREATE_TIMEOUT_MILLIS || 15000,
      poolDestroyTimeoutMillis:
        process.env.DB_POOL_DESTROY_TIMEOUT_MILLIS || 5000,
      poolIdleTimeoutMillis: process.env.DB_POOL_IDLE_TIMEOUT_MILLIS || 15000,
      poolReapIntervalMillis: process.env.DB_POOL_REAP_INTERVAL_MILLIS || 1000,
      poolCreateRetryIntervalMillis:
        process.env.DB_POOL_CREATE_RETRY_INTERVAL_MILLIS || 10,
      poolPropagateCreateError:
        process.env.DB_POOL_PROPAGATE_CREATE_ERROR || false,
    },
  },
};
