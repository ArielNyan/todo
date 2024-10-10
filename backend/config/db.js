import mongoose from "mongoose"
  export const connectDb = async () => {
  try{
    const conn = await mongoose.connect(process.env.MONGO_URI)
    console.log(`MongoDB Connected: ${conn.connection.host}`)

  }catch(e){
    console.log(e)
    process.exit(1)
  }
}
