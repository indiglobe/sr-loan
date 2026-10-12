import { Table__LoanType } from "@/schema";
import { desc, getTableColumns } from "drizzle-orm";
import { db } from "@/index";
import { tryCatch } from "@repo/utils/try-catch";

export async function read__AllLoansTypes() {
  /* eslint-disable @typescript-eslint/no-unused-vars */
  const { tableIdentifierToken, createdAt, updatedAt, ...rest } =
    getTableColumns(Table__LoanType);
  /* eslint-enable @typescript-eslint/no-unused-vars */

  const baseQuery = db
    .select({ ...rest })
    .from(Table__LoanType)
    .orderBy(desc(Table__LoanType.createdAt));

  const [baseQueryError, baseQueryData] = await tryCatch(baseQuery);

  if (baseQueryError) {
    console.log(`Error in baseQueryError in read__AllLoansTypes`);
    throw baseQueryError;
  }

  const loans = baseQueryData;

  return loans;
}
