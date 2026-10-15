import OurProduct from "@/components/main/our-product/our-product";
import { serverFn__readAllServiceType } from "@/integrations/tanstack/server-functions/service-type.sfn";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/our-product/")({
  component: RouteComponent,

  loader: async () => {
    const [serviceTypes] = await Promise.all([serverFn__readAllServiceType()]);

    return {
      serviceTypes,
    };
  },
});

function RouteComponent() {
  return (
    <>
      <OurProduct />
    </>
  );
}
