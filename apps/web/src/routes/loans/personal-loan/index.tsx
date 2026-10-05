import { PersonalLoan } from "@/components/main/loans/personal-loan/personal-loan";
import { createFileRoute } from "@tanstack/react-router";
import z from "zod";
import { banksLoanData } from "@/components/main/loans/personal-loan/personal-loan-data";

const personalLoanRouteQueryParamsSchema = z.object({
  "bank-name": z.string().optional(),
});

export const Route = createFileRoute("/loans/personal-loan/")({
  component: RouteComponent,

  validateSearch: personalLoanRouteQueryParamsSchema,

  loader: async () => {
    return { banksLoanData };
  },
});

function RouteComponent() {
  return (
    <>
      <PersonalLoan />
    </>
  );
}
