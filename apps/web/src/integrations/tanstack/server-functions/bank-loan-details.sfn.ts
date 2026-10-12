import { createServerFn } from "@tanstack/react-start";
import { read__AllLoansDetails } from "@repo/data/querries/bank-loan-details";
import { tryCatch } from "@repo/utils/try-catch";

export const serverFn__readAllLoansDetails = createServerFn().handler(
  async () => {
    const [serverFnError, serverFnResponse] = await tryCatch(
      read__AllLoansDetails(),
    );

    if (serverFnError) {
      console.error(`Error in serverFnError in serverFn__readAllLoansDetails`);
      console.error(serverFnError);
      throw serverFnError;
    }

    return serverFnResponse;
  },
);
