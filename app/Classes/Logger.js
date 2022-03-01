const { createLogger, format, transports } = require('winston');
const { combine, timestamp, json } = format;
require('winston-daily-rotate-file');

class Logger {
  constructor(config) {
    return createLogger({
      format: combine(timestamp(), json()),
      transports: [
        new transports.Console({
          level: 'error',
          handleExceptions: false,
          handleRejections: false,
        }),
        new transports.DailyRotateFile({
          dirname: config.dailyRotateFileDir,
          filename: 'server-%DATE%.log',
          datePattern: 'YYYYMMDD',
          zippedArchive: true,
          maxSize: config.dailyRotateFileMaxSize,
          maxFiles: config.dailyRotateFileMaxFiles,
          level: 'info',
          utc: true,
        }),
      ],
      exceptionHandlers: [
        new transports.File({
          filename: config.exceptionLogFile,
        }),
      ],
      rejectionHandlers: [
        new transports.File({
          filename: config.rejectionLogFile,
        }),
      ],
    });
  }
}

module.exports = Logger;
