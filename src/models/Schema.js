import mongoose, { mongo } from "mongoose";
const UserSchena=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    avatar:{type:String,required:true},
    githubUsername:{type:String}

},{timestamps:true})

export default mongoose.models.User || mongoose.model("User",UserSchena)