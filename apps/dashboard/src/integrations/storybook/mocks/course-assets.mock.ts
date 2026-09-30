import type { serverFn__readOneCourseAsset } from "@/integrations/server-functions/querry/course-assets.sa";
import type { DeepPartial } from "@/utils/types/storybook";

export function mocked__serverFn__readOneCourseAsset() {
  return {
    id: "2ba1194ee5",
    title: "atque caterva absum",
    description: null,
    accessLevelEnums: "paid",
    moduleId: "1e17f5af1e",
    updatedAt: "2026-08-20 18:55:52.231000",
    createdAt: "2026-08-20 18:55:52.231000",
    tableIdentifierToken: "CAST",
    assetDetail: {
      id: "e37ca15b13",
      assetUrl: "http://localhost:4000/assets/5.mp4",
      thumbnailUrl: "http://localhost:4000/images/thumb-5.jpg",
      assetType: "video",
      courseAssetId: "6f500bed77",
      updatedAt: "2026-08-20 18:55:52.436000",
      createdAt: "2026-08-20 18:55:52.436000",
      tableIdentifierToken: "ASET",
    },
    moduleDetail: {
      id: "6fc8972f37",
      title: "suscipit capto ubi",
      description:
        "Optio cultellus dolore alo vilitas volup. Sursum valeo cinis laboriosam.",
      displayOrder: 4,
      courseId: "c8306eb628",
      updatedAt: "2026-08-20 18:55:52.016000",
      createdAt: "2026-08-20 18:55:52.016000",
      tableIdentifierToken: "CMOD",
    },
    videoStatus: {
      id: 6,
      courseAssetId: "f0f7fd16ee",
      videoProcessStatus: "not-available",
      updatedAt: "2026-08-20 18:55:55.326000",
      createdAt: "2026-08-20 18:55:55.326000",
      tableIdentifierToken: "VPST",
    },
  } satisfies DeepPartial<
    Awaited<ReturnType<typeof serverFn__readOneCourseAsset>>
  >;
}

// db
//   .select()
//   .from(courseAssets)
//   .leftJoin(assetsDetail, eq(assetsDetail.courseAssetId, courseAssets.id))
//   .leftJoin(courseModule, eq(courseModule.id, courseAssets.moduleId))
//   .leftJoin(videoProcessStatus, eq(videoProcessStatus.id, courseAssets.id))
