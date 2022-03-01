const path = require('path');

module.exports = {
  dailyRotateFileDir:
    process.env.LOG_DAILY_ROTATE_FILE_DIR ||
    path.join(process.env.PWD, '/storage/logs'),
  dailyRotateFileMaxSize: process.env.LOG_DAILY_ROTATE_FILE_MAX_SIZE || '20m',
  dailyRotateFileMaxFiles: process.env.LOG_DAILY_ROTATE_FILE_MAX_FILES || '14d',
  exceptionLogFile:
    process.env.LOG_EXCEPTION_FILE ||
    path.join(process.env.PWD, '/storage/logs/exceptions.log'),
  rejectionLogFile:
    process.env.LOG_REJECTION_FILE ||
    path.join(process.env.PWD, '/storage/logs/rejections.log'),
};
