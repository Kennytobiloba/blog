import mongoose from "mongoose"

 const Connectdb = async () => {
     await mongoose.connect(process.env.MONGODB as string)
    //   const connect.connection.host;
    
        
 }
  export default Connectdb