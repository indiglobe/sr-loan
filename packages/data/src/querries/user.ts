import { Table__User } from "@/schema";
import { db } from "@/index";
import { eq, getTableColumns } from "drizzle-orm";
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
    const [createdUserFetchError, createdUserFetchedData] = await tryCatch(
      db
        .select({ ...rest })
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
  identifier: { email: string };
};

export async function read__OneUser({ identifier }: TRead__OneUser) {
  const { email } = identifier;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { tableIdentifierToken, createdAt, updatedAt, ...rest } =
    getTableColumns(Table__User);

  const baseQuery = db
    .select({ ...rest })
    .from(Table__User)
    .where(eq(Table__User.email, email));

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
  const { tableIdentifierToken, createdAt, updatedAt, ...rest } =
    getTableColumns(Table__User);

  const baseQuery = db.select({ ...rest }).from(Table__User);

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
