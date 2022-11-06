import NextAuth, { NextAuthOptions, DefaultUser, DefaultSession } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient, Role } from "@prisma/client";
import bcrypt from "bcrypt";

declare module "next-auth" {
  interface User extends DefaultUser {
    role: Role;
  }
  interface Session extends DefaultSession {
    user: User;
  }
}

const prisma = new PrismaClient();

export const authOptions: NextAuthOptions = {
  session: { strategy: "jwt" },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_PROVIDER_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_PROVIDER_CLIENT_SECRET || "",
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Username", type: "email" },
        password: { label: "Password", type: "password" },
      },
      type: "credentials",
      async authorize(credentials) {
        if (!credentials || (!credentials.email && !credentials.password)) {
          return null;
        }

        // TODO: find user in database
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!user) return null;

        // TODO: verify password
        const isCorrectPassword = await bcrypt.compare(credentials.password, user.password);
        if (!isCorrectPassword) return null;

        return user;
      },
    }),
  ],

  pages: {
    signIn: "/auth/signin",
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user && user.role) {
        token.role = user.role;
      }

      return token;
    },
    async session({ session, user, token }) {
      if (token && token.role) {
        session.user.role = token.role as Role;
      } else {
        session.user.role = "USER";
      }

      return session;
    },
  },
};

export default NextAuth(authOptions);
