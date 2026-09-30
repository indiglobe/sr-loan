import { fetchUserDetailsCookie } from "@/lib/auth/session";
import { Outlet, createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/(authenticated-routes)")({
  component: RouteComponent,

  beforeLoad: async () => {
    const userDetailsAsCookie = await fetchUserDetailsCookie();

    if (!userDetailsAsCookie) {
      throw redirect({ to: "/login" });
    }

    return { userDetailsAsCookie };
  },
});

function RouteComponent() {
  return (
    <>
      <Outlet />
    </>
  );
}
