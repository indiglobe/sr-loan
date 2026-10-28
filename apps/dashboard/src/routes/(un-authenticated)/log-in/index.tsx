import { Login } from "@/components/main/login/login";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(un-authenticated)/log-in/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Login />
    </>
  );
}
