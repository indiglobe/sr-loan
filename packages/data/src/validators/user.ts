import { ROLE_ENUM } from "@repo/utils/enums/db-enums";
import z from "zod";

export const create__OneUserSchema = z.object({
  dataToUpload: z.object({
    name: z.string(),
    employeeId: z.string(),
    email: z.string(),
    password: z.string(),
    phoneNumber: z.string(),
    emergencyPhoneNumber: z.string().nullish(),
    location: z.string(),
    pin: z.string(),
    role: z.enum(ROLE_ENUM).optional(),
    referrerEmployeeId: z.string().nullish(),
  }),
});

export const read__OneUserSchema = z.object({
  identifier: z.union([
    z.object({
      email: z.string(),
    }),
    z.object({
      id: z.string(),
    }),
    z.object({
      employeeId: z.string(),
    }),
  ]),

  include: z
    .object({
      password: z.boolean(),
    })
    .optional(),
});

export const read__AllUsersSchema = z
  .object({
    identifier: z
      .intersection(
        z.union([
          z.object({
            role: z.enum(ROLE_ENUM).optional(),
          }),
          z.object({
            roles: z.array(z.enum(ROLE_ENUM)).optional(),
          }),
        ]),
        z.object({
          referrerEmployeeId: z.string().nullish(),
        }),
      )
      .optional(),
  })
  .optional();
