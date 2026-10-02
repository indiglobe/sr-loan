import { cn } from "@repo/styles/cn";

export function Footer() {
  return (
    <footer
      className={cn(
        "border-t border-accent-200 dark:border-accent-800 py-8 bg-background/50",
      )}
    >
      <div
        className={cn(
          "@container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-accent-600 dark:text-accent-400",
        )}
      >
        <p>© {new Date().getFullYear()} SR Loan Services Corp.</p>
        <div className={cn("flex items-center gap-6")}>
          <span
            className={cn(
              "hover:text-foreground cursor-pointer transition-colors",
            )}
          >
            Privacy Policy
          </span>
          <span
            className={cn(
              "hover:text-foreground cursor-pointer transition-colors",
            )}
          >
            Terms & Conditions
          </span>
          <span
            className={cn(
              "hover:text-foreground cursor-pointer transition-colors",
            )}
          >
            Contact Desk
          </span>
        </div>
      </div>
    </footer>
  );
}
