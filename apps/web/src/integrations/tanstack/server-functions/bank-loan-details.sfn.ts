import { createServerFn } from "@tanstack/react-start";
import {
  read__AllLoansDetails,
  read__OneLoansDetails,
} from "@repo/data/querries/bank-loan-details";
import { read__OneLoansDetailsSchema } from "@repo/data/validators/bank-loan-details";
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

export const serverFn__readOneLoansDetails = createServerFn()
  .validator(read__OneLoansDetailsSchema)
  .handler(async ({ data }) => {
    const [serverFnError, serverFnResponse] = await tryCatch(
      read__OneLoansDetails(data),
    );

    if (serverFnError) {
      console.error(`Error in serverFnError in serverFn__readAllLoansDetails`);
      console.error(serverFnError);
      throw serverFnError;
    }

    return serverFnResponse;
  });
