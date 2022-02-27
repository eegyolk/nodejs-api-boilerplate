const BaseController = require('./BaseController');
const UsersService = require('../../Services/UsersService');

class UsersController extends BaseController {
  static async createUser(req, res) {
    const { body, app } = req;
    const { databaseConnections, config } = app.locals;

    try {
      const response = await UsersService.createUser(
        body,
        databaseConnections,
        config.app.url
      );

      res.set('Location', response.getLocation);
      res.status(response.getHttpCode()).json(response.getContent());
    } catch (err) {
      BaseController.errorHandler(res, err);
    }
  }

  static async getUser(req, res) {
    const { params, app } = req;
    const { databaseConnections, config } = app.locals;

    try {
      const response = await UsersService.getUser(
        params,
        databaseConnections,
        config.app.url
      );

      res.set('Location', response.getLocation);
      res.status(response.getHttpCode()).json(response.getContent());
    } catch (err) {
      BaseController.errorHandler(res, err);
    }
  }
}

module.exports = UsersController;
