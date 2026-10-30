import { useQuery } from "@tanstack/react-query";
import { useRouteContext } from "@tanstack/react-router";

import { serverFn__readAllUsers } from "../server-functions/user.sfn";

export const queryKeys = {
  all: ["admin"] as const,

  dashboard: () => [...queryKeys.all, "dashboard"] as const,

  users: () => [...queryKeys.all, "users"] as const,

  list: (employeeId: string) =>
    [...queryKeys.users(), "list", employeeId] as const,
};

function useUserData() {
  const context = useRouteContext({
    from: "/(authenticated)/admin",
  });

  return context.userDetailsAsCookie;
}

export function useReadAllUsers() {
  const { employeeId } = useUserData();

  return useQuery({
    queryKey: queryKeys.list(employeeId),

    queryFn: () =>
      serverFn__readAllUsers({
        data: {
          identifier: {
            referrerEmployeeId: employeeId,
          },
        },
      }),

  });
}
