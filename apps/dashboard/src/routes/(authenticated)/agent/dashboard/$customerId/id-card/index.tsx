import { IdCardPage } from "@/components/main/agent/customer-idcard/idcard";
import { serverFn__readOneUser } from "@/integrations/tanstack/server-functions/user.sfn";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/(authenticated)/agent/dashboard/$customerId/id-card/",
)({
  component: RouteComponent,

  loader: async ({ params: { customerId } }) => {
    const [setteledUserDetails] = await Promise.all([
      serverFn__readOneUser({
        data: { identifier: { employeeId: customerId } },
      }),
    ]);

    return { setteledUserDetails };
  },
});

function RouteComponent() {
  return (
    <>
      <IdCardPage />
    </>
  );
}
