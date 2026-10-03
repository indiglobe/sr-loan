import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/(authenticated-routes)/agent/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Outlet />
    </>
  );
}
