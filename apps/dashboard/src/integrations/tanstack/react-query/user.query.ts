import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import {
  serverFn__createNewUser,
  serverFn__readAllUsers,
  serverFn__readOneUser,
} from "../server-funciton/user.sfn";
import { serverFn__createNewAgent } from "@/integrations/form-actions/add-agent";

export function useCreateNewUser() {
  const createNewUser = useServerFn(serverFn__createNewUser);
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createNewUser,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys().adminDashboard(),
      });
    },
  });
}

export function useCreateNewAgent() {
  const createNewAgent = useServerFn(serverFn__createNewAgent);
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createNewAgent,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys().all(),
      });
    },
  });
}

export function useReadOneUser(identifier: { email: string }) {
  const readOneUser = useServerFn(serverFn__readOneUser);

  return useQuery({
    queryKey: queryKeys().one(identifier),

    queryFn: () =>
      readOneUser({
        data: {
          identifier: { email: identifier.email },
        },
      }),

    enabled: !!identifier,
  });
}

export function useReadAllUsers(identifier?: { role: "ADMIN" | "AGENT" }) {
  const readAllUsers = useServerFn(serverFn__readAllUsers);

  return useQuery({
    queryKey: queryKeys().allUsers(identifier),

    queryFn: () =>
      readAllUsers({
        data: identifier ? { identifier } : undefined,
      }),
  });
}

export function queryKeys() {
  return {
    all: () => ["user"] as const,

    admin: () => [...queryKeys().all(), "admin"] as const,

    adminDashboard: () => [...queryKeys().admin(), "dashboard"] as const,

    one: (identifier: { email: string }) =>
      [...queryKeys().all(), "one", identifier] as const,

    allUsers: (identifier?: { role: "ADMIN" | "AGENT" }) =>
      [...queryKeys().all(), "all", identifier ?? {}] as const,
  };
}
