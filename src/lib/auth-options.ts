import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { prisma } from "@/lib/prisma";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async signIn({ user, account, profile }) {
      // Check if user exists, if not create them
      if (user.email) {
        const existingUser = await prisma.user.findUnique({
          where: { email: user.email }
        });

        if (!existingUser) {
          // Create new user from Google profile
          await prisma.user.create({
            data: {
              email: user.email,
              name: user.name || 'Google User',
              passwordHash: '', // No password for OAuth users
              role: 'USER',
            }
          });
        }
      }
      return true;
    },
    async jwt({ token, user, account }) {
      if (account && user) {
        // Get user from database to include role
        const dbUser = await prisma.user.findUnique({
          where: { email: user.email! }
        });
        if (dbUser) {
          token.userId = dbUser.id;
          token.role = dbUser.role;
        }
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        (session.user as any).id = token.userId;
        (session.user as any).role = token.role;
      }
      return session;
    },
    async redirect({ url, baseUrl }) {
      // Pass the original destination (url) as a query parameter to our callback
      // This allows google-callback/route.ts to redirect the user to the correct page after setting the cookie
      const targetUrl = url.startsWith(baseUrl) ? url : baseUrl + '/dashboard';
      const encodedTarget = encodeURIComponent(targetUrl);
      return `${baseUrl}/api/auth/google-callback?callbackUrl=${encodedTarget}`;
    }
  }
};
