import { createServerFn } from "@tanstack/react-start";
import { read__AllServiceType } from "@repo/data/querries/service-type";
import { tryCatch } from "@repo/utils/try-catch";

export const serverFn__readAllServiceType = createServerFn().handler(
  async () => {
    const [serverFnError, serverFnResponse] = await tryCatch(
      read__AllServiceType(),
    );

    if (serverFnError) {
      console.error(`Error in serverFnError in serverFn__readAllServiceType`);
      console.error(serverFnError);
      throw serverFnError;
    }

    return serverFnResponse;
  },
);
