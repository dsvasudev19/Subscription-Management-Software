const router=require("express").Router();
const authController=require("./../../controllers/Admin/AdminAuth")

router.post("/login",authController.login)


module.exports=router;