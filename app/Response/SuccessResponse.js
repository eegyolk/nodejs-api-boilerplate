class SuccessResponse {
  constructor(httpCode, links, data, relationships = null, meta = null) {
    this.httpCode = httpCode;
    this.links = links;
    this.data = data;
    this.relationships = relationships;
    this.meta = meta;
  }

  getHttpCode() {
    return this.httpCode;
  }

  getContent() {
    const content = { links: this.links, data: this.data };

    if (this.relationships) {
      content['relationships'] = this.relationships;
    }

    if (this.meta) {
      content['meta'] = this.meta;
    }

    return content;
  }

  getLocation() {
    return this.links;
  }
}

module.exports = SuccessResponse;
