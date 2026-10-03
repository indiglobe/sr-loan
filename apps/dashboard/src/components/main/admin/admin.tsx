import { deleteUserDetailsCookie as deleteUserDetailsCookieServerFn } from "@/integrations/auth/session";
import { cn } from "@repo/styles/cn";
import { Link, useNavigate } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";

export function AdminHeader() {
  const deleteUserDetailsCookie = useServerFn(deleteUserDetailsCookieServerFn);
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 border-b border-primary-100 backdrop-blur-lg py-4 px-4 sm:px-6 lg:px-8 dark:border-primary-900">
      <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-6">
        {/* Brand / Dashboard identity */}
        <div className="flex min-w-0 items-center gap-4">
          <div className="min-w-0">
            <div
              className={cn(
                "mb-1 inline-flex rounded-md px-2.5 py-0.5 bg-primary-50 text-primary-700 text-2.75 font-semibold dark:bg-primary-900 dark:text-primary-200",
              )}
            >
              Admin Panel
            </div>

            <h1
              className={cn(
                "font-brand-secondary truncate text-xl font-bold tracking-tight text-primary-950 dark:text-primary-50",
              )}
            >
              Admin Dashboard
            </h1>

            <p
              className={cn(
                "hidden text-xs leading-5 sm:block text-primary-600 dark:text-primary-300",
              )}
            >
              Manage agents and administration from one place.
            </p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex shrink-0 items-center gap-1 rounded-xl bg-primary-50 p-1 dark:bg-primary-900/60">
          <Link
            to="/admin/dashboard"
            activeProps={{
              className:
                "bg-white text-primary-700 shadow-sm dark:bg-primary-800 dark:text-primary-100",
            }}
            className="rounded-lg px-4 py-2 text-sm font-medium text-primary-600 transition hover:text-primary-900 dark:text-primary-300 dark:hover:text-primary-50"
          >
            Dashboard
          </Link>

          <Link
            to="/admin/agreement"
            activeProps={{
              className:
                "bg-white text-primary-700 shadow-sm dark:bg-primary-800 dark:text-primary-100",
            }}
            className="rounded-lg px-4 py-2 text-sm font-medium text-primary-600 transition hover:text-primary-900 dark:text-primary-300 dark:hover:text-primary-50"
          >
            Agreement
          </Link>
        </nav>

        {/* Logout */}
        <button
          type="button"
          className={cn(
            "rounded-lg px-4 py-2 text-sm font-semibold transition bg-primary-600 text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:bg-primary-500 dark:hover:bg-primary-400 dark:focus:ring-offset-primary-950",
          )}
          onClick={async () => {
            await deleteUserDetailsCookie();
            navigate({ to: "/login" });
          }}
        >
          Logout
        </button>
      </div>
    </header>
  );
}
