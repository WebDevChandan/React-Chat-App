import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

import User from '@models/user';
import { connectToDB } from '@utils/database';

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
    callbacks: {
        async session({ session }) { //This is session Data
            //Here session already came with some keys {name, email, image}. 
            
            //Stored userId from mongoDB to sessionUser. Here, we're getting all data from mongoDB
            const sessionUser = await User.findOne({ email: session?.user?.email }); //This is mongoDB Data

            session.user.id = sessionUser._id.toString();

            //Here session returning with keys {name, email, image, _id}
            return session;
        },
        async signIn({user, account, profile }) {
            try {
                await connectToDB();

                //Check if Admin Already existed
                const userExists = await User.findOne({ email: profile.email });

                //if not, create a new document and save admin in mongoDB
                if (!userExists) {
                    await User.create({
                        email: profile.email,
                        username: profile.name.replace(" ", " ").toLowerCase(),
                        image: profile.picture,
                    });
                }


                return true;

            } catch (error) {
                console.log("Error checkng if user exists: ", error.message);
                return false;
            }
        }
    }
});

export {handler as GET, handler as POST}