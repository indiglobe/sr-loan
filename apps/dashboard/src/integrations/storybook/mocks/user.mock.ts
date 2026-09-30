import type {
  serverFn__readAllUsers,
  serverFn__readOneUser,
  serverFn__readUsersCount,
} from "@/integrations/server-functions/querry/user.sa";
import type { DeepPartial } from "@/utils/types/storybook";

export function mocked__serverFn__readAllUsers() {
  return [
    {
      id: "008fbb7e80",
      email: "rhea hackett-62@email.com",
      fullName: "Rhea Hackett",
      avatarUrl: "https://avatars.githubusercontent.com/u/25654009",
      age: 44,
      role: "basic",
      phoneNumber: "872.729.43",
      updatedAt: "2026-08-20 18:55:47.301000",
      createdAt: "2026-08-20 18:55:47.301000",
      tableIdentifierToken: "USER",
      beneficiary: null,
      coursePurchases: [
        {
          id: 1,
          userId: "008fbb7e80",
          courseId: "a354cafb0c",
          razorpayOrderId: "SbM3zL4QBHhNwXgTcFX4q",
          razorpayPaymentId: null,
          razorpaySignature: null,
          isCompleted: false,
          updatedAt: "2026-08-20 18:55:52.864000",
          createdAt: "2026-08-20 18:55:52.864000",
          tableIdentifierToken: "CBPR",
        },
        {
          id: 5,
          userId: "0e71bbf29c",
          courseId: "c64815a37f",
          razorpayOrderId: "q1pKlNVpg8jYHt0vw8X_B",
          razorpayPaymentId: null,
          razorpaySignature: null,
          isCompleted: false,
          updatedAt: "2026-08-20 18:55:52.864000",
          createdAt: "2026-08-20 18:55:52.864000",
          tableIdentifierToken: "CBPR",
        },
      ],
      requestedAssets: [
        {
          userId: "0e71bbf29c",
          assetId: "542915b317",
          updatedAt: "2026-10-01 00:19:29.731000",
          createdAt: "2025-11-25 13:42:29.045000",
          tableIdentifierToken: "RQAS",
        },
        {
          userId: "0e71bbf29c",
          assetId: "3a09ab756e",
          updatedAt: "2026-12-12 06:01:38.122000",
          createdAt: "2025-09-02 04:13:36.382000",
          tableIdentifierToken: "RQAS",
        },
      ],
      testimonial: {},
      webinarPurchases: [
        {
          id: 1,
          userId: "008fbb7e80",
          webinarId: "8dabcbd803",
          razorpayOrderId: "v7_wOl1dgED4moFSHCQ_2",
          razorpayPaymentId: null,
          razorpaySignature: null,
          isCompleted: false,
          updatedAt: "2026-08-20 18:55:53.255000",
          createdAt: "2026-08-20 18:55:53.255000",
          tableIdentifierToken: "WBPR",
        },
        {
          id: 5,
          userId: "0e71bbf29c",
          webinarId: "018a0b733c",
          razorpayOrderId: "Je0JTxP0ucCGy5dQaib9Q",
          razorpayPaymentId: null,
          razorpaySignature: null,
          isCompleted: false,
          updatedAt: "2026-08-20 18:55:53.255000",
          createdAt: "2026-08-20 18:55:53.255000",
          tableIdentifierToken: "WBPR",
        },
      ],
    },
  ] satisfies DeepPartial<Awaited<ReturnType<typeof serverFn__readAllUsers>>>;
}

export function mocked__serverFn__readOneUser() {
  return {
    id: "008fbb7e80",
    email: "rhea hackett-62@email.com",
    fullName: "Rhea Hackett",
    avatarUrl: "https://avatars.githubusercontent.com/u/25654009",
    age: 44,
    role: "basic",
    phoneNumber: "872.729.43",
    updatedAt: "2026-08-20 18:55:47.301000",
    createdAt: "2026-08-20 18:55:47.301000",
    tableIdentifierToken: "USER",
    beneficiary: null,
    coursePurchases: [
      {
        id: 1,
        userId: "008fbb7e80",
        courseId: "a354cafb0c",
        razorpayOrderId: "SbM3zL4QBHhNwXgTcFX4q",
        razorpayPaymentId: null,
        razorpaySignature: null,
        isCompleted: false,
        updatedAt: "2026-08-20 18:55:52.864000",
        createdAt: "2026-08-20 18:55:52.864000",
        tableIdentifierToken: "CBPR",
      },
      {
        id: 5,
        userId: "0e71bbf29c",
        courseId: "c64815a37f",
        razorpayOrderId: "q1pKlNVpg8jYHt0vw8X_B",
        razorpayPaymentId: null,
        razorpaySignature: null,
        isCompleted: false,
        updatedAt: "2026-08-20 18:55:52.864000",
        createdAt: "2026-08-20 18:55:52.864000",
        tableIdentifierToken: "CBPR",
      },
    ],
    requestedAssets: [
      {
        userId: "0e71bbf29c",
        assetId: "542915b317",
        updatedAt: "2026-10-01 00:19:29.731000",
        createdAt: "2025-11-25 13:42:29.045000",
        tableIdentifierToken: "RQAS",
      },
      {
        userId: "0e71bbf29c",
        assetId: "3a09ab756e",
        updatedAt: "2026-12-12 06:01:38.122000",
        createdAt: "2025-09-02 04:13:36.382000",
        tableIdentifierToken: "RQAS",
      },
    ],
    testimonial: {},
    webinarPurchases: [
      {
        id: 1,
        userId: "008fbb7e80",
        webinarId: "8dabcbd803",
        razorpayOrderId: "v7_wOl1dgED4moFSHCQ_2",
        razorpayPaymentId: null,
        razorpaySignature: null,
        isCompleted: false,
        updatedAt: "2026-08-20 18:55:53.255000",
        createdAt: "2026-08-20 18:55:53.255000",
        tableIdentifierToken: "WBPR",
      },
      {
        id: 5,
        userId: "0e71bbf29c",
        webinarId: "018a0b733c",
        razorpayOrderId: "Je0JTxP0ucCGy5dQaib9Q",
        razorpayPaymentId: null,
        razorpaySignature: null,
        isCompleted: false,
        updatedAt: "2026-08-20 18:55:53.255000",
        createdAt: "2026-08-20 18:55:53.255000",
        tableIdentifierToken: "WBPR",
      },
    ],
  } satisfies DeepPartial<Awaited<ReturnType<typeof serverFn__readOneUser>>>;
}

export function mocked__serverFn__readUsersCount() {
  return { count: 20 } satisfies DeepPartial<
    Awaited<ReturnType<typeof serverFn__readUsersCount>>
  >;
}

// db
//   .select()
//   .from(users)
//   .leftJoin(beneficiaries,eq(users.id,beneficiaries.userId))
//   .leftJoin(coursePurchases,eq(users.id,coursePurchases.userId))
//   .leftJoin(requestedAssets,eq(users.id,requestedAssets.userId))
//   .leftJoin(testimonials,eq(users.id,testimonials.authorId))
//   .leftJoin(webinarPurchases,eq(users.id,webinarPurchases.userId))
