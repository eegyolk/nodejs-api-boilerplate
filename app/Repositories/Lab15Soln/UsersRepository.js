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
}

module.exports = UsersRepository;
