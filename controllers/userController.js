const User = require("../model/userModel");
const bcrypt = require("bcrypt");

exports.createUser = async (req, res, next) => {
  const { name, email, password, avatar } = req.body;

  const hashPassword = await bcrypt.hash(password, 12);

  const user = await User.create({ ...req.body, password: hashPassword });

  res.status(200).json({
    success: true,
    user,
  });
};
