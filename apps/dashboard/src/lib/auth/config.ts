import { betterAuth } from "better-auth";
import { env } from "@repo/env/server";

const isProd = process.env.NODE_ENV === "production";

export const auth = betterAuth({
  baseURL: env.BETTER_AUTH_URL,
  secret: env.BETTER_AUTH_SECRET,

  session: {
    cookieCache: {
      enabled: true,
      maxAge: 60 * 60 * 24 * 7,
      strategy: "jwt",
      refreshCache: true,
    },
  },

  socialProviders: {
    google: {
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
      redirectURI: `${env.BETTER_AUTH_URL}/api/auth/callback/google`,
    },
  },

  advanced: {
    useSecureCookies: isProd,
    defaultCookieAttributes: {
      sameSite: isProd ? "none" : "lax",
      secure: isProd,
      httpOnly: true,
      domain: `.${env.WEB_APP_HOST.split("://")[1]}`,
      path: "/",
    },
  },
});
