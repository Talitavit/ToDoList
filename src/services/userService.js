const { User } = require("../models");
const hashPassword = require("../utils/hashPassword");

class UserService {
  async create({ username, email, password }) {
    const userExists = await User.findOne({ where: { email } });
    if (userExists) {
      return {
        message: "Usuário já cadastrado!",
        is_error: true,
      };
    }
    const hashedPassword = hashPassword(password);
    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    const userWithoutPassword = { ...newUser.toJSON(), password: undefined };
    return { response: userWithoutPassword, is_error: false };
  }
}

module.exports = new UserService();
