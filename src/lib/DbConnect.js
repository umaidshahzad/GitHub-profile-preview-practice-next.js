import mongoose, { mongo } from "mongoose"

export const dbConnect=async()=>{
if(mongoose.connection.readyState>=1){
    return
}
try {
    await mongoose.connect(process.env.DB_URI)
    console.log("DB COnnection Successful")
    
} catch (e) {
    console.error(e)
}
}