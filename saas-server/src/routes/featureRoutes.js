const express = require("express");
const router = express.Router();
const featureController = require("../controllers/FeatureController");
const authorize = require("../middlewares/autherize");

router.get(
  "/features",
  authorize("ViewFeature"),
  featureController.getAllFeatures
);
router.get(
  "/features/:id",
  authorize("ViewFeature"),
  featureController.getFeatureById
);
router.post(
  "/features",
  authorize("CreateFeature"),
  featureController.addFeature
);
router.put(
  "/features/:id",
  authorize("UpdateFeature"),
  featureController.updateFeature
);
router.delete(
  "/features/:id",
  authorize("DeleteFeature"),
  featureController.deleteFeature
);

module.exports = router;
