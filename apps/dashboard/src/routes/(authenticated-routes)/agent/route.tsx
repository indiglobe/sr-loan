import { AgentHeader } from "@/components/main/agent/agent";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/(authenticated-routes)/agent")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <AgentHeader />
      <Outlet />
    </>
  );
}
