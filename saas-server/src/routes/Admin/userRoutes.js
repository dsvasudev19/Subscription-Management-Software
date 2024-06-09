const express = require("express");

const userController=require("./../../controllers/Admin/userController")

const router = express.Router();

router.get("/users", userController.getAll);
router.get("/users/:id", userController.getById);
router.post("/users", userController.create);
router.put("/users/:id", userController.update);
router.delete("/users/:id", userController.delete);

module.exports = router;
