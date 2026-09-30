import { deleteUserDetailsCookie } from "@/lib/auth/session";
import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/(authenticated-routes)/agent")({
  component: RouteComponent,

  beforeLoad: async ({ context }) => {
    if (context.userDetailsAsCookie.role !== "AGENT") {
      await deleteUserDetailsCookie();
      throw redirect({ to: "/login" });
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
