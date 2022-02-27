const Users = require('../../Models/Lab15Soln/Users');

class UsersRepository {
  static async createUser(attributes, connection) {
    const { name, email, password } = attributes;

    return await Users.query(connection).insert({
      name,
      email,
      password,
    });
  }

  static async getUser(id, connection) {
    return await Users.query(connection).findById(id);
  }
}

module.exports = UsersRepository;
