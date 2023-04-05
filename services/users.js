const Users = require("../dal/users");

class UsersService {
  async login(username, password) {
    return await Users.verifyUser(username, password);
  }

  async register(username, password, imageUrl) {
    return await Users.create(username, password, imageUrl);
  }
}

module.exports = UsersService;
