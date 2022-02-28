const BadRequestException = require('../../Exceptions/BadRequestException');
const BaseMiddleware = require('./BaseMiddleware');
const HttpCodeConstant = require('../../Constants/HttpCodeConstant');
const UnsupportedMediaTypeException = require('../../Exceptions/UnsupportedMediaTypeException');

class CheckHeaderMiddleware extends BaseMiddleware {
  static accept(req, res, next) {
    const { headers } = req;

    try {
      if (typeof headers['accept'] !== 'undefined') {
        if (headers['accept'] === 'application/vnd.api+json') {
          next();
          return;
        }
      }

      throw new BadRequestException(HttpCodeConstant.BAD_REQUEST);
    } catch (err) {
      BaseMiddleware.errorHandler(res, err);
    }
  }

  static contentType(req, res, next) {
    const { headers } = req;

    try {
      if (typeof headers['content-type'] !== 'undefined') {
        if (headers['content-type'] === 'application/vnd.api+json') {
          next();
          return;
        }
      }

      throw new UnsupportedMediaTypeException(
        HttpCodeConstant.UNSUPPORTED_MEDIA_TYPE
      );
    } catch (err) {
      BaseMiddleware.errorHandler(res, err);
    }
  }
}

module.exports = CheckHeaderMiddleware;
