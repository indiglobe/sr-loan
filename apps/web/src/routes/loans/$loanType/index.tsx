import { read__AllLoansDetails } from "@repo/data/querries/bank-loan-details";
import { createFileRoute } from "@tanstack/react-router";
import z from "zod";

const personalLoanRouteQueryParamsSchema = z.object({
  "bank-name": z.string().optional(),
});

export const Route = createFileRoute("/loans/$loanType/")({
  component: RouteComponent,

  loader: async ({ params: { loanType } }) => {
    const [allLoansDetails] = await Promise.all([
      read__AllLoansDetails({ identifier: { loanTypeId: loanType } }),
    ]);

    return { allLoansDetails };
  },

  validateSearch: personalLoanRouteQueryParamsSchema,
});

function RouteComponent() {
  return <div>Hello "/loans/$loan_type/"!</div>;
}
