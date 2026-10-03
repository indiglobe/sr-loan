import { AdminHeader } from "@/components/main/admin/admin";
import { cn } from "@repo/styles/cn";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/(authenticated-routes)/admin")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <AdminHeader />
      <main className={cn(`py-4 px-4 sm:px-6 lg:px-8 `)}>
        <Outlet />
      </main>
    </>
  );
}
