
import { ShieldAlert, Info } from "lucide-react";

export default function LoanAccessDenied() {
  return (
    <main className="flex min-h-svh items-center justify-center bg-background px-4 py-10 text-foreground">
      <section className="w-full max-w-lg rounded-lg border border-accent-200 bg-white p-6 shadow-sm dark:bg-background sm:p-8">
        {/* Header */}
        <div className="flex items-center gap-3">
          <div className="flex size-11 shrink-0 items-center justify-center rounded-md bg-primary-50 text-primary-600 dark:bg-primary-950 dark:text-primary-300">
            <ShieldAlert size={24} strokeWidth={1.8} />
          </div>

          <div className="min-w-0 flex-1">
            <p className="font-brand-secondary text-sm font-semibold">
              Loan eligibility
            </p>
            <p className="mt-1 text-xs tracking-widest text-accent-600">
              APPLICATION REVIEW
            </p>
          </div>

          <span className="rounded-md bg-primary-100 px-2.5 py-1 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-100">
            Restricted
          </span>
        </div>

        <div className="my-6 border-t border-accent-100" />

        {/* Message */}
        <div className="space-y-3">
          <p className="font-brand-accent text-3xl font-bold tracking-tight">
            Uh-oh...
          </p>

          <h1 className="font-brand-secondary text-2xl font-bold leading-snug tracking-tight">
            You are not allowed to process this loan.
          </h1>

          <p className="text-sm leading-6 text-accent-700 dark:text-accent-300">
            Your current account permissions do not allow you to process this
            loan application. Please contact your administrator if you believe
            this is a mistake.
          </p>
        </div>

        {/* Guidance */}
        <div className="mt-6 flex gap-3 rounded-md border border-primary-100 bg-primary-50 p-4 dark:border-primary-900 dark:bg-primary-950">
          <Info
            size={20}
            className="mt-0.5 shrink-0 text-primary-600 dark:text-primary-300"
          />

          <div className="space-y-1">
            <p className="text-sm font-semibold text-primary-800 dark:text-primary-100">
              What can you do?
            </p>
            <p className="text-sm leading-5 text-accent-700 dark:text-accent-200">
              Ask your administrator to review your loan processing permissions.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
