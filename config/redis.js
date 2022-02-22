module.exports = {
  host: process.env.REDIS_HOST || '127.0.0.1',
  password: process.env.REDIS_PASSWORD || null,
  port: process.env.REDIS_PORT || 6379,
};
