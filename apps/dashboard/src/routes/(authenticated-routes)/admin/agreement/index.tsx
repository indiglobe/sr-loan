import { FullAgreementContent } from "@/ui/agreement";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/(authenticated-routes)/admin/agreement/",
)({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <FullAgreementContent />
    </>
  );
}
