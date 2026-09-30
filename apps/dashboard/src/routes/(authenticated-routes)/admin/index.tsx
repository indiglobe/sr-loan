import { cn } from "@repo/styles/cn";
import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(authenticated-routes)/admin/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main>
      <div>
        <div
          className={cn(
            "mb-2 inline-flex rounded-md bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-700 dark:bg-primary-950 dark:text-primary-300",
          )}
        >
          Admin Panel
        </div>

        <h1
          className={cn(
            "font-brand-secondary text-2xl font-bold tracking-tight text-accent-950 sm:text-3xl dark:text-accent-50",
          )}
        >
          Admin Dashboard
        </h1>

        <p
          className={cn(
            "mt-1 max-w-xl text-sm leading-6 text-accent-600 dark:text-accent-300",
          )}
        >
          Manage agents and administration from one place.
        </p>
      </div>

      <Outlet />
    </main>
  );
}
