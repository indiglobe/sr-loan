import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/(authenticated)/admin/dashboard/$agentId/",
)({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Outlet />
    </>
  );
}
