import { createFileRoute } from "@tanstack/react-router";
import { Home } from "@/components/main/home/home";

export const Route = createFileRoute("/")({
  component: RouteComponent,

  head: () => {
    const title = "SR Loan Service | Simple & Flexible Loan Solutions";
    const description = "SR Loan Service | Simple & Flexible Loan Solutions";
    return {
      meta: [
        { title: title },
        {
          name: "description",
          content: description,
        },
        {
          property: "og:title",
          content: title,
        },
        {
          property: "og:description",
          content: description,
        },
      ],
    };
  },
});

function RouteComponent() {
  return (
    <>
      <Home />
    </>
  );
}
