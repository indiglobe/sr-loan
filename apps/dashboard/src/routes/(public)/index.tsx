import { HomePage } from "@/components/main/home/home";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(public)/")({
  component: RouteComponent,

  head: () => ({
    meta: [
      {
        title: "SR Loan Service",
      },
    ],
  }),
});

function RouteComponent() {
  return (
    <>
      <HomePage />
    </>
  );
}
