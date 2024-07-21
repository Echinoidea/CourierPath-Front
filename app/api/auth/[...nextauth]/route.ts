
import NextAuth, { Session } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  session: {
    strategy: 'jwt',
  },

  pages: {
    signIn: '/',
  },

  providers: [
    {
      id: "uber",
      name: "Uber",
      type: "oauth",
      authorization: "https://login.uber.com/oauth/v2/authorize?client_id=5poXpUtXrtDajHf7dtucIIZr6u2pLlEJ&response_type=code&redirect_uri=<REDIRECT_URI>",
      token: "https://kauth.kakao.com/oauth/token",
      userinfo: "https://kapi.kakao.com/v2/user/me",
      profile(profile) {
        return {
          id: profile.id,
          name: profile.kakao_account?.profile.nickname,
          email: profile.kakao_account?.email,
          image: profile.kakao_account?.profile.profile_image_url,
        }
      },
    }
  ]
});


export { handler as GET, handler as POST };
