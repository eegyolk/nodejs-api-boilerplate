const BadRequestException = require('../../Exceptions/BadRequestException');
const ErrorResponse = require('../../Response/ErrorResponse');
const HttpCodeConstant = require('../../Constants/HttpCodeConstant');
const UnknownException = require('../../Exceptions/UnknownException');
const UnsupportedMediaTypeException = require('../../Exceptions/UnsupportedMediaTypeException');

class BaseMiddleware {
  static errorHandler(req, res, err) {
    req.log.error(err);

    if (
      err instanceof BadRequestException ||
      err instanceof UnsupportedMediaTypeException
    ) {
      const response = new ErrorResponse(
        err.getStatus(),
        err.getCode(),
        err.getTitle(),
        err.getErrors()
      );

      res.set('Content-Type', 'application/vnd.api+json');
      res.status(response.getHttpCode()).json(response.getContent());
      return;
    }

    const response = new ErrorResponse(
      HttpCodeConstant.INTERNAL_SERVER_ERROR,
      UnknownException.getCode(),
      UnknownException.getTitle(),
      UnknownException.getErrors()
    );

    res.set('Content-Type', 'application/vnd.api+json');
    res.status(response.getHttpCode()).json(response.getContent());
  }
}

module.exports = BaseMiddleware;
