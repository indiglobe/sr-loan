import z from "zod";

export const userDetailsCookieSchema = z.object({
  userId: z.string(),
  email: z.string(),
  name: z.string(),
  phone: z.string(),
  role: z.enum(["ADMIN", "AGENT"]),
});

export type TUserDetailsCookieSchema = z.infer<typeof userDetailsCookieSchema>;
