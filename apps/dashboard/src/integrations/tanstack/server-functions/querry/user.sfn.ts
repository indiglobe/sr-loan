import {
  read__OneUser,
  read__AllUsers,
  create__OneUser,
} from "@repo/data/querries/user";
import {
  read__OneUserSchema,
  read__AllUsersSchema,
  create__OneUserSchema,
} from "@repo/data/validators/user";
import { createServerFn } from "@tanstack/react-start";
import { tryCatch } from "@repo/utils/try-catch";

export const serverFn__createOneUser = createServerFn()
  .validator(create__OneUserSchema)
  .handler(async ({ data }) => {
    const [serverFnError, serverFnData] = await tryCatch(create__OneUser(data));

    if (serverFnError) {
      console.log(`Error in serverFnError in serverFn__createOneUser`);
      throw serverFnError;
    }

    return serverFnData;
  });

export const serverFn__readOneUser = createServerFn()
  .validator(read__OneUserSchema)
  .handler(async ({ data }) => {
    const [serverFnError, serverFnData] = await tryCatch(read__OneUser(data));

    if (serverFnError) {
      console.log(`Error in serverFnError in serverFn__readOneUser`);
      throw serverFnError;
    }

    return serverFnData;
  });

export const serverFn__readAllUsers = createServerFn()
  .validator(read__AllUsersSchema)
  .handler(async ({ data }) => {
    const [serverFnError, serverFnData] = await tryCatch(read__AllUsers(data));

    if (serverFnError) {
      console.log(`Error in serverFnError in serverFn__createOneAgent`);
      throw serverFnError;
    }

    return serverFnData;
  });
