const router = require("express").Router();
const authController = require("../controllers/AuthController");
const authMIddleware = require("../middlewares/authMIddleware");
router.post("/register", authController.register);
router.post("/login", authController.login);
router.get("/getUser", authMIddleware, authController.getUser);

module.exports = router;
