const BaseService = require('./BaseService');
const HttpCodeConstant = require('../Constants/HttpCodeConstant');
const SuccessResponse = require('../Response/SuccessResponse');
const UsersRepository = require('../Repositories/Lab15Soln/UsersRepository');
const Validation = require('../Classes/Validation');

class UsersService extends BaseService {
  static linkType = 'users';

  static async createUser(body, databaseConnections, url) {
    const rules = {
      name: 'required',
      email: 'required|email',
      password: 'required',
    };

    const validation = new Validation(body, rules);
    validation.validate();

    const attributes = {
      name: body.name,
      email: body.email,
      password: body.password,
    };

    const data = await UsersRepository.createUser(
      attributes,
      databaseConnections.mysql
    );

    return new SuccessResponse(
      HttpCodeConstant.CREATED,
      this.resolveLinks(url, this.linkType, data.id),
      data
    );
  }

  static async getUser(params, databaseConnections, url) {
    const rules = {
      id: 'required|integer',
    };

    const validation = new Validation(params, rules);
    validation.validate();

    const data = await UsersRepository.getUser(
      params.id,
      databaseConnections.mysql
    );

    return new SuccessResponse(
      HttpCodeConstant.OK,
      this.resolveLinks(url, this.linkType, params.id),
      typeof data !== 'undefined' ? data : null
    );
  }
}

module.exports = UsersService;
