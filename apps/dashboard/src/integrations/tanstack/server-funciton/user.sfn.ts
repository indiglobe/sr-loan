import {
  create__OneUser,
  read__OneUser,
  read__AllUsers,
} from "@repo/data/querries/user";
import {
  create__OneUserSchema,
  read__OneUserSchema,
  read__AllUsersSchema,
} from "@repo/data/validators/user";
import { tryCatch } from "@repo/utils/try-catch";
import { createServerFn } from "@tanstack/react-start";
import z from "zod";
import bcrypt from "bcryptjs";

export const serverFn__createNewUser = createServerFn()
  .validator(create__OneUserSchema)
  .handler(async ({ data }) => {
    const { dataToUpload } = data;

    const [serverFnError, serverFnRes] = await tryCatch(
      create__OneUser({ dataToUpload }),
    );

    if (serverFnError) {
      console.log(`Error in serverFn__createNewUser`);
      throw serverFnError;
    }

    return serverFnRes;
  });

export const serverFn__readOneUser = createServerFn()
  .validator(read__OneUserSchema)
  .handler(async ({ data }) => {
    const { identifier } = data;

    const [serverFnError, serverFnRes] = await tryCatch(
      read__OneUser({ identifier }),
    );

    if (serverFnError) {
      console.log(`Error in serverFn__readUser`);
      throw serverFnError;
    }

    return serverFnRes;
  });

export const serverFn__readAllUsers = createServerFn()
  .validator(read__AllUsersSchema)
  .handler(async ({ data }) => {
    const [serverFnError, serverFnRes] = await tryCatch(read__AllUsers(data));

    if (serverFnError) {
      console.log(`Error in serverFn__readUser`);
      throw serverFnError;
    }

    return serverFnRes;
  });

export const serverFn__checkUserValid = createServerFn()
  .validator(
    z.object({
      email: z.email("Enter a valid email address"),

      password: z
        .string()
        .min(1, "Password is required")
        .min(6, "Password must be at least 6 characters"),
    }),
  )
  .handler(async ({ data }) => {
    const { email, password } = data;

    const [serverFnError, serverFnRes] = await tryCatch(
      read__OneUser({ identifier: { email: email } }),
    );

    if (serverFnError) {
      console.log(`Error in serverFn__readUser`);
      throw serverFnError;
    }

    if (!serverFnRes) {
      console.log(`Error in serverFnRes`);
      return { message: "No user exists.", success: false };
    }
    const { password: hashedPassword } = serverFnRes;

    const [passwordCheckError] = await tryCatch(
      bcrypt.compare(password, hashedPassword),
    );

    if (passwordCheckError) {
      console.log(`Error in passwordCheckError`);
      return { message: "Wrong password", success: false };
    }

    return { message: "Successfull login", success: true };
  });
