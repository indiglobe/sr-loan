import { Table__BankLoanDetails, Table__LoanType } from "@/schema";
import { eq, getTableColumns, sql } from "drizzle-orm";
import { db } from "@/index";
import { tryCatch } from "@repo/utils/try-catch";

type TRead__AllLoansDetails = {
  identifier?: {
    loanTypeId?: string;
  };
};

export async function read__AllLoansDetails(options?: TRead__AllLoansDetails) {
  /* eslint-disable @typescript-eslint/no-unused-vars */
  const {
    createdAt: createdAtLoanType,
    updatedAt: updatedAtLoanType,
    tableIdentifierToken: tableIdentifierTokenLoanType,
    ...restLoanType
  } = getTableColumns(Table__LoanType);
  const {
    createdAt: createdAtBankLoanDetails,
    updatedAt: updatedAtBankLoanDetails,
    tableIdentifierToken: tableIdentifierTokenBankLoanDetails,
    ...restBankLoanDetails
  } = getTableColumns(Table__BankLoanDetails);
  /* eslint-enable @typescript-eslint/no-unused-vars */

  const jsonObjectFields = Object.entries(restBankLoanDetails).flatMap(
    ([key, column]) => [sql`${key}`, sql`${column}`],
  );

  const baseQuery = db
    .select({
      ...restLoanType,
      banks: sql<
        Omit<
          typeof Table__BankLoanDetails.$inferSelect,
          "createdAt" | "updatedAt" | "tableIdentifierToken"
        >[]
      >`
        COALESCE(
          JSON_ARRAYAGG(
            JSON_OBJECT(
              ${sql.join(jsonObjectFields, sql`, `)}
            )
          ),
          JSON_ARRAY()
        )
      `.as("banks"),
    })
    .from(Table__BankLoanDetails)
    .innerJoin(
      Table__LoanType,
      eq(Table__LoanType.loanTypeId, Table__BankLoanDetails.loanTypeId),
    )
    .groupBy(Table__LoanType.loanTypeId);

    if(options?.identifier?.loanTypeId){
      baseQuery.where(eq(Table__LoanType.loanTypeId,options.identifier.loanTypeId))
    }

  const [baseQueryError, baseQueryData] = await tryCatch(baseQuery);

  if (baseQueryError) {
    console.log(`Error in baseQueryError in read__AllLoansDetails`);
    throw baseQueryError;
  }

  const loanDetails = baseQueryData;

  return loanDetails;
}
