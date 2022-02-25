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
}

module.exports = ValidationException;
