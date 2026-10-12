import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/loans/$loanType/$bankName/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/loans/$loan_type/$bank_name/"!</div>;
}
