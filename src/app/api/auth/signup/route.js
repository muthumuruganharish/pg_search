import { signupUser } from "@/controller/signupController";

export async function POST(request){
    return signupUser(request)
}