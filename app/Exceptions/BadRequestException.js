class BadRequestException {
  static getErrors() {
    return 'The expected header is missing or invalid.';
  }

  static getTitle() {
    return 'BadRequest';
  }

  static getCode() {
    return 'ER_BAD_REQUEST';
  }
}

module.exports = BadRequestException;
