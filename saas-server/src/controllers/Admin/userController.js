const { User } = require("./../../models");

const userController = {
    
    getAll: async (req, res) => {
        try {
            const users = await User.findAll();
            res.status(200).json({success:true,message:"Successfully fetched the user details",data:users});
        } catch (error) {
            res.status(500).json({ message: "Error retrieving users", error });
        }
    },

    getById: async (req, res) => {
        try {
            const { id } = req.params;
            const user = await User.findByPk(id);
            if (user) {
                res.status(200).json({success:true,message:"Successfully fetched the user details",data:user});
            } else {
                res.status(404).json({success:false, message: "User not found" });
            }
        } catch (error) {
            res.status(500).json({ message: "Error retrieving user", error });
        }
    },

    create: async (req, res) => {
        try {
            const { name, email, password } = req.body;
            const newUser = await User.create({ name, email, password });
            res.status(201).json({success:true,message:"Successfully Created the user"});
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
                res.status(200).json({success:true,message:"Successfully Updated the user",data:user});
            } else {
                res.status(404).json({ message: "User not found" });
            }
        } catch (error) {
            res.status(500).json({ message: "Error updating user", error });
        }
    },

    delete: async (req, res,next) => {
        try {
            const { id } = req.params;
            const user = await User.findByPk(id);
            if (user) {
                await user.destroy();
                return res.status(200).json({success:true,message:"Successfully deleted the user"});
            } else {
                return res.status(404).json({ message: "User not found" });
            }
        } catch (error) {
            console.log(error)
            next(error);
        }
    }
};

module.exports = userController;
