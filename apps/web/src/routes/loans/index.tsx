import Loans from "@/components/main/loans/loans";
import { serverFn__readAllLoansTypes } from "@/integrations/tanstack/server-functions/loan-type.sfn";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/loans/")({
  component: RouteComponent,

  loader: async () => {
    const [loanTypes] = await Promise.all([serverFn__readAllLoansTypes()]);

    return {
      loanTypes,
    };
  },
});

function RouteComponent() {
  return (
    <>
      <Loans />
    </>
  );
}
