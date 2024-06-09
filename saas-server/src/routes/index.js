const router = require("express").Router();
const planRoutes = require("./planRoutes");
const authRoutes = require("./authRoutes");
const userRoutes = require("./userRoutes");
const couponRoutes = require("./couponRoutes");
const authMIddleware = require("../middlewares/authMIddleware");
const paymentRoutes=require("./../routes/paymentRoutes")

router.use("/auth", authRoutes);
// router.use("/plans", authMIddleware, planRoutes);
router.use("/user", userRoutes);
router.use("/coupon", authMIddleware, couponRoutes);

router.use("/payment",paymentRoutes);


module.exports = router;
