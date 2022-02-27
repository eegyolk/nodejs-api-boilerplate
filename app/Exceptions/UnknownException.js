class UnknownException {
  static getErrors() {
    return 'Something went wrong, please try again later.';
  }

  static getTitle() {
    return 'UnknownError';
  }

  static getCode() {
    return 'ER_UNKNOWN';
  }
}

module.exports = UnknownException;
