import User from "@/models/User";
import { connectDB } from "@/lib/mongodb";
import bcrypt from "bcrypt";

export async function signupUser(request) {
  try {
    await connectDB();

    const body = await request.json();
    const { name, email, password } = body;
    if (!email || !name || !password) {
      return Response.json(
        {
          success: false,
          message: "All field are required",
        },
        {
          status: 400,
        },
      );
    }

    const existingUser=await User.findOne({email})

    if(existingUser){
        return Response.json({
            success:false,
            message:"user already exists"
        },{
            status:400
        })
    }

    const hash=await bcrypt.hash(password,10)

    const user=await User.create({
        name,
        email,
        password:hash
    })
    return Response.json({
        success:true,
        message:"account created"
    },{
        status:201
    })

  } catch (err) {
    console.log("signup error: ",err)

    return Response.json({

        success:false,
        message:"server error"

    },{
        status:500
    })



  }
}
