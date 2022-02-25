const Validator = require('validatorjs');

const HttpCodeConstant = require('../Constants/HttpCodeConstant');
const ValidationException = require('../Exceptions/ValidationException');

class Validation {
  constructor(data, rules, messages = null) {
    this.validator = new Validator(data, rules, messages);
  }

  validate(status = HttpCodeConstant.UNPROCESSABLE_ENTITY) {
    if (this.validator.passes() && !this.validator.fails()) {
      return true;
    } else {
      this.errors = this.validator.errors;
      throw new ValidationException(this, status);
    }
  }

  getErrors() {
    return this.errors;
  }
}

module.exports = Validation;
