const router = require("express").Router();
const planRoutes = require("./planRoutes");
const authRoutes = require("./authRoutes");
const userRoutes = require("./userRoutes");
const couponRoutes = require("./couponRoutes");
const authMIddleware = require("../middlewares/authMIddleware");

router.use("/auth", authMIddleware, authRoutes);
// router.use("/plans", authMIddleware, planRoutes);
router.use("/user", authMIddleware, userRoutes);
router.use("/coupon", authMIddleware, couponRoutes);



module.exports = router;
