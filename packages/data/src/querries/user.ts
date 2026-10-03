import { Table__User } from "@/schema";
import { db } from "@/index";
import { desc, eq, getTableColumns } from "drizzle-orm";
import { tryCatch } from "@repo/utils/try-catch";
import { removeUndefinedFromObject } from "@repo/utils/utility/remove-undefined";
import { id } from "@repo/utils/id";

type TCreate__OneUser = {
  dataToUpload: Omit<
    typeof Table__User.$inferInsert,
    "createdAt" | "updatedAt" | "tableIdentifierToken" | "id"
  >;
};

export async function create__OneUser({ dataToUpload }: TCreate__OneUser) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { tableIdentifierToken, createdAt, updatedAt, ...rest } =
    getTableColumns(Table__User);

  const filteredDataToUpload = removeUndefinedFromObject(dataToUpload);

  const generatedId = id();

  const baseQuery = db
    .insert(Table__User)
    .values({ ...filteredDataToUpload, id: generatedId });

  const [baseQueryError, baseQueryData] = await tryCatch(baseQuery);

  if (baseQueryError) {
    console.log(`Error in baseQueryError in create__OneUser`);
    throw baseQueryError;
  }

  const [dbResponse] = baseQueryData;

  if (dbResponse.affectedRows === 1) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...returnableColumns } = rest;
    const [createdUserFetchError, createdUserFetchedData] = await tryCatch(
      db
        .select({ ...returnableColumns })
        .from(Table__User)
        .where(eq(Table__User.id, generatedId))
        .limit(1),
    );

    if (createdUserFetchError) {
      console.log(`Error in createdUserFetchError in create__OneUser`);
      throw createdUserFetchError;
    }

    const [user] = createdUserFetchedData;
    return user!;
  }
  console.log("Function executed without guard clause in create__OneUser");
  throw new Error("Function executed without guard clause in create__OneUser");
}

type TRead__OneUser = {
  identifier:
    | Pick<typeof Table__User.$inferSelect, "email">
    | Pick<typeof Table__User.$inferSelect, "id">
    | Pick<typeof Table__User.$inferSelect, "employeeId">;

  intentionalFields?: { password: boolean };
};

export async function read__OneUser({
  identifier,
  intentionalFields,
}: TRead__OneUser) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { tableIdentifierToken, createdAt, updatedAt, password, ...rest } =
    getTableColumns(Table__User);

  const baseQuery = db
    .select({
      ...rest,
      ...(intentionalFields?.password ? { password: password } : {}),
    })
    .from(Table__User);

  if ("email" in identifier) {
    baseQuery.where(eq(Table__User.email, identifier.email));
  }

  if ("employeeId" in identifier) {
    baseQuery.where(eq(Table__User.employeeId, identifier.employeeId));
  }

  if ("id" in identifier) {
    baseQuery.where(eq(Table__User.id, identifier.id));
  }

  const [baseQueryError, baseQueryData] = await tryCatch(baseQuery);

  if (baseQueryError) {
    console.log(`Error in baseQueryError in read__OneUser`);
    throw baseQueryError;
  }

  const [user] = baseQueryData;

  return user ? user : null;
}

type TRead__AllUser = {
  identifier?: Pick<typeof Table__User.$inferSelect, "role">;
};

export async function read__AllUsers(options?: TRead__AllUser) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { tableIdentifierToken, createdAt, updatedAt, password, ...rest } =
    getTableColumns(Table__User);

  const baseQuery = db
    .select({ ...rest })
    .from(Table__User)
    .orderBy(desc(Table__User.createdAt));

  if (options?.identifier?.role) {
    baseQuery.where(eq(Table__User.role, options.identifier.role));
  }

  const [baseQueryError, baseQueryData] = await tryCatch(baseQuery);

  if (baseQueryError) {
    console.log(`Error in baseQueryError in read__AllUser`);
    throw baseQueryError;
  }

  const users = baseQueryData;

  return users;
}
