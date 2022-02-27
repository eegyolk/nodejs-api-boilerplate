class CheckHeaderMiddleware {
  static execute(req, res) {
    const { headers } = req;

    next();
  }
}

module.exports = CheckHeaderMiddleware;
