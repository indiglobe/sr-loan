import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/(authenticated)/admin/")({
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
