const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { User } = require("../models");

const register = async (req, res, next) => {
  const { name, email, phone, password, role } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 8);

  try {
    const user = await User.create({
      name,
      email,
      phone,
      password: hashedPassword,
      role,
    });
    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
    if (user && (await bcrypt.compare(password, user.password))) {
      const accessToken = jwt.sign(
        { id: user.id, role: user.role },
        process.env.JWT_TOKEN,
        { expiresIn: "1h" }
      );
      res.status(200).json({ success: true, message: "Login sucessfull", data:{token:accessToken,user:user} });
    } else {
      res
        .status(401)
        .json({ sucecss: false, message: "Email or password incorrect" });
    }
  } catch (error) {
    next(error);
  }
};

const logout = (req, res) => {
  res.json({ message: "Logout successful" });
};

const getUser = async (req, res, next) => {
  const user = await User.findByPk(req.user.id);
  res.status(200).json({ success: true, message: "user found", user });
};

module.exports = {
  register,
  login,
  logout,
  getUser,
};
