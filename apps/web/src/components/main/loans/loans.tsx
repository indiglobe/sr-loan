import {
  ArrowRight,
  BadgeIndianRupee,
  Banknote,
  BriefcaseBusiness,
  Building2,
  Calculator,
  CarFront,
  Check,
  ChevronRight,
  CircleCheckBig,
  Clock3,
  FileCheck2,
  FileText,
  HandCoins,
  House,
  IdCard,
  Landmark,
  ReceiptIndianRupee,
  ShieldCheck,
  Sparkles,
  UserRoundCheck,
  WalletCards,
  Zap,
} from "lucide-react";
import type { ComponentProps, ElementType } from "react";
import Main from "@/components/main/main";
import type { LinkProps } from "@tanstack/react-router";
import {
  LoanProductCard,
  LoanProductCardDescription,
  LoanProductCardHeading,
  LoanProductCardIcon,
  OverviewStat,
  OverviewStatLabel,
  OverviewStatValue,
  ProductDetailLabel,
  ProductDetailValue,
  ProductDetail,
  ViewDetails,
  EligibilityCard,
  EligibilityCardIcon,
  EligibilityCardHeading,
  EligibilityCardDescription,
} from "./loans.ui";
import { cn } from "@repo/styles/cn";

/* -------------------------------------------------------------------------- */
/*                               MAIN COMPONENT                               */
/* -------------------------------------------------------------------------- */

export default function Loans() {
  return (
    <Main>
      <LoanHero />

      <LoanProducts />

      <EligibilitySection />

      <DocumentsSection />

      <ApplicationProcess />

      <LoanSupportSection />

      <LoanCTA />
    </Main>
  );
}

function LoanHero({ className, ...props }: ComponentProps<"section">) {
  return (
    <section className={cn("relative overflow-hidden", className)} {...props}>
      <div className="bg-primary-200/40 dark:bg-primary-900/20 absolute -top-40 -right-40 -z-10 size-96 rounded-full blur-3xl" />

      <div className="bg-secondary-200/25 dark:bg-secondary-900/15 absolute -bottom-40 -left-40 -z-10 size-96 rounded-full blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 md:py-20 lg:grid-cols-[1.05fr_.95fr] lg:px-8 lg:py-24">
        {/* Hero Content */}
        <div>
          <div className="border-primary-200 bg-primary-50 text-primary-700 dark:border-primary-800 dark:bg-primary-950 dark:text-primary-200 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold">
            <Sparkles className="size-3.5" />
            Loan solutions by SR Loan Services
          </div>

          <h1 className="font-brand-secondary mt-6 max-w-3xl text-4xl leading-[1.05] font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Find the right loan for
            <span className="text-primary-600 dark:text-primary-400 block">
              your next big move.
            </span>
          </h1>

          <p className="text-foreground/60 mt-6 max-w-xl text-base leading-7 sm:text-lg">
            SR Loan Services helps you explore personal, home, education and
            business financing options with a simple and transparent application
            experience.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              className="group bg-primary-600 hover:bg-primary-700 shadow-primary-600/20 flex items-center justify-center gap-2 rounded-lg px-7 py-3.5 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5"
            >
              Explore Loan Options
              <ArrowRight className="size-4 transition group-hover:translate-x-1" />
            </button>

            <button
              type="button"
              className="border-primary-200 bg-background text-primary-700 hover:bg-primary-50 dark:border-primary-800 dark:text-primary-200 dark:hover:bg-primary-950 flex items-center justify-center gap-2 rounded-lg border px-7 py-3.5 text-sm font-bold transition"
            >
              Check Eligibility
              <ChevronRight className="size-4" />
            </button>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
            {[
              "Simple Application",
              "Multiple Loan Types",
              "Flexible Tenure",
            ].map((item) => (
              <div
                key={item}
                className="text-foreground/55 flex items-center gap-2 text-sm"
              >
                <div className="bg-secondary-100 text-secondary-700 dark:bg-secondary-900/40 dark:text-secondary-300 grid size-5 place-items-center rounded-full">
                  <Check className="size-3" strokeWidth={3} />
                </div>

                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Loan Overview */}
        <LoanOverviewCard />
      </div>
    </section>
  );
}

function LoanOverviewCard({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn("relative mx-auto w-full max-w-lg", className)}
      {...props}
    >
      <div className="from-primary-200/50 via-accent-100/30 to-secondary-200/30 dark:from-primary-900/30 dark:via-accent-900/15 dark:to-secondary-900/20 absolute -inset-5 -z-10 rounded-4xl bg-linear-to-br blur-2xl" />

      <div className="border-primary-100 bg-background shadow-primary-950/10 dark:border-primary-900 rounded-xl border p-6 shadow-2xl sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-primary-600 text-sm font-semibold">
              Loan Overview
            </p>

            <h2 className="font-brand-secondary mt-1 text-2xl font-bold">
              Finance made simpler.
            </h2>
          </div>

          <div className="bg-secondary-100 text-secondary-700 dark:bg-secondary-900/40 dark:text-secondary-300 grid size-11 shrink-0 place-items-center rounded-2xl">
            <BadgeIndianRupee className="size-5" />
          </div>
        </div>

        <div className="mt-7 grid grid-cols-2 gap-3">
          <OverviewStat>
            <OverviewStatValue>Loan Options</OverviewStatValue>
            <OverviewStatLabel>4+</OverviewStatLabel>
          </OverviewStat>
          <OverviewStat>
            <OverviewStatValue>Simple</OverviewStatValue>
            <OverviewStatLabel>Application</OverviewStatLabel>
          </OverviewStat>
          <OverviewStat>
            <OverviewStatValue>Flexible</OverviewStatValue>
            <OverviewStatLabel>Tenure</OverviewStatLabel>
          </OverviewStat>
          <OverviewStat>
            <OverviewStatValue>Assisted</OverviewStatValue>
            <OverviewStatLabel>Support</OverviewStatLabel>
          </OverviewStat>
        </div>

        <div className="border-primary-100 bg-primary-50/70 dark:border-primary-900 dark:bg-primary-950/40 mt-5 rounded-lg border p-5">
          <div className="flex gap-4">
            <div className="bg-primary-100 text-primary-700 dark:bg-primary-900/40 dark:text-primary-200 grid size-11 shrink-0 place-items-center rounded-xl">
              <Clock3 className="size-5" />
            </div>

            <div>
              <p className="font-brand-secondary font-bold">Need assistance?</p>

              <p className="text-foreground/50 mt-1 text-sm leading-6">
                Our team can help you understand suitable financing options and
                application requirements.
              </p>
            </div>
          </div>
        </div>

        <button
          type="button"
          className="bg-primary-600 hover:bg-primary-700 mt-6 flex w-full items-center justify-center gap-2 rounded-lg py-3.5 text-sm font-bold text-white transition"
        >
          Get Started
          <ArrowRight className="size-4" />
        </button>
      </div>
    </div>
  );
}

const loanProducts = [
  {
    icon: Zap,
    title: "Instant Loan",
    description:
      "Quick financing for urgent requirements with a fast and simplified application experience.",
    amount: "₹10K - ₹5L",
    tenure: "3 - 36 Months",
    productLink: "/loans/instant-loan",
  },
  {
    icon: BadgeIndianRupee,
    title: "Personal Loan",
    description:
      "Get financial support for medical needs, travel, weddings and other personal expenses.",
    amount: "₹50K - ₹20L",
    tenure: "6 - 60 Months",
    productLink: "/loans/personal-loan",
  },
  {
    icon: CarFront,
    title: "Car Loan",
    description:
      "Finance your new or used car with flexible repayment options and simple application support.",
    amount: "₹1L - ₹50L",
    tenure: "12 - 84 Months",
    productLink: "/loans/car-loan",
  },
  {
    icon: House,
    title: "Home Loan",
    description:
      "Get financing support for purchasing, constructing or renovating your dream home.",
    amount: "₹5L - ₹2Cr",
    tenure: "Up to 30 Years",
    productLink: "/loans/home-loan",
  },
  {
    icon: BriefcaseBusiness,
    title: "Business Loan",
    description:
      "Access funds for business growth, working capital, inventory and expansion.",
    amount: "₹1L - ₹50L",
    tenure: "12 - 84 Months",
    productLink: "/loans/business-loan",
  },
  {
    icon: IdCard,
    title: "KYC Loan",
    description:
      "Explore loan options with a streamlined KYC-based verification and documentation process.",
    amount: "Based on Eligibility",
    tenure: "Flexible",
    productLink: "/loans/kyc-loan",
  },

  {
    icon: Building2,
    title: "Loan Against Property",
    description:
      "Unlock funds by leveraging your property as collateral while continuing to retain ownership.",
    amount: "₹5L - ₹5Cr",
    tenure: "Up to 15 Years",
    productLink: "/loans/loan-against-property",
  },
] satisfies {
  icon: ElementType;
  title: string;
  description: string;
  amount: string;
  tenure: string;
  productLink: LinkProps["to"];
}[];

function LoanProducts({ className, ...props }: ComponentProps<"section">) {
  return (
    <section className={cn("py-20 sm:py-24", className)} {...props}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Loan Products"
          title="Solutions for different financial needs"
          description="Explore financing options designed for personal goals, education, property ownership and business growth."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {loanProducts.map((loan, idx) => {
            const Icon = loan.icon;
            return (
              <LoanProductCard key={loan.title} to={loan.productLink}>
                <LoanProductCardIcon
                  className={cn(``, {
                    "bg-primary-100 text-primary-700 dark:bg-primary-900/40 dark:text-primary-200":
                      idx % 3 === 0,
                    "bg-secondary-100 text-secondary-700 dark:bg-secondary-900/40 dark:text-secondary-200":
                      idx % 3 === 1,
                    "bg-accent-100 text-accent-700 dark:bg-accent-900/40 dark:text-accent-200":
                      idx % 3 === 2,
                  })}
                >
                  <Icon className="size-5" />
                </LoanProductCardIcon>

                <LoanProductCardHeading>{loan.title}</LoanProductCardHeading>

                <LoanProductCardDescription>
                  {loan.description}
                </LoanProductCardDescription>

                <div className="border-foreground/5 mt-5 space-y-3 border-t pt-5">
                  <ProductDetail>
                    <ProductDetailLabel>Loan Amount</ProductDetailLabel>
                    <ProductDetailValue>{loan.amount}</ProductDetailValue>
                  </ProductDetail>
                  <ProductDetail>
                    <ProductDetailLabel>Tenure</ProductDetailLabel>
                    <ProductDetailValue>{loan.tenure}</ProductDetailValue>
                  </ProductDetail>
                </div>

                <ViewDetails />
              </LoanProductCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                                  DATA                                      */
/* -------------------------------------------------------------------------- */

const eligibilityPoints = [
  {
    icon: UserRoundCheck,
    title: "Applicant Age",
    description: "Generally 21 years or above at the time of application.",
  },
  {
    icon: Banknote,
    title: "Stable Income",
    description:
      "Regular income from salary, business or another verifiable source.",
  },
  {
    icon: ShieldCheck,
    title: "Credit Profile",
    description:
      "Credit history may be considered depending on the selected loan.",
  },
  {
    icon: Landmark,
    title: "Bank Account",
    description:
      "An active bank account may be required for verification and disbursal.",
  },
];

const requiredDocuments = [
  {
    icon: IdCard,
    title: "Identity Proof",
    description:
      "PAN Card, Aadhaar Card or another accepted identity document.",
  },
  {
    icon: FileText,
    title: "Address Proof",
    description:
      "Aadhaar, utility bill, passport or another accepted address document.",
  },
  {
    icon: ReceiptIndianRupee,
    title: "Income Proof",
    description:
      "Salary slips, bank statements, ITR or relevant business documents.",
  },
  {
    icon: WalletCards,
    title: "Bank Details",
    description:
      "Recent bank statements and account information for verification.",
  },
];

const applicationSteps = [
  {
    number: "01",
    icon: Calculator,
    title: "Choose Your Loan",
    description:
      "Select the type of loan, preferred amount and suitable repayment tenure.",
  },
  {
    number: "02",
    icon: FileCheck2,
    title: "Submit Details",
    description:
      "Provide your basic information and the documents needed for verification.",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Verification",
    description:
      "Your application and eligibility details are reviewed by the lending partner.",
  },
  {
    number: "04",
    icon: HandCoins,
    title: "Loan Disbursal",
    description:
      "After approval and completion of formalities, funds are disbursed.",
  },
];

/* -------------------------------------------------------------------------- */
/*                              ELIGIBILITY                                   */
/* -------------------------------------------------------------------------- */

function EligibilitySection({
  className,
  ...props
}: ComponentProps<"section">) {
  return (
    <section
      className={cn(
        "border-primary-100 bg-primary-50/50 dark:border-primary-900 dark:bg-primary-950/20 border-y py-20 sm:py-24",
        className,
      )}
      {...props}
    >
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:px-8">
        <div>
          <p className="text-primary-600 text-xs font-bold tracking-[0.2em] uppercase">
            Eligibility
          </p>

          <h2 className="font-brand-secondary mt-4 max-w-xl text-3xl leading-tight font-bold tracking-tight sm:text-5xl">
            Understand the basic eligibility requirements.
          </h2>

          <p className="text-foreground/55 mt-5 max-w-xl leading-7">
            Eligibility varies depending on the loan product and lending
            partner. These are some common factors that may be considered.
          </p>

          <button
            type="button"
            className="group text-primary-700 dark:text-primary-300 mt-7 flex items-center gap-2 text-sm font-bold"
          >
            Check your eligibility
            <ChevronRight className="size-4 transition group-hover:translate-x-1" />
          </button>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {eligibilityPoints.map((item) => {
            const Icon = item.icon;
            return (
              <EligibilityCard key={item.title}>
                <EligibilityCardIcon>
                  <Icon className="size-5" />
                </EligibilityCardIcon>
                <EligibilityCardHeading>{item.title}</EligibilityCardHeading>
                <EligibilityCardDescription>
                  {item.description}
                </EligibilityCardDescription>
              </EligibilityCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                                DOCUMENTS                                   */
/* -------------------------------------------------------------------------- */

function DocumentsSection({ className, ...props }: ComponentProps<"section">) {
  return (
    <section className={cn("py-20 sm:py-24", className)} {...props}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Documents"
          title="Keep your basic documents ready"
          description="Document requirements differ by loan type, but these are commonly requested during the verification process."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {requiredDocuments.map((document, index) => (
            <DocumentCard key={document.title} {...document} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                           APPLICATION PROCESS                              */
/* -------------------------------------------------------------------------- */

function ApplicationProcess({
  className,
  ...props
}: ComponentProps<"section">) {
  return (
    <section
      className={cn(
        "bg-accent-50 dark:bg-accent-950/25 py-20 sm:py-24",
        className,
      )}
      {...props}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Application Process"
          title="From application to disbursal"
          description="A straightforward process helps you move through your loan application with clarity."
        />

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {applicationSteps.map((step) => (
            <ProcessStep key={step.number} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                               LOAN SUPPORT                                 */
/* -------------------------------------------------------------------------- */

function LoanSupportSection({
  className,
  ...props
}: ComponentProps<"section">) {
  return (
    <section className={cn("py-20 sm:py-24", className)} {...props}>
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <div className="bg-secondary-100 text-secondary-700 dark:bg-secondary-900/40 dark:text-secondary-300 mb-6 grid size-14 place-items-center rounded-2xl">
            <CircleCheckBig className="size-6" />
          </div>

          <p className="text-secondary-700 dark:text-secondary-300 text-xs font-bold tracking-[0.2em] uppercase">
            SR Loan Services
          </p>

          <h2 className="font-brand-secondary mt-4 max-w-xl text-3xl leading-tight font-bold tracking-tight sm:text-5xl">
            Support throughout your loan journey.
          </h2>

          <p className="text-foreground/55 mt-5 max-w-xl leading-7">
            From understanding available products to preparing your application,
            SR Loan Services helps make the process easier to understand.
          </p>
        </div>

        <div className="grid gap-4">
          <SupportRow
            icon={Calculator}
            title="Loan guidance"
            description="Understand loan amounts, tenure and repayment considerations."
          />

          <SupportRow
            icon={FileCheck2}
            title="Application assistance"
            description="Get help understanding the information and documents required."
          />

          <SupportRow
            icon={ShieldCheck}
            title="Clear communication"
            description="Stay informed about the major stages of your loan application."
          />
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                                  CTA                                       */
/* -------------------------------------------------------------------------- */

function LoanCTA({ className, ...props }: ComponentProps<"section">) {
  return (
    <section className={cn("px-4 pb-20 sm:px-6 lg:px-8", className)} {...props}>
      <div className="bg-primary-800 text-primary-50 relative mx-auto max-w-7xl overflow-hidden rounded-4xl px-6 py-14 text-center sm:px-10 md:py-18">
        <div className="bg-secondary-400/20 absolute -top-24 -left-20 size-64 rounded-full blur-3xl" />

        <div className="bg-accent-300/15 absolute -right-20 -bottom-24 size-64 rounded-full blur-3xl" />

        <div className="relative mx-auto max-w-3xl">
          <p className="text-primary-200 text-xs font-bold tracking-[0.2em] uppercase">
            Start with SR Loan Services
          </p>

          <h2 className="font-brand-secondary mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
            Ready to explore your loan options?
          </h2>

          <p className="text-primary-100/80 mx-auto mt-5 max-w-xl leading-7">
            Tell us what you need and begin exploring suitable financing options
            for your goals.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <button
              type="button"
              className="group bg-primary-50 text-primary-800 hover:bg-primary-100 flex items-center justify-center gap-2 rounded-2xl px-7 py-3.5 text-sm font-bold transition"
            >
              Apply for a Loan
              <ArrowRight className="size-4 transition group-hover:translate-x-1" />
            </button>

            <button
              type="button"
              className="border-primary-500/40 bg-primary-700/50 hover:bg-primary-700 text-primary-50 rounded-2xl border px-7 py-3.5 text-sm font-bold transition"
            >
              Talk to Our Team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                            SMALL UI COMPONENTS                             */
/* -------------------------------------------------------------------------- */

function SectionHeader({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-primary-600 text-xs font-bold tracking-[0.2em] uppercase">
        {label}
      </p>

      <h2 className="font-brand-secondary mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
        {title}
      </h2>

      <p className="text-foreground/55 mx-auto mt-5 max-w-2xl text-base leading-7">
        {description}
      </p>
    </div>
  );
}

function DocumentCard({
  icon: Icon,
  title,
  description,
  index,
}: {
  icon: ElementType;
  title: string;
  description: string;
  index: number;
}) {
  return (
    <article className="border-foreground/5 bg-background dark:bg-foreground/3 rounded-2xl border p-5">
      <div
        className={cn(
          "grid size-11 place-items-center rounded-xl",
          index % 2 === 0
            ? "bg-secondary-100 text-secondary-700 dark:bg-secondary-900/40 dark:text-secondary-200"
            : "bg-accent-100 text-accent-700 dark:bg-accent-900/40 dark:text-accent-200",
        )}
      >
        <Icon className="size-5" />
      </div>

      <h3 className="font-brand-secondary mt-4 font-bold">{title}</h3>

      <p className="text-foreground/50 mt-2 text-sm leading-6">{description}</p>
    </article>
  );
}

function ProcessStep({
  number,
  icon: Icon,
  title,
  description,
}: {
  number: string;
  icon: ElementType;
  title: string;
  description: string;
}) {
  return (
    <article className="text-center">
      <div className="relative mx-auto w-fit">
        <div className="bg-primary-600 shadow-primary-600/20 grid size-16 place-items-center rounded-2xl text-white shadow-lg">
          <Icon className="size-6" />
        </div>

        <span className="bg-secondary-100 text-secondary-800 dark:bg-secondary-900 dark:text-secondary-200 absolute -top-2 -right-3 grid size-7 place-items-center rounded-full text-2.5 font-bold">
          {number}
        </span>
      </div>

      <h3 className="font-brand-secondary mt-6 text-lg font-bold">{title}</h3>

      <p className="text-foreground/50 mx-auto mt-3 max-w-sm text-sm leading-6">
        {description}
      </p>
    </article>
  );
}

function SupportRow({
  icon: Icon,
  title,
  description,
}: {
  icon: ElementType;
  title: string;
  description: string;
}) {
  return (
    <div className="border-primary-100 bg-background dark:border-primary-900 flex gap-4 rounded-2xl border p-5">
      <div className="bg-primary-100 text-primary-700 dark:bg-primary-900/40 dark:text-primary-200 grid size-11 shrink-0 place-items-center rounded-xl">
        <Icon className="size-5" />
      </div>

      <div>
        <h3 className="font-brand-secondary font-bold">{title}</h3>

        <p className="text-foreground/50 mt-1 text-sm leading-6">
          {description}
        </p>
      </div>
    </div>
  );
}
