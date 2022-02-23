const EventEmitter = require('events');

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: process.env.DB_HOST || '127.0.0.1',
      port: process.env.DB_PORT || 5432,
      database:
        process.env.DB_DATABASE ||
        new EventEmitter().emit('error', new Error('DB_DATABASE is missing!')),
      user:
        process.env.DB_USERNAME ||
        new EventEmitter().emit('error', new Error('DB_USERNAME is missing!')),
      password:
        process.env.DB_PASSWORD ||
        new EventEmitter().emit('error', new Error('DB_PASSWORD is missing!')),
    },
    migrations: {
      directory: '../database/migrations',
    },
    seeds: {
      directory: '../database/seeds',
    },
  },
  production: {
    client: 'pg',
    connection: {
      host: process.env.DB_HOST || '127.0.0.1',
      port: process.env.DB_PORT || 5432,
      database:
        process.env.DB_DATABASE ||
        new EventEmitter().emit('error', new Error('DB_DATABASE is missing!')),
      user:
        process.env.DB_USERNAME ||
        new EventEmitter().emit('error', new Error('DB_USERNAME is missing!')),
      password:
        process.env.DB_PASSWORD ||
        new EventEmitter().emit('error', new Error('DB_PASSWORD is missing!')),
    },
    migrations: {
      directory: '../database/migrations',
    },
    seeds: {
      directory: '../database/seeds',
    },
  },
};
