import { createServerFn } from "@tanstack/react-start";
import {
  read__AllServiceDetails,
  read__OneServiceDetails,
} from "@repo/data/querries/bank-service-details";
import { read__OneServiceDetailsSchema } from "@repo/data/validators/bank-service-details";
import { tryCatch } from "@repo/utils/try-catch";

export const serverFn__readAllServiceDetails = createServerFn().handler(
  async () => {
    const [serverFnError, serverFnResponse] = await tryCatch(
      read__AllServiceDetails(),
    );

    if (serverFnError) {
      console.error(`Error in serverFnError in serverFn__readAllServiceDetails`);
      console.error(serverFnError);
      throw serverFnError;
    }

    return serverFnResponse;
  },
);

export const serverFn__readOneServiceDetails = createServerFn()
  .validator(read__OneServiceDetailsSchema)
  .handler(async ({ data }) => {
    const [serverFnError, serverFnResponse] = await tryCatch(
      read__OneServiceDetails(data),
    );

    if (serverFnError) {
      console.error(`Error in serverFnError in serverFn__readAllServiceDetails`);
      console.error(serverFnError);
      throw serverFnError;
    }

    return serverFnResponse;
  });
