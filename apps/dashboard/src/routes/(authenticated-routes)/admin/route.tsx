import { AdminHeader } from "@/components/main/admin/admin";
import { deleteUserDetailsCookie } from "@/lib/auth/session";
import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/(authenticated-routes)/admin")({
  component: RouteComponent,

  beforeLoad: async ({ context }) => {
    if (context.userDetailsAsCookie.role !== "ADMIN") {
      await deleteUserDetailsCookie();
      throw redirect({ to: "/login" });
    }
  },
});

function RouteComponent() {
  return (
    <>
      <AdminHeader />
      <Outlet />
    </>
  );
}
