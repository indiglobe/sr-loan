import { LoginForm } from "@/components/main/home/home";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main>
      <LoginForm />
    </main>
  );
}
