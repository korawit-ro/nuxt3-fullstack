import CredentialsProvider from "@auth/core/providers/credentials";
import type { AuthConfig } from "@auth/core/types";
import { NuxtAuthHandler } from "#auth";

// The #auth virtual import comes from this module. You can use it on the client
// and server side, however not every export is universal. For example do not
// use sign-in and sign-out on the server side.

const runtimeConfig = useRuntimeConfig();

// Refer to Auth.js docs for more details
export const authOptions: AuthConfig = {
  secret: runtimeConfig.authJs.secret,
  pages: {
    signIn: "/login"
  },
  providers: [
    CredentialsProvider({
      credentials: {},
      authorize: async (credentials, request) => {
        const { email, password } = credentials as any;

        const user = { id: 1, name: "Tester", email: "a@a.co" };
        return { id: user.id, name: user.name, email: user.email } as any;
      },
    }),
  ],
};

export default NuxtAuthHandler(authOptions, runtimeConfig);
