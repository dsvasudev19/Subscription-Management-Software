const express = require("express");
const router = express.Router();
const planController = require("../controllers/planController");
const authorize = require("../middlewares/autherize");

router.post("/",  planController.addPlan);
router.put("/:id",  planController.updatePlan);
router.delete("/:id", planController.deletePlan);
router.get("/",planController.getAllPlans);
router.get("/:id", planController.getPlanById);
router.post(
  "/plan/feature",
  planController.addSingleFeature
);

module.exports = router;
