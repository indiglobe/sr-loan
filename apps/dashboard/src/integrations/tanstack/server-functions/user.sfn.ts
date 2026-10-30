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
import { hashPassword } from "@repo/utils/utility/password-hashing";

export const serverFn__createOneUser = createServerFn()
  .validator(create__OneUserSchema)
  .handler(async ({ data }) => {
    const [passwordHasingError, hashedPassword] = await tryCatch(
      hashPassword(data.dataToUpload.password),
    );

    if (passwordHasingError) {
      console.error(`Error in passwordHasingError in serverFn__createOneUser`);
      console.error(passwordHasingError);
      throw passwordHasingError;
    }

    const [serverFnError, serverFnData] = await tryCatch(
      create__OneUser({
        dataToUpload: { ...data.dataToUpload, password: hashedPassword },
      }),
    );

    if (serverFnError) {
      console.error(`Error in serverFnError in serverFn__createOneUser`);
      console.error(serverFnError);
      throw serverFnError;
    }

    return serverFnData;
  });

export const serverFn__readOneUser = createServerFn()
  .validator(read__OneUserSchema)
  .handler(async ({ data }) => {
    const [serverFnError, serverFnData] = await tryCatch(read__OneUser(data));

    if (serverFnError) {
      console.error(`Error in serverFnError in serverFn__readOneUser`);
      console.error(serverFnError);
      throw serverFnError;
    }
    
    return serverFnData;
  });

export const serverFn__readAllUsers = createServerFn()
  .validator(read__AllUsersSchema)
  .handler(async ({ data }) => {
    const [serverFnError, serverFnData] = await tryCatch(read__AllUsers(data));
    
    if (serverFnError) {
      console.error(`Error in serverFnError in serverFn__createOneAgent`);
      console.error(serverFnError);
      throw serverFnError;
    }

    return serverFnData;
  });
