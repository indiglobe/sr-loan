import z from "zod";

export const create__OneUserSchema = z.object({
  dataToUpload: z.object({
    name: z.string(),
    employeeId: z.string(),
    email: z.string(),
    password: z.string(),
    phoneNumber: z.string(),
    emergencyPhoneNumber: z.string().nullish(),
    role: z.union([z.literal("ADMIN"), z.literal("AGENT")]).optional(),
  }),
});

export const read__OneUserSchema = z.object({
  identifier: z.object({
    email: z.string(),
  }),
});

export const read__AllUsersSchema = z
  .object({
    identifier: z
      .object({
        role: z.enum(["ADMIN", "AGENT"]),
      })
      .optional(),
  })
  .optional();
