class ValidationException {
  constructor(validation, status) {
    this.validation = validation;
    this.status = status;
  }

  getStatus() {
    return this.status;
  }

  getErrors() {
    return this.validation.getErrors();
  }

  getTitle() {
    return 'UnprocessableEntity';
  }

  getCode() {
    return 'ER_INVALID_REQUEST';
  }
}

module.exports = ValidationException;
