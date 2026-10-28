import { Table__Activity, Table__LoanType, Table__User } from "@/schema";
import { and, desc, eq, getTableColumns, SQL } from "drizzle-orm";
import { db } from "..";
import { tryCatch } from "@repo/utils/try-catch";

type TRead__AllActivities = {
  identifier?:
    | Partial<{
        employeeId: Pick<
          typeof Table__Activity.$inferSelect,
          "employeeId"
        >["employeeId"];
      }>
    | Partial<{
        loanId: Pick<typeof Table__Activity.$inferSelect, "loanId">["loanId"];
      }>;
};

export async function read__AllActivities(options?: TRead__AllActivities) {
  /* eslint-disable @typescript-eslint/no-unused-vars */
  const {
    tableIdentifierToken: tableIdentifierTokenActivity,
    // createdAt: createdAtActivity,
    updatedAt: updatedAtActivity,
    ...restActivity
  } = getTableColumns(Table__Activity);
  const {
    tableIdentifierToken: tableIdentifierTokenUser,
    createdAt: createdAtUser,
    updatedAt: updatedAtUser,
    ...restUser
  } = getTableColumns(Table__User);
  const {
    tableIdentifierToken: tableIdentifierTokenLoanType,
    createdAt: createdAtLoanType,
    updatedAt: updatedAtLoanType,
    ...restLoanType
  } = getTableColumns(Table__LoanType);
  /* eslint-enable @typescript-eslint/no-unused-vars */

  const conditions: SQL[] = [];

  const baseQuery = db
    .select({
      ...restActivity,
      user: { ...restUser },
      loanType: { ...restLoanType },
    })
    .from(Table__Activity)
    .orderBy(desc(Table__Activity.createdAt))
    .innerJoin(Table__User, eq(Table__Activity.employeeId, Table__User.id))
    .innerJoin(
      Table__LoanType,
      eq(Table__Activity.employeeId, Table__LoanType.id),
    );

  if (options?.identifier) {
    if ("employeeId" in options.identifier && options.identifier.employeeId) {
      conditions.push(
        eq(Table__Activity.employeeId, options.identifier.employeeId),
      );
    }

    if ("loanId" in options.identifier && options.identifier.loanId) {
      conditions.push(eq(Table__Activity.loanId, options.identifier.loanId));
    }
  }

  if (conditions.length > 0) {
    baseQuery.where(and(...conditions));
  }

  const [baseQueryError, baseQueryData] = await tryCatch(baseQuery);

  if (baseQueryError) {
    console.log(`Error in baseQueryError in read__AllActivities`);
    throw baseQueryError;
  }

  const activities = baseQueryData;

  return activities;
}
