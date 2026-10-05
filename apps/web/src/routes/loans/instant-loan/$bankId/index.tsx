import { createFileRoute, notFound } from "@tanstack/react-router";
import { banksInstantLoanData } from "@/components/main/loans/instant-loan/instant-loan-data";
import { IndividualInstantLoan } from "@/components/main/loans/instant-loan/instant-loan";

export const Route = createFileRoute("/loans/instant-loan/$bankId/")({
  component: RouteComponent,

  loader: async ({ params }) => {
    const { bankId } = params;

    const bankDetails = banksInstantLoanData.find((bank) => {
      return bank.id === bankId;
    });

    if (!bankDetails) {
      throw notFound();
    }

    return { bankDetails };
  },
});

function RouteComponent() {
  return (
    <>
      <IndividualInstantLoan />
    </>
  );
}
