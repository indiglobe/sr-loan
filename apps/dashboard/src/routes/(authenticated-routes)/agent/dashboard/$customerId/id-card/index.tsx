import { IdCardPage } from "@/components/main/agent/customer-idcard/idcard";
import { serverFn__readOneUser } from "@/integrations/tanstack/server-functions/querry/user.sfn";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/(authenticated-routes)/agent/dashboard/$customerId/id-card/",
)({
  component: RouteComponent,

  loader: async ({ context }) => {
    const {
      userDetailsAsCookie: { email },
    } = context;

    const [setteledUserDetails] = await Promise.allSettled([
      serverFn__readOneUser({ data: { identifier: { email } } }),
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
