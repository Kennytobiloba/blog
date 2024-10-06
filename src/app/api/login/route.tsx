  import { NextResponse } from "next/server";
import Connectdb from "../Connectdb/Connectdb";
import Users from "../model/userSchema";
import bcrypt from 'bcrypt';


 export async function POST(request: Request){
    await Connectdb();
     const {email,password} = await request.json()
    //   console.log(email,password)
      const user =  await Users.findOne({email} )
      if(!user){
       return  NextResponse.json({error:"user not found"}, {status:404})
      }
      const correctPassword = await bcrypt.compare(password, user?.password)
       if(!correctPassword){
        return NextResponse.json({error:"incorrect Password"}, {status:404})
       }
      
    return NextResponse.json(user, {status:200})
 }