import {loginUser} from "@/controller/loginController"
export async function POST(request){
    return loginUser(request)
}