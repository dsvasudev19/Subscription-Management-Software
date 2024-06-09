const express = require("express");
const adminController = require("./../../controllers/Admin/adminController");

const router = express.Router();

router.get("/admins", adminController.getAll);
router.get("/admins/:id", adminController.getById);
router.post("/admins", adminController.create);
router.put("/admins/:id", adminController.update);
router.delete("/admins/:id", adminController.delete);

module.exports = router;
