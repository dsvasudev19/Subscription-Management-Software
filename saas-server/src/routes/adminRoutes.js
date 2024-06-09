const router=require("express").Router();


const adminRoutes=require("./Admin/adminRoutes")
router.use("/admin",adminRoutes)

const userRoute=require("./Admin/userRoutes")
router.use("/user",userRoute)

const planRoutes=require("./planRoutes")
router.use('/plan',planRoutes)

const authRoutes=require("./Admin/authRoutes")
router.use("/auth",authRoutes)

module.exports=router;