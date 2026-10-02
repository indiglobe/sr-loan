import { useState } from "react";
import {
  ShieldCheck,
  UserCheck,
  LayoutDashboard,
  Sparkles,
  LogIn,
} from "lucide-react";
import { cn } from "@repo/styles/cn";
import { Link } from "@tanstack/react-router";

export function HomePage() {
  const [isSignedIn] = useState({ userName: "", userEmail: "" });

  return (
    <section
      className={cn(
        "@container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32 grow flex flex-col items-center justify-center text-center",
      )}
    >
      <div
        className={cn(
          "w-full p-8 sm:p-12 rounded-xl bg-accent-50/50 dark:bg-accent-900/30 border border-accent-200 dark:border-accent-800 shadow-xl flex flex-col items-center gap-6 relative overflow-hidden",
        )}
      >
        <div
          className={cn(
            "absolute -right-20 -top-20 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl pointer-events-none",
          )}
        />

        {isSignedIn ? (
          /* ================= ALREADY LOGGED IN STATE ================= */
          <>
            <div
              className={cn(
                "w-14 h-14 rounded-lg bg-secondary-500/20 border border-secondary-500/30 flex items-center justify-center text-secondary-600 dark:text-secondary-400 shadow-inner",
              )}
            >
              <UserCheck className={cn("w-7 h-7")} />
            </div>

            <div className={cn("space-y-2 max-w-lg")}>
              <div
                className={cn(
                  "inline-flex items-center gap-2 px-3 py-1 rounded-md bg-secondary-500/20 text-secondary-700 dark:text-secondary-300 text-xs font-semibold",
                )}
              >
                <ShieldCheck className={cn("w-3.5 h-3.5")} /> Active Session
                Detected
              </div>
              <h1
                className={cn(
                  "text-2xl sm:text-3xl font-bold font-brand-accent tracking-tight",
                )}
              >
                Welcome back, {isSignedIn.userName}
              </h1>
              <p className={cn("text-sm text-accent-600 dark:text-accent-400")}>
                You are already logged in as{" "}
                <span className={cn("font-semibold text-foreground")}>
                  {isSignedIn.userEmail}
                </span>
                . You can directly proceed to your institutional dashboard to
                view loan portfolios and metrics.
              </p>
            </div>

            <div
              className={cn(
                "flex flex-col sm:flex-row items-center gap-3 w-full max-w-sm pt-4",
              )}
            >
              <Link
                to="/dashboard"
                className={cn(
                  "w-full py-3 rounded-lg bg-primary-500 hover:bg-primary-600 text-white font-medium shadow-lg shadow-primary-500/25 transition-all flex items-center justify-center gap-2",
                )}
              >
                <LayoutDashboard className={cn("w-4 h-4")} /> Go to Dashboard
              </Link>
            </div>
          </>
        ) : (
          /* ================= PLEASE LOGIN STATE ================= */
          <>
            <div
              className={cn(
                "w-14 h-14 rounded-lg bg-primary-500/10 border border-primary-500/20 flex items-center justify-center text-primary-500 shadow-inner",
              )}
            >
              <Sparkles className={cn("w-7 h-7")} />
            </div>

            <div className={cn("space-y-2 max-w-lg")}>
              <div
                className={cn(
                  "inline-flex items-center gap-2 px-3 py-1 rounded-md bg-primary-500/10 text-primary-600 dark:text-primary-400 text-xs font-semibold",
                )}
              >
                <ShieldCheck className={cn("w-3.5 h-3.5")} /> Authentication
                Required
              </div>
              <h1
                className={cn(
                  "text-2xl sm:text-3xl font-bold font-brand-accent tracking-tight",
                )}
              >
                Please sign in to continue
              </h1>
              <p className={cn("text-sm text-accent-600 dark:text-accent-400")}>
                To access the SR Loan Services secure client dashboard, review
                loan applications, or manage funding portfolios, please log in
                with your credentials.
              </p>
            </div>

            <div
              className={cn(
                "flex flex-col sm:flex-row items-center gap-3 w-full max-w-sm pt-4",
              )}
            >
              <Link
                to="/login"
                className={cn(
                  "w-full py-3 rounded-lg bg-primary-500 hover:bg-primary-600 text-white font-medium shadow-lg shadow-primary-500/25 transition-all flex items-center justify-center gap-2",
                )}
              >
                <LogIn className={cn("w-4 h-4")} /> Login to Dashboard
              </Link>
              <Link
                to="/"
                className={cn(
                  "w-full py-3 rounded-lg border border-accent-300 dark:border-accent-700 hover:bg-accent-100 dark:hover:bg-accent-800 font-medium text-sm transition-all flex items-center justify-center",
                )}
              >
                Return Home
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
