import { fetchUserDetailsCookie } from "@/integrations/auth/session";
import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import z from "zod";

export const routeSearchParamsSchema = z
  .object({ "redirect-to": z.url().optional() })
  .optional();

export const Route = createFileRoute("/(un-authenticted)")({
  component: RouteComponent,

  validateSearch: routeSearchParamsSchema,

  beforeLoad: async () => {
    const userDetailsAsCookie = await fetchUserDetailsCookie();

    if (userDetailsAsCookie) {
      throw redirect({ to: "/" });
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
