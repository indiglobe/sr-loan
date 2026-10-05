import { InstantLoanFooter } from "@/components/main/loans/instant-loan/instant-loan-footer";
import { PersonalLoanFooter } from "@/components/main/loans/personal-loan/personal-loan-footer";
import Main from "@/components/main/main";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/loans/personal-loan")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Main className="space-y-6 px-4 py-6 sm:px-10 md:px-12 lg:px-16">
      <Outlet />
      <PersonalLoanFooter />
      <InstantLoanFooter />
    </Main>
  );
}
