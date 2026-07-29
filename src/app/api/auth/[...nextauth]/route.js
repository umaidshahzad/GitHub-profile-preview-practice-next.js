import { dbConnect } from "@/lib/DbConnect";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import User from "@/models/Schema"
const handler=NextAuth({
    providers:[
        GithubProvider({
            clientId:process.env.ClientId,
            clientSecret:process.env.clientSecret

        })
    ],
    callbacks:{
        async signIn({user,profile,account}) {
            await dbConnect();
            const existingUser=await User.findOne({email:user.email})
            console.log("User",user)
            if(!existingUser){
                await User.create({
                    name:user.name,
                    email:user.email,
                    githubUsername:profile?.login,
                    avatar:user.image

                })

            }
            return true
            
        }

    }
})
export { handler as GET, handler as POST };