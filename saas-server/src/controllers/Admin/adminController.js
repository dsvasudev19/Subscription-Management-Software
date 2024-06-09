const { User } = require("./../../models");

const adminController = {
    getAll: async (req, res) => {
        try {
            const admins = await User.findAll({ where: { role: 'Admin' } });
            res.status(200).json(admins);
        } catch (error) {
            res.status(500).json({ message: "Error retrieving admins", error });
        }
    },

    getById: async (req, res) => {
        try {
            const { id } = req.params;
            const admin = await User.findOne({ where: { id, role: 'Admin' } });
            if (admin) {
                res.status(200).json(admin);
            } else {
                res.status(404).json({ message: "Admin not found" });
            }
        } catch (error) {
            res.status(500).json({ message: "Error retrieving admin", error });
        }
    },

    create: async (req, res) => {
        try {
            const { name, email, password, role } = req.body;
            if (role !== 'Admin') {
                return res.status(400).json({ message: "Role must be 'Admin' to create an admin" });
            }
            const newAdmin = await User.create({ name, email, password, role });
            res.status(201).json(newAdmin);
        } catch (error) {
            res.status(500).json({ message: "Error creating admin", error });
        }
    },

    update: async (req, res) => {
        try {
            const { id } = req.params;
            const { name, email, password, role } = req.body;
            const admin = await User.findOne({ where: { id, role: 'Admin' } });
            if (admin) {
                if (role && role !== 'Admin') {
                    return res.status(400).json({ message: "Cannot change role of an admin to a non-admin" });
                }
                await admin.update({ name, email, password });
                res.status(200).json(admin);
            } else {
                res.status(404).json({ message: "Admin not found" });
            }
        } catch (error) {
            res.status(500).json({ message: "Error updating admin", error });
        }
    },

    delete: async (req, res) => {
        try {
            const { id } = req.params;
            const admin = await User.findOne({ where: { id, role: 'Admin' } });
            if (admin) {
                await admin.destroy();
                res.status(204).json();
            } else {
                res.status(404).json({ message: "Admin not found" });
            }
        } catch (error) {
            res.status(500).json({ message: "Error deleting admin", error });
        }
    }
};

module.exports = adminController;
