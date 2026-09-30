import { Outlet, createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/(authenticated-routes)/admin/")({
  component: RouteComponent,

  beforeLoad: () => {
    throw redirect({
      to: "/admin/dashboard",
    });
  },
});

function RouteComponent() {
  return (
    <>
      <Outlet />
    </>
  );
}
