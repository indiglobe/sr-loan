import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/(authenticated-routes)/admin/")({
  component: RouteComponent,

  beforeLoad: async () => {
    throw redirect({ to: "/admin/dashboard" });
  },
});

function RouteComponent() {
  return (
    <>
      <Outlet />
    </>
  );
}
