class BadRequestException {
  constructor(status, error = null) {
    this.status = status;
    this.error = error;
  }

  getStatus() {
    return this.status;
  }

  getErrors() {
    return this.error || 'The expected header is missing or invalid.';
  }

  getTitle() {
    return 'BadRequest';
  }

  getCode() {
    return 'ER_BAD_REQUEST';
  }
}

module.exports = BadRequestException;
