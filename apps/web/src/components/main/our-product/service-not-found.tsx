import { Button } from "@repo/ui/button";
import { AlertCircle, RefreshCcw } from "lucide-react";

export function BankUnavailableState() {
  return (
    <div className="flex min-h-100 w-full items-center justify-center p-4">
      <div className="w-full max-w-md rounded-3xl border border-accent-200 dark:border-accent-800 bg-accent-50 dark:bg-accent-950 p-8 text-center shadow-lg transition-all">
        {/* Icon Container */}
        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-md bg-primary-500/10 text-primary-600 dark:text-primary-400">
          <AlertCircle className="h-8 w-8" />
        </div>

        {/* Heading */}
        <h3 className="font-brand-accent text-xl font-bold tracking-tight text-foreground">
          Uhhh, sorry... 😅
        </h3>

        {/* Description */}
        <p className="mt-2 text-sm leading-relaxed text-accent-600 dark:text-accent-400">
          Unfortunately, we have not partnered with any bank right now for this
          service. We are working hard to bring more partners on board soon!
        </p>

        {/* Action Button */}
        <div className="mt-6">
          <Button
            onClick={() => window.location.reload()}
            className=""
          >
            <RefreshCcw className="h-4 w-4" />
            Try Again Later
          </Button>
        </div>
      </div>
    </div>
  );
}
