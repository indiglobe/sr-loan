import OurProduct from "@/components/main/our-product/our-product";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/our-product/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <OurProduct />
    </>
  );
}
