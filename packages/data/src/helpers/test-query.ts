import { Table__BankLoanDetails, Table__LoanType } from "@/schema";
import { db } from "..";
import { eq, getTableColumns, sql } from "drizzle-orm";

(async () => {
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

  const res = await db
    .select({
      ...restLoanType,
      banks: sql`
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

  console.log(JSON.stringify(res, null, 2));
})();
