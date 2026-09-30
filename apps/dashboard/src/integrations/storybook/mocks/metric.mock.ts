import type { serverFn__readAllMetrics } from "@/integrations/server-functions/querry/metric.sa";
import type { DeepPartial } from "@/utils/types/storybook";

export function mocked__serverFn__readAllMetrics() {
  return [
    {
      id: 1,
      value: "unknown",
      label: "Tricesimus repudiandae cribro cupiditas.",
      suffix: "+",
      isVisible: false,
      updatedAt: "2026-08-20 18:55:49.214000",
      createdAt: "2026-08-20 18:55:49.214000",
      tableIdentifierToken: "MTRC",
    },
    {
      id: 2,
      value: "cruel",
      label: "Talis asporto ceno voluptatem.",
      suffix: "%",
      isVisible: false,
      updatedAt: "2026-08-20 18:55:49.214000",
      createdAt: "2026-08-20 18:55:49.214000",
      tableIdentifierToken: "MTRC",
    },
    {
      id: 3,
      value: "yearly",
      label: "Voco contego tonsor cresco.",
      suffix: "%",
      isVisible: false,
      updatedAt: "2026-08-20 18:55:49.214000",
      createdAt: "2026-08-20 18:55:49.214000",
      tableIdentifierToken: "MTRC",
    },
    {
      id: 4,
      value: "mysterious",
      label: "Vobis itaque turpis succedo.",
      suffix: "+",
      isVisible: false,
      updatedAt: "2026-08-20 18:55:49.214000",
      createdAt: "2026-08-20 18:55:49.214000",
      tableIdentifierToken: "MTRC",
    },
  ] satisfies DeepPartial<Awaited<ReturnType<typeof serverFn__readAllMetrics>>>;
}

// db
//   .select()
//   .from(metrics)
