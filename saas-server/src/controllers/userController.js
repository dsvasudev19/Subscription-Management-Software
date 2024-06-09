const { User, Subscription } = require("../models");
const bcrypt = require("bcrypt");

const createUser = async (req, res) => {
  try {
    const { username, email } = req.body;
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }
    const randomPassword = Math.random().toString(36).slice(-8);
    const hashedPassword = await bcrypt.hash(randomPassword, 10);
    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
    });
    if (req.user.role === "Admin") {
      const subscription = await Subscription.findOne({
        where: { userId: req.user.id },
      });
      await subscription.decrement("count", { by: 1 });
    }
    res.status(201).json({ newUser, randomPassword });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { username, email } = req.body;

    const user = await User.findByPk(id);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    await user.update({ username, email });

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findByPk(id);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    await user.destroy();

    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getUsers = async (req, res, next) => {
  try {
    let users = [];
    if (req.user.role === "SuperAdmin") {
      users = await User.findAll();
    } else {
      users = await User.findAll({ where: { role: "User" } });
    }
    res.status(200).json({ success: true, message: "Users found successfully", users });
  } catch (error) {
    next(error);
  }
};

const getUsersByRole = async (req, res, next) => {
  try {
    const users = await User.findAll({ where: { role: req.params.role } });
    res.status(200).json({ success: true, message: "Users found successfully", users });
  } catch (error) {
    next(error);
  }
};

const getUserById = async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

module.exports = { createUser, updateUser, deleteUser, getUsers, getUsersByRole, getUserById };
    