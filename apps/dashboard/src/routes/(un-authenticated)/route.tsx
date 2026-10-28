import { fetchUserDetailsCookie } from "@/integrations/auth/session";
import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import z from "zod";

export const routeSearchParamsSchema = z
  .object({ "redirect-to": z.url().optional() })
  .optional();

export const Route = createFileRoute("/(un-authenticated)")({
  component: RouteComponent,

  validateSearch: routeSearchParamsSchema,

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
