import { AgentDashboard } from "@/components/main/agent/dashboard/dashboard";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/(authenticated)/agent/dashboard/",
)({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <AgentDashboard />
    </>
  );
}
