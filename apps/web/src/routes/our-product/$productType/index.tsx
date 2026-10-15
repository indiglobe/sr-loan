import { IndividualServiceType } from "@/components/main/our-product/service-type";
import { serverFn__readOneServiceDetails } from "@/integrations/tanstack/server-functions/bank-service-details.sfn";
import { createFileRoute, notFound } from "@tanstack/react-router";

export const Route = createFileRoute("/our-product/$productType/")({
  component: RouteComponent,

  loader: async ({ params: { productType } }) => {
    const [oneServiceDetails] = await Promise.all([
      serverFn__readOneServiceDetails({
        data: { identifier: { serviceTypeId: productType } },
      }),
    ]);

    if (!oneServiceDetails) throw notFound();

    return { oneServiceDetails };
  },
});

function RouteComponent() {
  return (
    <>
      <IndividualServiceType />
    </>
  );
}
