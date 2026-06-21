import User from "@/models/User";
import { connectDB } from "@/lib/mongodb";
import bcrypt from "bcrypt";

export  async function loginUser(request){

    try{

        await connectDB()
       const{email,password}=await request.json()
       const user= await User.findOne({email})

       if(!user){
        return Response.json({
            success:false,
            message:"no User Found"

        },{
            status:400
        })
       }

       const isMatch=await bcrypt.compare(password,user.password)
       if(!isMatch){
        return Response.json({
            success:false,
            message:"password mismatch"
        },{
            status:400
        })
       }
       else{
        return Response.json({
            success:true,
            message:"successfully Logged in"
        },{
            status:200
        })
       }


    }
    catch(err){
        console.log(err)


    }
}