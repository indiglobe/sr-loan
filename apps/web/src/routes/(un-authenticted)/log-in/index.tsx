import { Login } from "@/components/main/log-in/log-in";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(un-authenticted)/log-in/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Login />
    </>
  );
}
