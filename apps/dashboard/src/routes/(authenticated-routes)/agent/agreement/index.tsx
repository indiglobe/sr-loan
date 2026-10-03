import { AgreementPage } from "@/components/main/agent/agreement/agreement";
import { serverFn__readOneUser } from "@/integrations/tanstack/server-functions/querry/user.sfn";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/(authenticated-routes)/agent/agreement/",
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
      <AgreementPage />
    </>
  );
}
