import { cn } from "@repo/styles/cn";
import { Link } from "@tanstack/react-router";
import { Image } from "@unpic/react";

export function Header() {
  return (
    <header
      className={cn(
        "sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-accent-200 dark:border-accent-800",
      )}
    >
      <div
        className={cn(
          "@container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between",
        )}
      >
        <div className={cn("flex items-center gap-4")}>
          <Link to="/" className={cn(`flex gap-0 items-center`)}>
            <Image
              src="/logo-icon.svg"
              alt=""
              layout="fullWidth"
              className={cn(`w-14 h-14`)}
            />
            <Image
              src="/logo-text.svg"
              alt=""
              layout="fullWidth"
              className={cn(`w-56 h-14`)}
            />
          </Link>
        </div>

        <div className={cn("flex items-center gap-3")}>
          {/* <button
            onClick={onNavigateToLogin}
            className={cn(
              "px-4 py-2 rounded-xl text-sm font-medium border border-accent-300 dark:border-accent-700 hover:bg-accent-100 dark:hover:bg-accent-800 transition-all",
            )}
          >
            Sign In
          </button>
          <button
            onClick={onNavigateToDashboard}
            className={cn(
              "px-4 py-2 rounded-xl text-sm font-medium bg-primary-500 hover:bg-primary-600 text-white shadow-md shadow-primary-500/20 transition-all flex items-center gap-1.5",
            )}
          >
            Client Portal <ArrowRight className={cn("w-4 h-4")} />
          </button> */}
        </div>
      </div>
    </header>
  );
}
