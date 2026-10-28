import { fetchUserDetailsCookie } from "@/integrations/auth/session";
import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import { env } from "@repo/env/client";

export const Route = createFileRoute("/(authenticated)")({
  component: RouteComponent,

  beforeLoad: async ({ location }) => {
    const userDetailsAsCookie = await fetchUserDetailsCookie();

    if (!userDetailsAsCookie) {
      throw redirect({
        to: "/log-in",
        search: {
          "redirect-to": new URL(location.pathname, env.VITE_WEB_APP_HOST),
        },
      });
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
