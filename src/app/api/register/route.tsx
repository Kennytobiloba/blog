
import { NextResponse } from "next/server"
 import Connectdb from "../Connectdb/Connectdb"
import Users from "../model/userSchema"
import bcrypt from "bcrypt"

 export async function POST(request:Request){ 
     await  Connectdb()
     const {name, email, password} = await request.json()
      const existUser = await Users.findOne({email}, {name,password})
      if(existUser){
        return NextResponse.json({error:"user already exist"}, {status:404})
      }
      const hashPassword = await bcrypt.hash(password,10)
       const data = await new Users({name,email,password:hashPassword}).save()
     
    //   console.log(name, email, password)
      
 return NextResponse.json({message:"Registration Sucefull"}, {status:200})
 }