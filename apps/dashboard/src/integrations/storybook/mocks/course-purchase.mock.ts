import type {
  serverFn__readAllCoursePurchases,
  serverFn__readOneCoursePurchase,
} from "@/integrations/server-functions/querry/course-purchase.sa";
import type { DeepPartial } from "@/utils/types/storybook";

export function mocked__serverFn__readAllCoursePurchases() {
  return [
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
      courseDetails: {
        id: "a354cafb0c",
        topic: "Institutional Trading",
        title: "Learn Smart Money Concepts",
        brochureUrl:
          "https://storage.sanjibacademy.com/brochure/institutional.pdf",
        originalPrice: 14999,
        discountedPrice: 4999,
        thumbnailUrl:
          "https://storage.sanjibacademy.com/images/institutional.jpg",
        thumbnailBase64: null,
        isActive: true,
        updatedAt: "2026-08-20 18:55:51.813000",
        createdAt: "2026-08-20 18:55:51.813000",
        tableIdentifierToken: "COFF",
      },
      userDetails: {
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
      },
    },
    {
      id: 2,
      userId: "0560c802f9",
      courseId: "c8306eb628",
      razorpayOrderId: "5dFEkfDpkTmlguTYoYlCH",
      razorpayPaymentId: null,
      razorpaySignature: null,
      isCompleted: true,
      updatedAt: "2026-08-20 18:55:52.864000",
      createdAt: "2026-08-20 18:55:52.864000",
      tableIdentifierToken: "CBPR",
      courseDetails: {
        id: "c8306eb628",
        topic: "Fundamental Analysis",
        title: "Analyze Companies Professionally",
        brochureUrl:
          "https://storage.sanjibacademy.com/brochure/fundamental.pdf",
        originalPrice: 14999,
        discountedPrice: 4999,
        thumbnailUrl:
          "https://storage.sanjibacademy.com/images/fundamental.jpg",
        thumbnailBase64: null,
        isActive: true,
        updatedAt: "2026-08-20 18:55:51.813000",
        createdAt: "2026-08-20 18:55:51.813000",
        tableIdentifierToken: "COFF",
      },
      userDetails: {
        id: "0560c802f9",
        email: "tillman goyette-139@email.com",
        fullName: "Tillman Goyette",
        avatarUrl: "https://avatars.githubusercontent.com/u/36606350",
        age: 25,
        role: "basic",
        phoneNumber: "1-917-486-",
        updatedAt: "2026-08-20 18:55:47.302000",
        createdAt: "2026-08-20 18:55:47.302000",
        tableIdentifierToken: "USER",
      },
    },
    {
      id: 3,
      userId: "0862b772e8",
      courseId: "c64815a37f",
      razorpayOrderId: "sxYTujo2w-pNJXZUSDAe6",
      razorpayPaymentId: null,
      razorpaySignature: null,
      isCompleted: true,
      updatedAt: "2026-08-20 18:55:52.864000",
      createdAt: "2026-08-20 18:55:52.864000",
      tableIdentifierToken: "CBPR",
      courseDetails: {
        id: "c64815a37f",
        topic: "F&O Hedging",
        title: "Protect Your Capital",
        brochureUrl: "https://storage.sanjibacademy.com/brochure/hedging.pdf",
        originalPrice: 14999,
        discountedPrice: 4999,
        thumbnailUrl: "https://storage.sanjibacademy.com/images/hedging.jpg",
        thumbnailBase64: null,
        isActive: true,
        updatedAt: "2026-08-20 18:55:51.813000",
        createdAt: "2026-08-20 18:55:51.813000",
        tableIdentifierToken: "COFF",
      },
      userDetails: {
        id: "0862b772e8",
        email: "ebony rath-115@email.com",
        fullName: "Ebony Rath",
        avatarUrl:
          "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/7.jpg",
        age: 60,
        role: "basic",
        phoneNumber: "1-250-815-",
        updatedAt: "2026-08-20 18:55:47.302000",
        createdAt: "2026-08-20 18:55:47.302000",
        tableIdentifierToken: "USER",
      },
    },
    {
      id: 4,
      userId: "0b74cb5b8c",
      courseId: "a354cafb0c",
      razorpayOrderId: "n0RQcaqtZbsi3NeC9Ecff",
      razorpayPaymentId: null,
      razorpaySignature: null,
      isCompleted: false,
      updatedAt: "2026-08-20 18:55:52.864000",
      createdAt: "2026-08-20 18:55:52.864000",
      tableIdentifierToken: "CBPR",
      courseDetails: {
        id: "a354cafb0c",
        topic: "Institutional Trading",
        title: "Learn Smart Money Concepts",
        brochureUrl:
          "https://storage.sanjibacademy.com/brochure/institutional.pdf",
        originalPrice: 14999,
        discountedPrice: 4999,
        thumbnailUrl:
          "https://storage.sanjibacademy.com/images/institutional.jpg",
        thumbnailBase64: null,
        isActive: true,
        updatedAt: "2026-08-20 18:55:51.813000",
        createdAt: "2026-08-20 18:55:51.813000",
        tableIdentifierToken: "COFF",
      },
      userDetails: {
        id: "0b74cb5b8c",
        email: "adam hahn-39@email.com",
        fullName: "Adam Hahn",
        avatarUrl:
          "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/16.jpg",
        age: 52,
        role: "basic",
        phoneNumber: "491.571.65",
        updatedAt: "2026-08-20 18:55:47.301000",
        createdAt: "2026-08-20 18:55:47.301000",
        tableIdentifierToken: "USER",
      },
    },
  ] satisfies DeepPartial<
    Awaited<ReturnType<typeof serverFn__readAllCoursePurchases>>
  >;
}

export function mocked__serverFn__readOneCoursePurchase() {
  return {
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
    courseDetails: {
      id: "a354cafb0c",
      topic: "Institutional Trading",
      title: "Learn Smart Money Concepts",
      brochureUrl:
        "https://storage.sanjibacademy.com/brochure/institutional.pdf",
      originalPrice: 14999,
      discountedPrice: 4999,
      thumbnailUrl:
        "https://storage.sanjibacademy.com/images/institutional.jpg",
      thumbnailBase64: null,
      isActive: true,
      updatedAt: "2026-08-20 18:55:51.813000",
      createdAt: "2026-08-20 18:55:51.813000",
      tableIdentifierToken: "COFF",
    },
    userDetails: {
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
    },
  } satisfies DeepPartial<
    Awaited<ReturnType<typeof serverFn__readOneCoursePurchase>>
  >;
}

// db
//   .select()
//   .from(coursePurchases)
//   .leftJoin(course,eq(course.id, coursePurchases.courseId))
//   .leftJoin(users,eq(users.id,coursePurchases.userId))
