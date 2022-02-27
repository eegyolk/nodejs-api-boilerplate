class UnsupportedMediaTypeException {
  static getErrors() {
    return 'The server refuses to accept the request because the payload format is in an unsupported format.';
  }

  static getTitle() {
    return 'UnsupportedMediaType';
  }

  static getCode() {
    return 'ER_UNSUPPORTED_MEDIA_TYPE';
  }
}

module.exports = UnsupportedMediaTypeException;
