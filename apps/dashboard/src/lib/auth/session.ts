import { createServerFn } from "@tanstack/react-start";
import { auth } from "@/lib/auth/config";
import {
  getCookie,
  getRequestHeaders,
  setCookie,
} from "@tanstack/react-start/server";
import { USER_DETAILS } from "@repo/utils/const/cookie-name";
import { tryCatch } from "@repo/utils/try-catch";
import { signJWT, verifyJWT } from "@repo/utils/jwt";
import { userDetailsCookieSchema } from "@/utils/zod-schema/cookie-schema";

export const fetchSession = createServerFn().handler(async () => {
  const headers = getRequestHeaders();
  const session = await auth.api.getSession({ headers });

  return session;
});

/**
 * Returns the `userDetailsFromCookie`
 */
export const fetchUserDetailsCookie = createServerFn().handler(async () => {
  const cookie = getCookie(USER_DETAILS);

  if (!cookie) return null;

  const [err, data] = await tryCatch(verifyJWT(cookie));

  if (err) return null;

  const { email, name, phone, role, userId } = data;

  return { email, name, phone, role, userId };
});

export const setUserDetailsCookie = createServerFn()
  .validator(userDetailsCookieSchema)
  .handler(async ({ data }) => {
    const generatedTokenToStoreToClientCookie = await signJWT(data);

    setCookie(USER_DETAILS, generatedTokenToStoreToClientCookie);
  });
