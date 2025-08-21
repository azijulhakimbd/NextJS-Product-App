import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    // ✅ Google Login
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

    // ✅ Credentials Login
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Example: match with DB user
        if (
          credentials.email === "test@example.com" &&
          credentials.password === "123456"
        ) {
          return { id: 1, name: "Test User", email: "test@example.com" };
        }
        return null; 
      },
    }),
  ],

  pages: {
    signIn: "/login", 
  },

  callbacks: {
    async redirect({ url, baseUrl }) {
      return "/products"; 
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
