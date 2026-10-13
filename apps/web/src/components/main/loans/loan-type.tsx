import {
  ArrowLeft,
  ArrowUpRight,
  Award,
  BadgeCheck,
  BadgeIndianRupee,
  BriefcaseBusiness,
  Building2,
  Calendar,
  CalendarDays,
  CarFront,
  CheckCircle2,
  ChevronRight,
  Clock,
  DollarSign,
  FileCheck,
  FileText,
  House,
  IdCard,
  Mail,
  MapPin,
  Percent,
  Phone,
  ShieldCheck,
  TrendingUp,
  UserCheck,
  Zap,
} from "lucide-react";
import { useLoaderData, useRouter } from "@tanstack/react-router";
import { PLATFORM_PHONE_1 } from "@repo/utils/const/platform-data";

const loanIcons = {
  ArrowLeft,
  Award,
  BadgeCheck,
  BadgeIndianRupee,
  BriefcaseBusiness,
  Building2,
  Calendar,
  CalendarDays,
  CarFront,
  CheckCircle2,
  Clock,
  DollarSign,
  FileCheck,
  FileText,
  House,
  IdCard,
  Mail,
  MapPin,
  Percent,
  Phone,
  ShieldCheck,
  TrendingUp,
  UserCheck,
  Zap,
} as const;

function formatTenure(months: number) {
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  if (years === 0) return `${months} months`;
  if (remainingMonths === 0)
    return `${years} ${years === 1 ? "year" : "years"}`;

  return `${years}y ${remainingMonths}m`;
}

function formatInterest(rate: number) {
  return `${rate}%`;
}

export function IndividualLoanType() {
  const router = useRouter();
  const { oneLoansDetails } = useLoaderData({
    from: "/loans/$loanType/",
  });

  const LoanIcon =
    loanIcons[oneLoansDetails.icon as keyof typeof loanIcons] ??
    BadgeIndianRupee;

  const banks = oneLoansDetails.banks ?? [];

  return (
    <main className="min-h-screen space-y-8 pb-10 text-stone-100">
      {/* Navigation */}
      <button
        type="button"
        onClick={() => router.history.back()}
        className="group inline-flex min-h-10 items-center gap-2 rounded-xl border border-stone-800 bg-stone-950/70 px-4 py-2 text-sm font-medium text-stone-300 transition hover:border-amber-500/50 hover:text-amber-400"
      >
        <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
        <span>Back to all loans</span>
      </button>

      {/* Hero */}
      <section className="relative isolate overflow-hidden rounded-3xl border border-amber-500/20 bg-stone-950 shadow-2xl shadow-black/20">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(245,158,11,0.17),transparent_50%),linear-gradient(135deg,#1c1917,#0c0a09_65%)]" />

        <div className="absolute -right-16 -top-20 -z-10 size-64 rounded-full border border-amber-500/10 sm:size-80" />
        <div className="absolute -right-8 -top-12 -z-10 size-48 rounded-full border border-amber-500/10 sm:size-64" />

        <div className="grid gap-8 p-5 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center lg:p-10">
          <div className="min-w-0">
            <div className="mb-6 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/25 bg-amber-500/10 px-3 py-1.5 text-xs font-semibold text-amber-300">
                <ShieldCheck className="size-3.5" />
                Loan overview
              </span>

              <span className="inline-flex items-center gap-1.5 rounded-full border border-stone-700 bg-stone-900/80 px-3 py-1.5 text-xs text-stone-300">
                <Building2 className="size-3.5" />
                {banks.length} {banks.length === 1 ? "lender" : "lenders"}{" "}
                available
              </span>
            </div>

            <div className="flex items-start gap-4 sm:gap-5">
              <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl border border-amber-500/20 bg-amber-500/10 text-amber-400 sm:size-16">
                <LoanIcon className="size-7 sm:size-8" />
              </div>

              <div className="min-w-0">
                <p className="mb-2 text-xs font-semibold tracking-[0.2em] text-stone-400 uppercase">
                  Loan product
                </p>

                <h1 className="text-3xl leading-tight font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
                  {oneLoansDetails.bankLoanType}
                </h1>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-stone-300 sm:text-base">
                  {oneLoansDetails.description}
                </p>
              </div>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#bank-offers"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-amber-400 px-5 py-3 text-sm font-bold text-stone-950 transition hover:bg-amber-300"
              >
                Explore bank offers
                <ChevronRight className="size-4" />
              </a>

              <a
                href={`tel:+91${PLATFORM_PHONE_1}`}
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-stone-700 bg-stone-900/70 px-5 py-3 text-sm font-semibold text-stone-200 transition hover:border-stone-500 hover:bg-stone-800"
              >
                <Phone className="size-4 text-amber-400" />
                Talk to an advisor
              </a>
            </div>
          </div>

          {/* Quick overview */}
          <div className="grid grid-cols-2 gap-3 lg:w-64 lg:grid-cols-1">
            <div className="rounded-2xl border border-stone-800 bg-black/30 p-4 sm:p-5">
              <div className="mb-3 flex items-center gap-2 text-xs text-stone-400">
                <Building2 className="size-4 text-amber-400" />
                Available lenders
              </div>
              <p className="text-2xl font-bold text-white sm:text-3xl">
                {banks.length}
              </p>
              <p className="mt-1 text-xs text-stone-500">
                Bank and finance offers
              </p>
            </div>

            <div className="rounded-2xl border border-stone-800 bg-black/30 p-4 sm:p-5">
              <div className="mb-3 flex items-center gap-2 text-xs text-stone-400">
                <TrendingUp className="size-4 text-amber-400" />
                Starting interest
              </div>
              <p className="text-2xl font-bold text-amber-400 sm:text-3xl">
                {banks.length
                  ? `${Math.min(...banks.map((bank) => bank.rateOfInterest))}%`
                  : "—"}
              </p>
              <p className="mt-1 text-xs text-stone-500">
                Rates vary by lender
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bank offers */}
      <section id="bank-offers" className="scroll-mt-6 space-y-5">
        <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
          <div>
            <p className="mb-2 text-xs font-bold tracking-[0.2em] text-amber-400 uppercase">
              Compare your options
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Available bank offers
            </h2>
            <p className="mt-2 text-sm leading-6 text-stone-400">
              Compare interest rates, processing times, and repayment tenures.
            </p>
          </div>

          <span className="text-sm text-stone-500">
            {banks.length} {banks.length === 1 ? "offer" : "offers"}
          </span>
        </div>

        {banks.length > 0 ? (
          <div className="grid gap-5 md:grid-cols-2 2xl:grid-cols-3">
            {banks.map((bank, index) => (
              <article
                key={bank.id}
                className="group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-stone-800 bg-stone-950/80 transition duration-300 hover:-translate-y-1 hover:border-amber-500/40 hover:shadow-xl hover:shadow-black/20"
              >
                <div className="h-1 bg-linear-to-r from-amber-600 via-amber-400 to-yellow-200 opacity-70 transition group-hover:opacity-100" />

                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <div className="flex items-start gap-3">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-stone-700 bg-stone-900 text-amber-400">
                      <Building2 className="size-6" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="wrap-break-word text-lg font-bold text-white">
                          {bank.bankName}
                        </h3>
                        {index === 0 && (
                          <span className="rounded-md bg-amber-500/10 px-2 py-1 text-2.5 font-bold tracking-wide text-amber-300 uppercase">
                            Featured
                          </span>
                        )}
                      </div>

                      <p className="mt-1 text-sm leading-6 text-stone-400">
                        {bank.tagline ||
                          "Loan solutions tailored to your needs"}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 rounded-xl border border-amber-500/15 bg-amber-500/6 p-4">
                    <p className="flex items-center gap-2 text-xs font-medium text-stone-400">
                      <Percent className="size-4 text-amber-400" />
                      Interest rate
                    </p>
                    <div className="mt-2 flex flex-wrap items-baseline gap-2">
                      <span className="text-3xl font-black tracking-tight text-amber-400">
                        {formatInterest(bank.rateOfInterest)}
                      </span>
                      <span className="text-xs text-stone-400">
                        per annum, as listed
                      </span>
                    </div>
                  </div>

                  <div className="my-5 grid grid-cols-2 gap-3">
                    <div className="rounded-xl border border-stone-800 bg-stone-900/60 p-3">
                      <Clock className="mb-3 size-4 text-amber-400" />
                      <p className="text-lg font-bold text-white">
                        {bank.processingTimeInDays}
                      </p>
                      <p className="mt-1 text-xs leading-5 text-stone-400">
                        Processing days
                      </p>
                    </div>

                    <div className="rounded-xl border border-stone-800 bg-stone-900/60 p-3">
                      <CalendarDays className="mb-3 size-4 text-amber-400" />
                      <p className="text-lg font-bold text-white">
                        {formatTenure(bank.maxTenureInMonth)}
                      </p>
                      <p className="mt-1 text-xs leading-5 text-stone-400">
                        Maximum tenure
                      </p>
                    </div>
                  </div>

                  <div className="mt-auto pt-1">
                    <a
                      href={bank.applyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-amber-400 px-4 py-3 text-sm font-bold text-stone-950 transition hover:bg-amber-300 focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-950"
                    >
                      View bank offer
                      <ArrowUpRight className="size-4" />
                    </a>
                    <p className="mt-3 text-center text-2.75 leading-5 text-stone-500">
                      Eligibility and final terms depend on lender approval.
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-stone-700 bg-stone-950/60 px-5 py-12 text-center">
            <Building2 className="mx-auto size-10 text-stone-600" />
            <h3 className="mt-4 font-semibold text-white">
              No bank offers available
            </h3>
            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-stone-400">
              There are no bank offers listed for this loan type yet. Please
              contact our advisor for assistance.
            </p>
            <a
              href={`tel:+91${PLATFORM_PHONE_1}`}
              className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-xl bg-amber-400 px-5 py-3 text-sm font-bold text-stone-950 hover:bg-amber-300"
            >
              <Phone className="size-4" />
              Contact advisor
            </a>
          </div>
        )}
      </section>

      {/* Support banner */}
      <section className="relative overflow-hidden rounded-2xl border border-stone-800 bg-linear-to-br from-stone-900 to-stone-950 p-5 sm:p-7 lg:p-8">
        <div className="pointer-events-none absolute -right-12 -top-20 size-56 rounded-full bg-amber-500/[0.07] blur-3xl" />

        <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-4">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400">
              <UserCheck className="size-6" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white sm:text-xl">
                Need help choosing a loan?
              </h2>
              <p className="mt-2 max-w-xl text-sm leading-6 text-stone-400">
                Speak with an SR Loan Services advisor to understand lender
                options, eligibility requirements, and the application process.
              </p>
            </div>
          </div>

          <a
            href={`tel:+91${PLATFORM_PHONE_1}`}
            className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-amber-400 px-5 py-3 text-sm font-bold text-stone-950 transition hover:bg-amber-300"
          >
            <Phone className="size-4" />
            Call {PLATFORM_PHONE_1}
          </a>
        </div>
      </section>
    </main>
  );
}
