const ErrorResponse = require('../../Response/ErrorResponse');
const HttpCodeConstant = require('../../Constants/HttpCodeConstant');
const { UniqueViolationError } = require('objection');
const UnknownException = require('../../Exceptions/UnknownException');
const ValidationException = require('../../Exceptions/ValidationException');

class BaseController {
  static errorHandler(res, err) {
    if (err instanceof ValidationException) {
      const response = new ErrorResponse(
        err.getStatus(),
        err.getCode(),
        err.getTitle(),
        err.getErrors()
      );
      res.status(response.getHttpCode()).json(response.getContent());
      return;
    }

    if (err instanceof UniqueViolationError) {
      const response = new ErrorResponse(
        HttpCodeConstant.INTERNAL_SERVER_ERROR,
        err.nativeError.code,
        err.name,
        err.nativeError.sqlMessage
      );
      res.status(response.getHttpCode()).json(response.getContent());
      return;
    }

    const response = new ErrorResponse(
      HttpCodeConstant.INTERNAL_SERVER_ERROR,
      UnknownException.getCode(),
      UnknownException.getTitle(),
      UnknownException.getErrors()
    );
    res.status(response.getHttpCode()).json(response.getContent());
  }
}

module.exports = BaseController;
