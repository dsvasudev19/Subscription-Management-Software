const {Admin}=require("../../models")
const bcrypt=require("bcrypt")

const login=async(req,res,next)=>{
    try {
        const admin=await Admin.findOne({
            where:{
                email:req.body.email
            }
        })
        if(admin){
            const isTrue=bcrypt.compareSync(req.body.password,admin.password)
            if(isTrue){
                return res.status(200).json({
                    success:true,message:"Successfully Logged in the Admin",data:{
                        user:admin,
                    }
                })
            }else{
                return res.status(401).json({
                    success:false,message:"Incorrect credentials"
                })
            }
        }else{
            return res.status(404).json({success:false,message:"Incorrect credential.No user found"})
        }
    } catch (error) {
        console.log(error);
        next(error);
    }
}

const register=async(req,res,next)=>{
    try {
        const admin=await Admin.create(req.body);
        if(admin){
            return res.status(200).json({success:true,message:"Successfully create the admin"})
        }
    } catch (error) {
        console.log(error);
        next(error);
    }
}




module.exports={
    login
}