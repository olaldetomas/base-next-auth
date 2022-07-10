import NextAuth, { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { saveUser } from '../../../lib/api';

const providers = [
  GoogleProvider({
    clientId: process.env.GOOGLE_ID,
    clientSecret: process.env.GOOGLE_SECRET,
  }),
];

const callbacks = {
  async session({ session }) {
    if (!session) return;
    saveUser(session.user);
    return session;
  },
};

const options: NextAuthOptions = {
  providers,
  callbacks,
  secret: process.env.NEXTAUTH_SECRET,
};

export default (req, res) => NextAuth(req, res, options);
