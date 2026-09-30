import { fetchUserDetailsCookie } from "@/lib/auth/session";
import { Outlet, createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/(unauthenticated-routes)")({
  component: RouteComponent,

  beforeLoad: async () => {
    const userDetailsAsCookie = await fetchUserDetailsCookie();

    if (userDetailsAsCookie && userDetailsAsCookie.role === "ADMIN") {
      throw redirect({ to: "/admin" });
    }

    if (userDetailsAsCookie && userDetailsAsCookie.role === "AGENT") {
      throw redirect({ to: "/agent" });
    }
  },
});

function RouteComponent() {
  return (
    <>
      <Outlet />
    </>
  );
}
