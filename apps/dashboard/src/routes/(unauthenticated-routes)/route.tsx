import { fetchUserDetailsCookie } from "@/integrations/auth/session";
import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/(unauthenticated-routes)")({
  component: RouteComponent,

  beforeLoad: async () => {
    const userDetailsAsCookie = await fetchUserDetailsCookie();

    if (userDetailsAsCookie) {
      if (userDetailsAsCookie.role === "ADMIN")
        throw redirect({ to: "/admin/dashboard" });
      else if (userDetailsAsCookie.role === "AGENT")
        throw redirect({ to: "/agent/dashboard" });
    }
  },
});

function RouteComponent() {
  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  );
}
