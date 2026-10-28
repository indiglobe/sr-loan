import { Table__LoanType } from "@/schema";
import { and, asc, eq, getTableColumns, SQL } from "drizzle-orm";
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
    .orderBy(asc(Table__LoanType.createdAt));

  const [baseQueryError, baseQueryData] = await tryCatch(baseQuery);

  if (baseQueryError) {
    console.log(`Error in baseQueryError in read__AllLoansTypes`);
    throw baseQueryError;
  }

  const loans = baseQueryData;

  return loans;
}

type Read__OneLoansType = {
  identifier:
    | {
        id: Pick<typeof Table__LoanType.$inferSelect, "id">["id"];
      }
    | {
        loanTypeId: Pick<
          typeof Table__LoanType.$inferSelect,
          "loanTypeId"
        >["loanTypeId"];
      };
};

export async function read__OneLoansType(options: Read__OneLoansType) {
  /* eslint-disable @typescript-eslint/no-unused-vars */
  const { tableIdentifierToken, createdAt, updatedAt, ...rest } =
    getTableColumns(Table__LoanType);
  /* eslint-enable @typescript-eslint/no-unused-vars */

  const baseQuery = db
    .select({ ...rest })
    .from(Table__LoanType)
    .orderBy(asc(Table__LoanType.createdAt))
    .limit(1)
    .offset(0);

  const conditions: SQL[] = [];

  if ("id" in options.identifier) {
    conditions.push(eq(Table__LoanType.id, options.identifier.id));
  }

  if ("loanTypeId" in options.identifier) {
    conditions.push(
      eq(Table__LoanType.loanTypeId, options.identifier.loanTypeId),
    );
  }

  if (conditions.length > 0) {
    baseQuery.where(and(...conditions));
  }

  const [baseQueryError, baseQueryData] = await tryCatch(baseQuery);

  if (baseQueryError) {
    console.log(`Error in baseQueryError in read__AllLoansTypes`);
    throw baseQueryError;
  }

  const [loans] = baseQueryData;

  return loans ? loans : null;
}
