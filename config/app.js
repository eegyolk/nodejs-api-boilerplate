const EventEmitter = require('events');

module.exports = {
  name: process.env.APP_NAME || 'nodejs-api-boilerplate',
  version: process.env.APP_VERSION || '1.0.0',
  env: process.env.APP_ENV || 'local',
  secretKey:
    process.env.APP_SECRET_KEY ||
    new EventEmitter().emit('error', new Error('APP_SECRET_KEY is missing!')),
  url: process.env.APP_URL || 'http://localhost',
  port: process.env.APP_PORT || 3000,
  debug: process.env.APP_DEBUG || false,
};
