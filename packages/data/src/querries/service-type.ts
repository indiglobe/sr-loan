import { Table__ServiceType } from "@/schema";
import { asc, getTableColumns } from "drizzle-orm";
import { db } from "@/index";
import { tryCatch } from "@repo/utils/try-catch";

export async function read__AllServiceType() {
  /* eslint-disable @typescript-eslint/no-unused-vars */
  const { tableIdentifierToken, createdAt, updatedAt, ...rest } =
    getTableColumns(Table__ServiceType);
  /* eslint-enable @typescript-eslint/no-unused-vars */

  const baseQuery = db
    .select({ ...rest })
    .from(Table__ServiceType)
    .orderBy(asc(Table__ServiceType.createdAt));

  const [baseQueryError, baseQueryData] = await tryCatch(baseQuery);

  if (baseQueryError) {
    console.log(`Error in baseQueryError in read__AllServiceType`);
    throw baseQueryError;
  }

  const services = baseQueryData;

  return services;
}
