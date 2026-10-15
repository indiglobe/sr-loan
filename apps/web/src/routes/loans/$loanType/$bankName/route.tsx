import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/loans/$loanType/$bankName")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Outlet />
    </>
  );
}
