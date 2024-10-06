import mongoose from "mongoose"
 const  userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
     admin:{
        type:Boolean,
        default:false
     }
 },{timestamps:true})
  const Users = mongoose.models.user || mongoose.model("user",userSchema)
   export default Users;

//  const user = new Users({name:"John Doe", password:"password123", email:"johndoe@example.com"})