import { cn } from "@repo/styles/cn";
import { Phone, Sparkles } from "lucide-react";
import type { ComponentProps } from "react";

export function PersonalLoanFooter({
  className,
  ...props
}: ComponentProps<"section">) {
  return (
    <section
      {...props}
      className={cn(
        "to-primary-950 relative overflow-hidden rounded-3xl border border-amber-500/30 bg-linear-to-r from-stone-900 via-stone-900 p-6 shadow-2xl sm:p-10",
        className,
      )}
    >
      <div className="pointer-events-none absolute top-0 right-0 h-96 w-96 rounded-full bg-amber-500/5 blur-3xl"></div>

      <div className="relative z-10 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 rounded-full bg-amber-500 px-3 py-1 text-xs font-extrabold tracking-wider text-stone-950 uppercase shadow-md">
              <Sparkles className="h-3.5 w-3.5" /> SR Loan Services DSA
            </span>
            <span className="text-sm text-stone-300">
              Authorized Loan Partners
            </span>
          </div>
          <h1 className="text-3xl font-black tracking-tight text-white sm:text-5xl">
            Compare & Apply For{" "}
            <span className="font-serif text-amber-400 italic">
              Personal Loans
            </span>
          </h1>
          <p className="max-w-2xl text-sm text-stone-300 sm:text-lg">
            Choose from top partner banks with lowest interest rates, instant
            3-hour approvals, and dedicated advisory support.
          </p>
        </div>

        <div className="min-w-65 rounded-2xl border border-amber-500/30 bg-stone-950/80 p-5 text-center shadow-inner sm:text-left">
          <div className="mb-1 text-xs font-semibold tracking-widest text-amber-400 uppercase">
            Direct Helpline
          </div>
          <div className="mb-3 text-xs text-stone-400">
            Call our loan advisors for instant assistance:
          </div>
          <div className="flex flex-col gap-2">
            {["7699578829", "7550951380"].map((phone) => (
              <a
                href={`tel:+91${phone}`}
                key={phone}
                className="flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-amber-500 px-4 py-2 text-sm font-bold text-stone-950 shadow transition-all hover:bg-amber-400"
              >
                <Phone className="h-4 w-4" />
                <span>{phone}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
