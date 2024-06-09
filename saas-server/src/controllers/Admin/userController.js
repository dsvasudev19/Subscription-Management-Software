const { User } = require("./../../models");

const userController = {
    
    getAll: async (req, res) => {
        try {
            const users = await User.findAll();
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({ message: "Error retrieving users", error });
        }
    },

    getById: async (req, res) => {
        try {
            const { id } = req.params;
            const user = await User.findByPk(id);
            if (user) {
                res.status(200).json(user);
            } else {
                res.status(404).json({ message: "User not found" });
            }
        } catch (error) {
            res.status(500).json({ message: "Error retrieving user", error });
        }
    },

    create: async (req, res) => {
        try {
            const { name, email, password } = req.body;
            const newUser = await User.create({ name, email, password });
            res.status(201).json(newUser);
        } catch (error) {
            res.status(500).json({ message: "Error creating user", error });
        }
    },

    update: async (req, res) => {
        try {
            const { id } = req.params;
            const { name, email, password } = req.body;
            const user = await User.findByPk(id);
            if (user) {
                await user.update({ name, email, password });
                res.status(200).json(user);
            } else {
                res.status(404).json({ message: "User not found" });
            }
        } catch (error) {
            res.status(500).json({ message: "Error updating user", error });
        }
    },

    delete: async (req, res) => {
        try {
            const { id } = req.params;
            const user = await User.findByPk(id);
            if (user) {
                await user.destroy();
                res.status(204).json();
            } else {
                res.status(404).json({ message: "User not found" });
            }
        } catch (error) {
            res.status(500).json({ message: "Error deleting user", error });
        }
    }
};

module.exports = userController;
