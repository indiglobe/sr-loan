import { createServerFn } from "@tanstack/react-start";
import {
  getCookie,
  setCookie,
  deleteCookie,
} from "@tanstack/react-start/server";
import { USER_DETAILS } from "@repo/utils/const/cookie-name";
import { tryCatch } from "@repo/utils/try-catch";
import { signJWT, verifyJWT, jwtPayloadSchema } from "@repo/utils/jwt";

/**
 * Retrieves user details from the user-details cookie.
 *
 * Reads the `USER_DETAILS` cookie, verifies its JWT, and returns the
 * user information contained in the verified JWT payload.
 *
 * @returns {Promise<{
 *   email: string;
 *   name: string;
 *   role: string;
 *   userId: string;
 *   employeeId: string;
 * } | null>} The verified user details, or `null` when the cookie is
 * missing or the JWT verification fails.
 * 
 * Usualy its returned vaue is called as `userDetailsAsCookie`
 */
export const fetchUserDetailsCookie = createServerFn().handler(async () => {
  const cookie = getCookie(USER_DETAILS);

  if (!cookie) return null;

  const [cookieVerifyingError, cookieVerifyingData] = await tryCatch(
    verifyJWT(cookie),
  );

  if (cookieVerifyingError) return null;

  const { email, name, role, userId, employeeId } = cookieVerifyingData;

  return { email, name, role, userId, employeeId };
});

/**
 * Creates and stores a signed JWT containing user details in the
 * user-details cookie.
 *
 * The provided payload is validated using `jwtPayloadSchema` before
 * being signed and stored in the `USER_DETAILS` cookie.
 *
 * @returns {Promise<void>} A promise that resolves after the cookie
 * has been successfully set.
 */
export const setUserDetailsCookie = createServerFn()
  .validator(jwtPayloadSchema)
  .handler(async ({ data }) => {
    const generatedTokenToStoreToClientCookie = await signJWT(data);

    setCookie(USER_DETAILS, generatedTokenToStoreToClientCookie);
  });

/**
 * Deletes the user-details cookie.
 *
 * Removes the `USER_DETAILS` cookie from the client.
 *
 * @returns {Promise<void>} A promise that resolves after the cookie
 * has been deleted.
 */
export const deleteUserDetailsCookie = createServerFn().handler(async () => {
  deleteCookie(USER_DETAILS);
});
