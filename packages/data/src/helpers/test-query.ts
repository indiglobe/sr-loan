import { Table__Bank, Table__BankLoanDetails, Table__LoanType } from "@/schema";
import { tryCatch } from "@repo/utils/try-catch";
import { eq, getTableColumns, sql } from "drizzle-orm";
import { db } from "..";

(async (options: {
  identifier: {
    loanTypeId: string;
  };
}) => {
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
  const { bankName, tagline } = getTableColumns(Table__Bank);
  /* eslint-enable @typescript-eslint/no-unused-vars */

  const jsonObjectFields = Object.entries(restBankLoanDetails).flatMap(
    ([key, column]) => [sql`${key}`, sql`${column}`],
  );

  const baseQuery = db
    .select({
      ...restLoanType,
      banks: sql<
        (Omit<
          typeof Table__BankLoanDetails.$inferSelect,
          "createdAt" | "updatedAt" | "tableIdentifierToken"
        > & { bankName: string; tagline: string })[]
      >`
        COALESCE(
          JSON_ARRAYAGG(
            JSON_OBJECT(
              ${sql.join(jsonObjectFields, sql`, `)},
              "bankName", ${bankName},
              "tagline", ${tagline}
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
    .innerJoin(
      Table__Bank,
      eq(Table__Bank.bankId, Table__BankLoanDetails.bankId),
    )
    .groupBy(Table__LoanType.loanTypeId);

  if (options.identifier.loanTypeId) {
    baseQuery.where(
      eq(Table__LoanType.loanTypeId, options.identifier.loanTypeId),
    );
  }

  const [baseQueryError, baseQueryData] = await tryCatch(baseQuery);

  if (baseQueryError) {
    console.log(`Error in baseQueryError in read__OneLoansDetails`);
    throw baseQueryError;
  }

  const [loanDetails] = baseQueryData;

  console.log(JSON.stringify(loanDetails, null, 2));
})({ identifier: { loanTypeId: "personal-loan" } });
