import { serverFn__readAllContactSubmissions } from "@/integrations/server-functions/querry/contact-submission.sa";
import { serverFn__readAllCoursePurchases } from "@/integrations/server-functions/querry/course-purchase.sa";
import {
  serverFn__createCourse,
  serverFn__readAllCourses,
  serverFn__updateCourse,
} from "@/integrations/server-functions/querry/courses-offered.sa";
import {
  serverFn__readUsersCount,
  serverFn__readAllUsers,
} from "@/integrations/server-functions/querry/user.sa";
import {
  serverFn__createOneWebinar,
  serverFn__readAllWebinars,
} from "@/integrations/server-functions/querry/webinar-offered.sa";
import { serverFn__createOneWebinarMeeting } from "@/integrations/server-functions/querry/webinar-meeting.sa";
import { serverFn__readAllWebinarPurchases } from "@/integrations/server-functions/querry/webinar-purchase.sa";
import {
  useQuery,
  queryOptions,
  useMutation,
  useQueryClient,
  mutationOptions,
} from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";

export const querryKeys = {
  all: () => ["dashboard"],
  recentUsers: () => [...querryKeys.all(), "recent-users"],
  allUsersCount: () => [...querryKeys.all(), "all-users-count"],
  allCoursePurchases: () => [...querryKeys.all(), "all-course-purchases"],
  allCourse: () => [...querryKeys.all(), "all-course"],
  allWebinarPurchases: () => [...querryKeys.all(), "all-webinar-purchases"],
  allWebinar: () => [...querryKeys.all(), "all-webinar"],
  allContactSubmissions: () => [...querryKeys.all(), "all-contact-submissions"],
};

export function useFetchAllRecentUsers() {
  const readAllUsers = useServerFn(serverFn__readAllUsers);

  return useQuery(
    queryOptions({
      queryFn: () => readAllUsers({ data: { queryOptions: { limit: 10 } } }),
      queryKey: querryKeys.recentUsers(),
    }),
  );
}

export function useFetchUsersCount() {
  const readUsersCount = useServerFn(serverFn__readUsersCount);

  return useQuery(
    queryOptions({
      queryFn: readUsersCount,
      queryKey: querryKeys.allUsersCount(),
    }),
  );
}

export function useFetchAllCoursePurchases() {
  const readAllCoursePurchases = useServerFn(serverFn__readAllCoursePurchases);

  return useQuery(
    queryOptions({
      queryFn: readAllCoursePurchases,
      queryKey: querryKeys.allCoursePurchases(),
    }),
  );
}

export function useFetchAllWebinarPurchases() {
  const readAllWebinarPurchases = useServerFn(
    serverFn__readAllWebinarPurchases,
  );

  return useQuery(
    queryOptions({
      queryFn: readAllWebinarPurchases,
      queryKey: querryKeys.allWebinarPurchases(),
    }),
  );
}

export function useFetchAllCourses() {
  const readAllCourses = useServerFn(serverFn__readAllCourses);

  return useQuery(
    queryOptions({
      queryFn: readAllCourses,
      queryKey: querryKeys.allCourse(),
    }),
  );
}

export function useFetchAllWebinars() {
  const readAllWebinars = useServerFn(serverFn__readAllWebinars);

  return useQuery(
    queryOptions({
      queryFn: () =>
        readAllWebinars({
          data: { joiningOptions: { livestreamDetails: true } },
        }),
      queryKey: querryKeys.allWebinar(),
    }),
  );
}

export function useCreateAllWebinars() {
  const createOneWebinar = useServerFn(serverFn__createOneWebinar);
  const queryClient = useQueryClient();

  return useMutation(
    mutationOptions({
      mutationFn: createOneWebinar,
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: querryKeys.allWebinar() });
      },
    }),
  );
}

export function useFetchAllContactSubmissions() {
  const readAllContactSubmissions = useServerFn(
    serverFn__readAllContactSubmissions,
  );

  return useQuery(
    queryOptions({
      queryFn: async () =>
        await readAllContactSubmissions({
          data: { queryOptions: { limit: 10 } },
        }),
      queryKey: querryKeys.allContactSubmissions(),
    }),
  );
}

export function useCreateWebinarMeeting() {
  const createOneWebinarMeeting = useServerFn(
    serverFn__createOneWebinarMeeting,
  );
  const queryClient = useQueryClient();

  return useMutation(
    mutationOptions({
      mutationFn: createOneWebinarMeeting,
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: querryKeys.allWebinar() });
      },
    }),
  );
}

export function useUpdateCourse() {
  const updateCourse = useServerFn(serverFn__updateCourse);
  const queryClient = useQueryClient();

  return useMutation(
    mutationOptions({
      mutationFn: updateCourse,

      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: querryKeys.allCourse() });
      },
    }),
  );
}

export function useCreateCourse() {
  const createCourse = useServerFn(serverFn__createCourse);
  const queryClient = useQueryClient();

  return useMutation(
    mutationOptions({
      mutationFn: createCourse,

      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: querryKeys.allCourse() });
      },
    }),
  );
}
