import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
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

  secret: process.env.NEXTAUTH_SECRET,
  session: { strategy: "jwt" },

  pages: {
    signIn: "/login",
  },

  callbacks: {
    async redirect({ url, baseUrl }) {
      if (url.startsWith(baseUrl)) return url;
      return "/products";
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
