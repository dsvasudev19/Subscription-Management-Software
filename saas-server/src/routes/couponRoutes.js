const express = require("express");
const router = express.Router();
const couponController = require("../controllers/CouponController");
const authorize = require("../middlewares/autherize");
router.get("/", authorize("ViewCoupon"), couponController.getAllCoupons);

router.get("/:id", authorize("ViewCoupon"), couponController.getCouponById);

router.post("/", authorize("CreateCoupon"), couponController.createCoupon);

router.put("/:id", authorize("UpdateCoupon"), couponController.updateCoupon);

router.delete("/:id", authorize("DeleteCoupon"), couponController.deleteCoupon);

module.exports = router;
