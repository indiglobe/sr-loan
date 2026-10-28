import {
  Table__Bank,
  Table__BankServiceDetails,
  Table__ServiceType,
} from "@/schema";
import { eq, getTableColumns, sql } from "drizzle-orm";
import { db } from "@/index";
import { tryCatch } from "@repo/utils/try-catch";

export async function read__AllServiceDetails() {
  /* eslint-disable @typescript-eslint/no-unused-vars */
  const {
    createdAt: createdAtServiceType,
    updatedAt: updatedAtServiceType,
    tableIdentifierToken: tableIdentifierTokenServiceType,
    ...restServiceType
  } = getTableColumns(Table__ServiceType);
  const {
    createdAt: createdAtBankServiceDetails,
    updatedAt: updatedAtBankServiceDetails,
    tableIdentifierToken: tableIdentifierTokenBankServiceDetails,
    ...restBankServiceDetails
  } = getTableColumns(Table__BankServiceDetails);
  const { bankName, tagline } = getTableColumns(Table__Bank);
  /* eslint-enable @typescript-eslint/no-unused-vars */

  const jsonObjectFields = Object.entries(restBankServiceDetails).flatMap(
    ([key, column]) => [sql`${key}`, sql`${column}`],
  );

  const baseQuery = db
    .select({
      ...restServiceType,
      banks: sql<
        (Omit<
          typeof Table__BankServiceDetails.$inferSelect,
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
    .from(Table__BankServiceDetails)
    .innerJoin(
      Table__ServiceType,
      eq(
        Table__ServiceType.serviceTypeId,
        Table__BankServiceDetails.serviceTypeId,
      ),
    )
    .innerJoin(
      Table__Bank,
      eq(Table__Bank.id, Table__BankServiceDetails.bankId),
    )
    .groupBy(Table__ServiceType.serviceTypeId);

  const [baseQueryError, baseQueryData] = await tryCatch(baseQuery);

  if (baseQueryError) {
    console.log(`Error in baseQueryError in read__AllServiceDetails`);
    throw baseQueryError;
  }

  const serviceDetails = baseQueryData;

  return serviceDetails;
}

type TRead__OneServiceDetails = {
  identifier: Pick<
    typeof Table__BankServiceDetails.$inferSelect,
    "serviceTypeId"
  >;
};

export async function read__OneServiceDetails(
  options: TRead__OneServiceDetails,
) {
  /* eslint-disable @typescript-eslint/no-unused-vars */
  const {
    createdAt: createdAtServiceType,
    updatedAt: updatedAtServiceType,
    tableIdentifierToken: tableIdentifierTokenServiceType,
    ...restServiceType
  } = getTableColumns(Table__ServiceType);
  const {
    createdAt: createdAtBankServiceDetails,
    updatedAt: updatedAtBankServiceDetails,
    tableIdentifierToken: tableIdentifierTokenBankServiceDetails,
    ...restBankServiceDetails
  } = getTableColumns(Table__BankServiceDetails);
  const { bankName, tagline } = getTableColumns(Table__Bank);
  /* eslint-enable @typescript-eslint/no-unused-vars */

  const jsonObjectFields = Object.entries(restBankServiceDetails).flatMap(
    ([key, column]) => [sql`${key}`, sql`${column}`],
  );

  const baseQuery = db
    .select({
      ...restServiceType,
      banks: sql<
        (Omit<
          typeof Table__BankServiceDetails.$inferSelect,
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
    .from(Table__BankServiceDetails)
    .innerJoin(
      Table__ServiceType,
      eq(
        Table__ServiceType.serviceTypeId,
        Table__BankServiceDetails.serviceTypeId,
      ),
    )
    .innerJoin(
      Table__Bank,
      eq(Table__Bank.bankId, Table__BankServiceDetails.bankId),
    )
    .groupBy(Table__ServiceType.serviceTypeId);

  if (options.identifier.serviceTypeId) {
    baseQuery.where(
      eq(Table__ServiceType.serviceTypeId, options.identifier.serviceTypeId),
    );
  }

  const [baseQueryError, baseQueryData] = await tryCatch(baseQuery);

  if (baseQueryError) {
    console.log(`Error in baseQueryError in read__OneServiceDetails`);
    throw baseQueryError;
  }

  const [serviceDetails] = baseQueryData;

  return serviceDetails ? serviceDetails : null;
}
