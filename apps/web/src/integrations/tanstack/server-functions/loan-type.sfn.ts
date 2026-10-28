import { createServerFn } from "@tanstack/react-start";
import {
  read__AllLoansTypes,
  read__OneLoansType,
} from "@repo/data/querries/loan-type";
import { read__OneLoansTypeSchema } from "@repo/data/validators/loan-type";
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

// ==================================================
// ++++++++++++++++++++++++++++++++++++++++++++++++++
// ==================================================

export const serverFn__readOneLoansType = createServerFn()
  .validator(read__OneLoansTypeSchema)
  .handler(async ({ data }) => {
    const [serverFnError, serverFnResponse] = await tryCatch(
      read__OneLoansType(data),
    );

    if (serverFnError) {
      console.error(`Error in serverFnError in serverFn__readOneLoansType`);
      console.error(serverFnError);
      throw serverFnError;
    }

    return serverFnResponse;
  });
