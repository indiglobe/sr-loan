import { FullAgreementContent } from "@/ui/agreement";
import { cn } from "@repo/styles/cn";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(authenticated-routes)/admin/agreement/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className={cn(`py-6`)} >
      <FullAgreementContent/>
    </div>
  );
}
