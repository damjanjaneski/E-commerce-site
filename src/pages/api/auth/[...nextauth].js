import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: process.env.NEXT_PUBLIC_API_URL,
  },
  secret: process.env.JWT_SECRET,
};

export default NextAuth(authOptions);
