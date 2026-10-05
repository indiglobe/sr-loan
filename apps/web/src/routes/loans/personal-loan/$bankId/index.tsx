import { createFileRoute, notFound } from "@tanstack/react-router";
import { banksLoanData } from "@/components/main/loans/personal-loan/personal-loan-data";
import { IndividualPersonalLoan } from "@/components/main/loans/personal-loan/personal-loan";

export const Route = createFileRoute("/loans/personal-loan/$bankId/")({
  component: RouteComponent,

  loader: async ({ params }) => {
    const { bankId } = params;

    const bankDetails = banksLoanData.find((bank) => {
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
      <IndividualPersonalLoan />
    </>
  );
}
