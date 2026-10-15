import { createServerFn } from "@tanstack/react-start";
import { read__AllLoansTypes } from "@repo/data/querries/loan-type";
import { tryCatch } from "@repo/utils/try-catch";

export const serverFn__readAllLoansTypes = createServerFn().handler(
  async () => {
    const [serverFnError, serverFnResponse] = await tryCatch(
      read__AllLoansTypes(),
    );

    if (serverFnError) {
      console.error(`Error in serverFnError in serverFn__readAllLoansTypes`);
      console.error(serverFnError);
      throw serverFnError;
    }

    return serverFnResponse;
  },
);
