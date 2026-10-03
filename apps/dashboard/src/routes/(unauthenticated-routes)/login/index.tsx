import LoginForm from "@/components/main/login/login";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(unauthenticated-routes)/login/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <LoginForm />
    </>
  );
}
