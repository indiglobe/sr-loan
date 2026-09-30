import { AdminDashboard } from "@/components/main/admin/dashboard/dashboard";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(authenticated-routes)/admin/dashboard/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <AdminDashboard />
    </>
  );
}
