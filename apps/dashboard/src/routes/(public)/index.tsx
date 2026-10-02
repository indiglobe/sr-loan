import { HomePage } from "@/components/main/home/home";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(public)/")({
  head: () => ({
    meta: [
      {
        title: "SR Loan Service",
      },
    ],
  }),

  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <HomePage />
    </>
  );
}
