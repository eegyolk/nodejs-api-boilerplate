const { v4: uuidv4 } = require('uuid');

class ErrorResponse {
  constructor(httpCode, code, title, error, meta = null) {
    this.id = uuidv4();
    this.httpCode = httpCode;
    this.code = code;
    this.title = title;
    this.error = error;
    this.meta = meta;
  }

  getHttpCode() {
    return this.httpCode;
  }

  getContent() {
    const content = {
      id: this.id,
      status: this.httpCode,
      code: this.code,
      title: this.title,
      error: this.error,
    };

    if (this.error.hasOwnProperty('errors')) {
      delete content.error;
      content['errors'] = this.error['errors'];
    }

    if (this.meta) {
      content['meta'] = this.meta;
    }

    return content;
  }
}

module.exports = ErrorResponse;
