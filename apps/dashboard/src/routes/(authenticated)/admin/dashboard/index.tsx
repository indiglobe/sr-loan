import { createFileRoute } from "@tanstack/react-router";
import { AdminDashboard } from "@/components/main/admin/dashboard/dashboard";

export const Route = createFileRoute(
  "/(authenticated)/admin/dashboard/",
)({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <AdminDashboard />
    </>
  );
}
