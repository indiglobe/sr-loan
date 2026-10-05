import { InstantLoan } from "@/components/main/loans/instant-loan/instant-loan";
import { banksInstantLoanData } from "@/components/main/loans/instant-loan/instant-loan-data";
import { createFileRoute } from "@tanstack/react-router";
import z from "zod";

const personalLoanRouteQueryParamsSchema = z.object({
  "bank-name": z.string().optional(),
});

export const Route = createFileRoute("/loans/instant-loan/")({
  component: RouteComponent,

  validateSearch: personalLoanRouteQueryParamsSchema,

  loader: async () => {
    return { banksInstantLoanData };
  },
});

function RouteComponent() {
  return (
    <>
      <InstantLoan />
    </>
  );
}
