module.exports = {
  baseUrl: process.env.TELEGRAM_BASE_URL || 'https://api.telegram.org/',
  botToken: process.env.TELEGRAM_BOT_TOKEN || null,
  chatId: process.env.TELEGRAM_CHAT_ID || null,
};
