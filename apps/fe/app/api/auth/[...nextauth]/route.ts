import { NextAuthOptions } from 'next-auth';
import { JWT } from 'next-auth/jwt';
import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';

import { ROUTES } from '../../../../lib/constants';
import { fetcher } from '../../../../lib/fetcher';

async function refreshToken(token: JWT): Promise<JWT> {
  const res = await fetcher.post(
    '/user/refresh-token',
    {},
    {
      headers: {
        authorization: `Refresh ${token.backendTokens.refreshToken}`,
      },
    }
  );

  const response = await res.json();

  return {
    ...token,
    backendTokens: response,
  };
}

const authOptions: NextAuthOptions = {
  debug: true,
  providers: [
    CredentialsProvider({
      name: 'username',
      credentials: {
        username: {
          label: 'Username',
          type: 'text',
          placeholder: 'username',
        },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: 'password',
        },
      },
      async authorize(credentials, _req) {
        if (!credentials?.username || !credentials?.password) return null;
        const { username, password } = credentials;
        const res = await fetcher.post('/user/login', {
          username,
          password,
        });

        if (res.status == 401) {
          return null;
        }

        const user = await res.json();
        return user;
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) return { ...token, ...user };

      if (new Date().getTime() < token.backendTokens.expiresIn) return token;

      return await refreshToken(token);
    },

    async session({ token, session }) {
      session.user = token.user;
      session.backendTokens = token.backendTokens;

      return session;
    },
  },

  pages: {
    signIn: ROUTES.SIGN_IN,
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
