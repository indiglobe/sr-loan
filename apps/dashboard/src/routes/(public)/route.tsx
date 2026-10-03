import { Header } from "@/components/header/header";
import { fetchUserDetailsCookie } from "@/integrations/auth/session";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/(public)")({
  component: RouteComponent,

  beforeLoad: async () => {
    const userDetailsAsCookie = await fetchUserDetailsCookie();

    return { userDetailsAsCookie };
  },
});

function RouteComponent() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}
