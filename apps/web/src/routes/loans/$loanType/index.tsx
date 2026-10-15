import { IndividualLoanType } from "@/components/main/loans/loan-type";
import { serverFn__readOneLoansDetails } from "@/integrations/tanstack/server-functions/bank-loan-details.sfn";
import { createFileRoute, notFound } from "@tanstack/react-router";

export const Route = createFileRoute("/loans/$loanType/")({
  component: RouteComponent,

  loader: async ({ params: { loanType } }) => {
    const [oneLoansDetails] = await Promise.all([
      serverFn__readOneLoansDetails({
        data: { identifier: { loanTypeId: loanType } },
      }),
    ]);

    if (!oneLoansDetails) throw notFound();

    return { oneLoansDetails };
  },
});

function RouteComponent() {
  return (
    <>
      <IndividualLoanType />
    </>
  );
}
