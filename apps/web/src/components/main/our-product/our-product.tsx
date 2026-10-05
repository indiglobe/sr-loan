import {
  ArrowRight,
  BarChart3,
  Calculator,
  Check,
  ChevronRight,
  CreditCard,
  FileCheck2,
  HandCoins,
  Landmark,
  ReceiptIndianRupee,
  RefreshCw,
  ShieldCheck,
  Sparkles,
  UserRoundCheck,
  WalletCards,
  Zap,
} from "lucide-react";
import type { ComponentProps, ElementType } from "react";
import Main from "@/components/main/main";
import { cn } from "@repo/styles/cn";

const products = [
  {
    icon: Landmark,
    title: "Bank Account",
    description:
      "Open and manage suitable banking accounts with simple guidance and assistance.",
    features: [
      "Savings & current account options",
      "Simple onboarding support",
      "Banking guidance",
    ],
  },
  {
    icon: BarChart3,
    title: "Demat Account",
    description:
      "Start your investment journey with a Demat account for holding and managing securities digitally.",
    features: [
      "Digital investment access",
      "Portfolio-ready setup",
      "Easy account assistance",
    ],
  },
  {
    icon: CreditCard,
    title: "Credit Cards",
    description:
      "Explore credit card options based on your spending needs, lifestyle and eligibility.",
    features: [
      "Multiple card options",
      "Rewards & benefits",
      "Application assistance",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Insurance",
    description:
      "Explore insurance solutions designed to protect your health, family, vehicle and financial future.",
    features: ["Health insurance", "Life insurance", "General insurance"],
  },
  {
    icon: ReceiptIndianRupee,
    title: "Taxations",
    description:
      "Get assistance with taxation-related services, filing requirements and financial documentation.",
    features: [
      "Tax filing assistance",
      "Documentation support",
      "Basic tax guidance",
    ],
  },
];

const benefits = [
  {
    icon: Calculator,
    title: "Easy Planning",
    description:
      "Understand repayment estimates before moving ahead with an application.",
  },
  {
    icon: ShieldCheck,
    title: "Transparent Process",
    description:
      "Clear information about major steps, requirements and documentation.",
  },
  {
    icon: RefreshCw,
    title: "Flexible Choices",
    description:
      "Explore multiple products for different financial requirements.",
  },
  {
    icon: UserRoundCheck,
    title: "Personal Assistance",
    description:
      "Get support from SR Loan Services throughout your loan journey.",
  },
];

const comparisonRows = [
  {
    label: "Primary Use",
    personal: "Personal Needs",
    home: "Property",
    education: "Studies",
    business: "Business",
  },
  {
    label: "Typical Tenure",
    personal: "6–60 Months",
    home: "Up to 30 Years",
    education: "Up to 15 Years",
    business: "12–84 Months",
  },
  {
    label: "Documentation",
    personal: "Standard",
    home: "Detailed",
    education: "Academic",
    business: "Business",
  },
];

/* -------------------------------------------------------------------------- */
/*                               MAIN COMPONENT                               */
/* -------------------------------------------------------------------------- */

export default function OurProduct() {
  return (
    <Main>
      <ProductHero />

      <ProductShowcase />

      <BenefitStrip />

      <ProductComparison />

      <ProductExperience />

      <ProductCTA />
    </Main>
  );
}

/* -------------------------------------------------------------------------- */
/*                                PRODUCT HERO                                */
/* -------------------------------------------------------------------------- */

function ProductHero({ className, ...props }: ComponentProps<"section">) {
  return (
    <section className={cn("relative overflow-hidden", className)} {...props}>
      <div className="bg-primary-200/40 dark:bg-primary-900/20 absolute top-0 right-0 -z-10 size-96 rounded-full blur-3xl" />

      <div className="bg-secondary-200/25 dark:bg-secondary-900/15 absolute bottom-0 left-0 -z-10 size-80 rounded-full blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8 lg:py-24">
        <div className="grid items-end gap-12 lg:grid-cols-[1.2fr_.8fr]">
          {/* Left */}
          <div>
            <div className="border-primary-200 bg-primary-50 text-primary-700 dark:border-primary-800 dark:bg-primary-950 dark:text-primary-300 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-bold">
              <Sparkles className="size-3.5" />
              SR Loan Services Products
            </div>

            <h1 className="font-brand-secondary mt-6 max-w-4xl text-4xl leading-[1.02] font-bold tracking-tight sm:text-5xl lg:text-7xl">
              Financial products built for
              <span className="text-primary-600 dark:text-primary-400 block">
                real-life goals.
              </span>
            </h1>

            <p className="text-foreground/60 mt-6 max-w-2xl text-base leading-8 sm:text-lg">
              From personal milestones to education, property and business
              growth, SR Loan Services helps you explore financing options
              suited to your needs.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                className="group bg-primary-600 hover:bg-primary-700 shadow-primary-600/20 flex items-center justify-center gap-2 rounded-2xl px-7 py-3.5 text-sm font-bold text-white shadow-lg transition"
              >
                Explore Products
                <ArrowRight className="size-4 transition group-hover:translate-x-1" />
              </button>

              <button
                type="button"
                className="border-primary-200 bg-background text-primary-700 hover:bg-primary-50 dark:border-primary-800 dark:text-primary-300 dark:hover:bg-primary-950 flex items-center justify-center gap-2 rounded-2xl border px-7 py-3.5 text-sm font-bold transition"
              >
                Speak to an Advisor
              </button>
            </div>
          </div>

          {/* Right Mini Panel */}
          <div className="border-primary-100 bg-background shadow-primary-950/5 dark:border-primary-900 rounded-4xl border p-5 shadow-xl sm:p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-foreground/45 text-xs font-semibold">
                  Product Portfolio
                </p>

                <p className="font-brand-secondary mt-1 text-2xl font-bold">
                  4 Loan Categories
                </p>
              </div>

              <div className="bg-secondary-100 text-secondary-700 dark:bg-secondary-900/40 dark:text-secondary-300 grid size-12 place-items-center rounded-2xl">
                <WalletCards className="size-5" />
              </div>
            </div>

            <div className="mt-6 space-y-3">
              {products.map((product) => {
                const Icon = product.icon;

                return (
                  <div
                    key={product.title}
                    className="border-primary-100 bg-primary-50/50 dark:border-primary-900 dark:bg-primary-950/20 flex items-center gap-3 rounded-2xl border p-3"
                  >
                    <div className="bg-primary-100 text-primary-700 dark:bg-primary-900/40 dark:text-primary-200 grid size-10 shrink-0 place-items-center rounded-xl">
                      <Icon className="size-4.5" />
                    </div>

                    <div>
                      <p className="font-brand-secondary text-sm font-bold">
                        {product.title}
                      </p>

                      <p className="text-foreground/45 mt-0.5 text-xs">
                        {product.features[0]}
                      </p>
                    </div>

                    <ChevronRight className="text-foreground/30 ml-auto size-4" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                             PRODUCT SHOWCASE                               */
/* -------------------------------------------------------------------------- */

function ProductShowcase({ className, ...props }: ComponentProps<"section">) {
  return (
    <section className={cn("py-20 sm:py-24", className)} {...props}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr]">
          {/* Left Title */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <p className="text-primary-600 text-xs font-bold tracking-[0.2em] uppercase">
              Our Products
            </p>

            <h2 className="font-brand-secondary mt-4 text-3xl leading-tight font-bold tracking-tight sm:text-5xl">
              One service.
              <span className="text-primary-600 block">
                Multiple possibilities.
              </span>
            </h2>

            <p className="text-foreground/55 mt-5 max-w-md leading-7">
              Choose a financial product based on what you want to achieve,
              rather than fitting your goals into a one-size-fits-all solution.
            </p>
          </div>

          {/* Right Product List */}
          <div className="space-y-5">
            {products.map((product, index) => (
              <ProductPanel key={product.title} {...product} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductPanel({
  icon: Icon,
  title,
  description,
  features,
  index,
}: {
  icon: ElementType;
  title: string;
  description: string;
  features: string[];
  index: number;
}) {
  return (
    <article className="border-primary-100 bg-background hover:border-primary-300 dark:border-primary-900 group rounded-4xl border p-5 transition hover:shadow-xl sm:p-7">
      <div className="grid gap-6 sm:grid-cols-[auto_1fr_auto] sm:items-center">
        <div
          className={cn(
            "grid size-14 place-items-center rounded-2xl",
            index % 3 === 0 &&
              "bg-primary-100 text-primary-700 dark:bg-primary-900/40 dark:text-primary-200",

            index % 3 === 1 &&
              "bg-secondary-100 text-secondary-700 dark:bg-secondary-900/40 dark:text-secondary-200",

            index % 3 === 2 &&
              "bg-accent-100 text-accent-700 dark:bg-accent-900/40 dark:text-accent-200",
          )}
        >
          <Icon className="size-6" />
        </div>

        <div>
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-brand-secondary text-xl font-bold sm:text-2xl">
              {title}
            </h3>
          </div>

          <p className="text-foreground/55 mt-2 max-w-xl text-sm leading-6">
            {description}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {features.map((feature) => (
              <span
                key={feature}
                className="bg-primary-50 text-primary-700 dark:bg-primary-950 dark:text-primary-300 rounded-full px-3 py-1.5 text-xs font-semibold"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>

        <button
          type="button"
          className="bg-primary-50 text-primary-700 group/button hover:bg-primary-100 dark:bg-primary-950 dark:text-primary-300 dark:hover:bg-primary-900 flex size-11 items-center justify-center rounded-xl transition"
        >
          <ArrowRight className="size-4 transition group-hover/button:translate-x-1" />
        </button>
      </div>
    </article>
  );
}

/* -------------------------------------------------------------------------- */
/*                                BENEFIT STRIP                               */
/* -------------------------------------------------------------------------- */

function BenefitStrip({ className, ...props }: ComponentProps<"section">) {
  return (
    <section
      className={cn(
        "border-primary-100 bg-primary-50/60 dark:border-primary-900 dark:bg-primary-950/20 border-y",
        className,
      )}
      {...props}
    >
      <div className="mx-auto grid max-w-7xl gap-px px-4 py-8 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        {benefits.map((benefit) => (
          <BenefitItem key={benefit.title} {...benefit} />
        ))}
      </div>
    </section>
  );
}

function BenefitItem({
  icon: Icon,
  title,
  description,
}: {
  icon: ElementType;
  title: string;
  description: string;
}) {
  return (
    <div className="p-5">
      <div className="bg-secondary-100 text-secondary-700 dark:bg-secondary-900/40 dark:text-secondary-300 grid size-10 place-items-center rounded-xl">
        <Icon className="size-4.5" />
      </div>

      <h3 className="font-brand-secondary mt-4 font-bold">{title}</h3>

      <p className="text-foreground/50 mt-2 text-sm leading-6">{description}</p>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                            PRODUCT COMPARISON                              */
/* -------------------------------------------------------------------------- */

function ProductComparison({ className, ...props }: ComponentProps<"section">) {
  return (
    <section className={cn("py-20 sm:py-24", className)} {...props}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Compare Products"
          title="See the difference at a glance"
          description="A simple overview to help you understand how our major loan categories differ."
        />

        <div className="border-primary-100 dark:border-primary-900 mt-12 overflow-x-auto rounded-3xl border">
          <div className="min-w-200">
            <div className="bg-primary-50 dark:bg-primary-950/40 grid grid-cols-5">
              <ComparisonHeader title="Category" />

              <ComparisonHeader title="Personal" />

              <ComparisonHeader title="Home" />

              <ComparisonHeader title="Education" />

              <ComparisonHeader title="Business" />
            </div>

            {comparisonRows.map((row) => (
              <div
                key={row.label}
                className="border-primary-100 dark:border-primary-900 grid grid-cols-5 border-t"
              >
                <ComparisonCell value={row.label} strong />

                <ComparisonCell value={row.personal} />

                <ComparisonCell value={row.home} />

                <ComparisonCell value={row.education} />

                <ComparisonCell value={row.business} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                            PRODUCT EXPERIENCE                              */
/* -------------------------------------------------------------------------- */

function ProductExperience({ className, ...props }: ComponentProps<"section">) {
  return (
    <section
      className={cn(
        "bg-accent-50 dark:bg-accent-950/25 py-20 sm:py-24",
        className,
      )}
      {...props}
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        {/* Left Card */}
        <div className="bg-primary-800 text-primary-50 relative overflow-hidden rounded-4xl p-7 sm:p-10">
          <div className="bg-secondary-400/20 absolute -top-20 -right-20 size-64 rounded-full blur-3xl" />

          <div className="relative">
            <Landmark className="text-primary-200 size-8" />

            <h2 className="font-brand-secondary mt-6 max-w-lg text-3xl font-bold sm:text-4xl">
              Products are only one part of the journey.
            </h2>

            <p className="text-primary-100/70 mt-5 max-w-lg leading-7">
              SR Loan Services also helps you understand eligibility,
              documentation and the application process.
            </p>

            <div className="mt-8 space-y-3">
              {[
                "Loan planning support",
                "Eligibility guidance",
                "Documentation assistance",
                "Application support",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="bg-secondary-400 text-secondary-950 grid size-6 place-items-center rounded-full">
                    <Check className="size-3.5" strokeWidth={3} />
                  </div>

                  <span className="text-sm font-semibold">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="grid gap-4">
          <ExperienceRow
            icon={Calculator}
            title="Plan your repayment"
            description="Understand approximate repayment commitments before applying."
          />

          <ExperienceRow
            icon={FileCheck2}
            title="Prepare your application"
            description="Know what information and documents may be required."
          />

          <ExperienceRow
            icon={ShieldCheck}
            title="Understand the process"
            description="Stay informed about key stages from application to approval."
          />

          <ExperienceRow
            icon={HandCoins}
            title="Move forward confidently"
            description="Explore financing solutions with clearer expectations."
          />
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                                  CTA                                       */
/* -------------------------------------------------------------------------- */

function ProductCTA({ className, ...props }: ComponentProps<"section">) {
  return (
    <section className={cn("px-4 py-20 sm:px-6 lg:px-8", className)} {...props}>
      <div className="border-primary-200 dark:border-primary-800 mx-auto grid max-w-7xl overflow-hidden rounded-4xl border lg:grid-cols-[1.2fr_.8fr]">
        <div className="bg-background p-7 sm:p-10 lg:p-12">
          <p className="text-primary-600 text-xs font-bold tracking-[0.2em] uppercase">
            SR Loan Services
          </p>

          <h2 className="font-brand-secondary mt-4 max-w-2xl text-3xl font-bold tracking-tight sm:text-5xl">
            Which product fits your financial goal?
          </h2>

          <p className="text-foreground/55 mt-5 max-w-xl leading-7">
            Tell us what you are planning and our team can help you understand
            the available options.
          </p>

          <button
            type="button"
            className="group bg-primary-600 hover:bg-primary-700 mt-8 flex items-center gap-2 rounded-2xl px-7 py-3.5 text-sm font-bold text-white transition"
          >
            Find My Loan
            <ArrowRight className="size-4 transition group-hover:translate-x-1" />
          </button>
        </div>

        <div className="bg-primary-700 text-primary-50 flex flex-col justify-center p-7 sm:p-10 lg:p-12">
          <div className="bg-primary-600/70 grid size-12 place-items-center rounded-2xl">
            <Zap className="size-5" />
          </div>

          <p className="font-brand-secondary mt-6 text-2xl font-bold">
            Need help choosing?
          </p>

          <p className="text-primary-100/70 mt-3 text-sm leading-6">
            Talk directly with SR Loan Services and understand which category
            may suit your requirement.
          </p>

          <button
            type="button"
            className="border-primary-500/40 hover:bg-primary-600 mt-6 flex w-fit items-center gap-2 rounded-xl border px-5 py-3 text-sm font-bold transition"
          >
            Contact Us
            <ChevronRight className="size-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                            SMALL COMPONENTS                                */
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

      <p className="text-foreground/55 mx-auto mt-5 max-w-2xl leading-7">
        {description}
      </p>
    </div>
  );
}
function ComparisonHeader({ title }: { title: string }) {
  return (
    <div className="border-primary-100 dark:border-primary-900 border-r p-4 last:border-r-0">
      <p className="font-brand-secondary text-sm font-bold">{title}</p>
    </div>
  );
}

function ComparisonCell({
  value,
  strong = false,
}: {
  value: string;
  strong?: boolean;
}) {
  return (
    <div className="border-primary-100 dark:border-primary-900 border-r p-4 last:border-r-0">
      <p
        className={cn(
          "text-sm",
          strong ? "font-brand-secondary font-bold" : "text-foreground/55",
        )}
      >
        {value}
      </p>
    </div>
  );
}

function ExperienceRow({
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
