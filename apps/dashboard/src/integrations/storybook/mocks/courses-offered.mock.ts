import type { serverFn__readAllCourses } from "@/integrations/server-functions/querry/courses-offered.sa";
import type { DeepPartial } from "@/utils/types/storybook";

export function mocked__serverFn__readAllCourses() {
  return [
    {
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
    {
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
    {
      id: "c8306eb628",
      topic: "Fundamental Analysis",
      title: "Analyze Companies Professionally",
      brochureUrl: "https://storage.sanjibacademy.com/brochure/fundamental.pdf",
      originalPrice: 14999,
      discountedPrice: 4999,
      thumbnailUrl: "https://storage.sanjibacademy.com/images/fundamental.jpg",
      thumbnailBase64: null,
      isActive: true,
      updatedAt: "2026-08-20 18:55:51.813000",
      createdAt: "2026-08-20 18:55:51.813000",
      tableIdentifierToken: "COFF",
    },
  ] satisfies DeepPartial<Awaited<ReturnType<typeof serverFn__readAllCourses>>>;
}

// db
//   .select()
//   .from(course)
