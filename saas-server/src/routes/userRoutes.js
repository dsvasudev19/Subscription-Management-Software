const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const authorize = require("../middlewares/autherize");

router.post("/", 
    // authorize("CreateUser"),
     userController.createUser);
router.put("/:id",
    //  authorize("UpdateUser"),
      userController.updateUser);
router.delete("/:id", 
    // authorize("DeleteUser"),
     userController.deleteUser);
router.get("/", 
    // authorize("ViewUser"),
     userController.getUsers);
router.get("/role/:role", 
    // authorize("ViewUser"), 
    userController.getUsersByRole);
router.get("/:id",
    //  authorize("ViewUser"), 
     userController.getUserById);

module.exports = router;
