import Loans from "@/components/main/loans/loans";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/loans/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Loans />
    </>
  );
}
