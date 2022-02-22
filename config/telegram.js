const EventEmitter = require('events');

module.exports = {
  baseUrl: process.env.TELEGRAM_BASE_URL || 'https://api.telegram.org/',
  botToken:
    process.env.TELEGRAM_BOT_TOKEN ||
    new EventEmitter().emit(
      'error',
      new Error('TELEGRAM_BOT_TOKEN is missing!')
    ),
  chatId:
    process.env.TELEGRAM_CHAT_ID ||
    new EventEmitter().emit('error', new Error('TELEGRAM_CHAT_ID is missing!')),
};
