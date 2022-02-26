class BaseService {
  static resolveLinks(url, type, id) {
    return `${url}/api/${type}/${id}`;
  }
}

module.exports = BaseService;
