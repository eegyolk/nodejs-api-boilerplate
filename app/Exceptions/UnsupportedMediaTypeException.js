class UnsupportedMediaTypeException {
  constructor(status, error = null) {
    this.status = status;
    this.error = error;
  }

  getStatus() {
    return this.status;
  }

  getErrors() {
    return (
      this.error ||
      'The server refuses to accept the request because the payload format is in an unsupported format.'
    );
  }

  getTitle() {
    return 'UnsupportedMediaType';
  }

  getCode() {
    return 'ER_UNSUPPORTED_MEDIA_TYPE';
  }
}

module.exports = UnsupportedMediaTypeException;
