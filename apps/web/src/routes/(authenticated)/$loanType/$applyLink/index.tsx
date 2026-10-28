import { createFileRoute, notFound, redirect } from "@tanstack/react-router";
import { serverFn__readOneLoansType } from "@/integrations/tanstack/server-functions/loan-type.sfn";
import { hasAccess } from "@repo/utils/utility/role";
import LoanAccessDenied from "@/components/main/loans/not-allowed";

export const Route = createFileRoute("/(authenticated)/$loanType/$applyLink/")({
  component: RouteComponent,

  beforeLoad: async ({ params, context }) => {
    const { applyLink, loanType } = params;

    const loanTypeFromDB = await serverFn__readOneLoansType({
      data: { identifier: { loanTypeId: loanType } },
    });

    if (!loanTypeFromDB) {
      throw notFound();
    }

    const { userDetailsAsCookie } = context;

    if (
      hasAccess(loanTypeFromDB.minimumAllowedRole, userDetailsAsCookie.role)
    ) {
      throw redirect({ href: applyLink });
    }
  },
});

function RouteComponent() {
  return (
    <>
      <LoanAccessDenied />
    </>
  );
}
