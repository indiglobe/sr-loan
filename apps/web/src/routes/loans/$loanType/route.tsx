import Main from "@/components/main/main";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/loans/$loanType")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Main className="space-y-6 px-4 py-6 sm:px-10 md:px-12 lg:px-16">
      <Outlet />
    </Main>
  );
}
