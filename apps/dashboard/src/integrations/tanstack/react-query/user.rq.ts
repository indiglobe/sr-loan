import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  serverFn__readOneUser,
  serverFn__readAllUsers,
  serverFn__createOneUser,
} from "@/integrations/tanstack/server-functions/querry/user.sfn";

type ReadOneUserInput = Parameters<typeof serverFn__readOneUser>[0]["data"];
type ReadAllUsersInput = NonNullable<
  Parameters<typeof serverFn__readAllUsers>[0]
>["data"];
type CreateOneUserInput = Parameters<typeof serverFn__createOneUser>[0]["data"];

export const queryKeys = {
  all: () => ["users"] as const,

  lists: () => [...queryKeys.all(), "list"] as const,

  list: (data?: ReadAllUsersInput) => [...queryKeys.lists(), data] as const,

  one: (data: ReadOneUserInput) => [...queryKeys.all(), "one", data] as const,
};

export function useCreateOneUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateOneUserInput) => serverFn__createOneUser({ data }),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.lists(),
      });
    },
  });
}

export function useReadOneUser(data: ReadOneUserInput) {
  return useQuery({
    queryKey: queryKeys.one(data),
    queryFn: () => serverFn__readOneUser({ data }),
  });
}

export function useReadAllUsers(data?: ReadAllUsersInput) {
  return useQuery({
    queryKey: queryKeys.list(data),
    queryFn: () => serverFn__readAllUsers({ data }),
  });
}
