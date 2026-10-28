import { cn } from "@repo/styles/cn";
import { Link } from "@tanstack/react-router";
import { LogoIcon, LogoText } from "@repo/ui/logo";

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
          {/* Logo */}
          <Link
            to="/"

            className="flex items-center"
          >
            <LogoIcon className={cn(`[--logo-size:--spacing(12)]`)} />
            <LogoText
              className={cn(
                `[--logo-size:--spacing(12)] max-xs:hidden xs:block md:hidden xl:block`,
              )}
            />
          </Link>
        </div>
      </div>
    </header>
  );
}
