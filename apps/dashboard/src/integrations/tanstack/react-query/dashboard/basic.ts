import { serverFn__readAllCoursePurchases } from "@/integrations/server-functions/querry/course-purchase.sa";
import { serverFn__readAllWebinarPurchases } from "@/integrations/server-functions/querry/webinar-purchase.sa";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { useRouteContext } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";

export const querryKeys = {
  all: () => ["dashboard"],
  coursePurchases: () => [...querryKeys.all(), "course-purchases"],
  webinarPurchases: () => [...querryKeys.all(), "webinar-purchases"],
};

export function useFetchAllCoursePurchases() {
  const readAllCoursePurchases = useServerFn(serverFn__readAllCoursePurchases);
  const {
    userDetailsFromCookie: { userId },
  } = useRouteContext({ from: "/(authenticated)/(existing-users)/dashboard/" });

  return useQuery(
    queryOptions({
      queryFn: () =>
        readAllCoursePurchases({
          data: {
            identifier: { userId: userId },
            joiningOptions: { courseDetails: true },
          },
        }),
      queryKey: querryKeys.coursePurchases(),
    }),
  );
}

export function useFetchAllWebinarPurchases() {
  const readAllWebinarPurchases = useServerFn(
    serverFn__readAllWebinarPurchases,
  );
  const {
    userDetailsFromCookie: { userId },
  } = useRouteContext({ from: "/(authenticated)/(existing-users)/dashboard/" });

  return useQuery(
    queryOptions({
      queryFn: () =>
        readAllWebinarPurchases({
          data: {
            identifier: { userId: userId },
            joiningOptions: { webinar: true },
          },
        }),
      queryKey: querryKeys.webinarPurchases(),
    }),
  );
}
