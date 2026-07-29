import { NextResponse } from "next/server";
import User from '@/models/Schema'
import { dbConnect } from "@/lib/DbConnect";
import { getServerSession } from "next-auth";
export async function GET(){
const session=getServerSession()
console.log("session",session)
if(!session || !session.user){
    return NextResponse.json({error:"Unauthorised"},{status:401});
    
}
await dbConnect()
const DbUser=await User.findOne({email:session.user.email});
return NextResponse.json({profile:DbUser},{status:200})

}
