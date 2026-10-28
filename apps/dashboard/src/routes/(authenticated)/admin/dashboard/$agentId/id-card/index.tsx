import { IdCardPage } from "@/components/main/admin/customer-idcard/idcard";
import { serverFn__readOneUser } from "@/integrations/tanstack/server-functions/user.sfn";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/(authenticated)/admin/dashboard/$agentId/id-card/",
)({
  component: RouteComponent,

  loader: async ({ params: { agentId } }) => {
    const [setteledUserDetails] = await Promise.allSettled([
      serverFn__readOneUser({ data: { identifier: { employeeId: agentId } } }),
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
