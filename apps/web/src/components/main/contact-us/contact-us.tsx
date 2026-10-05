import { Check, Mail, MapPin, Phone } from "lucide-react";
import type { ComponentProps, ElementType } from "react";
import Main from "@/components/main/main";
import { cn } from "@repo/styles/cn";

function ContactUs() {
  return (
    <Main>
      <div className="bg-background text-foreground min-h-screen overflow-hidden">
        <ContactHero />

        <ContactOptions />

        <ContactFormSection />

        <SupportCTA />
      </div>
    </Main>
  );
}

const contactOptions = [
  {
    icon: Phone,
    title: "Call us",
    value: "+91 98765 43210",
    description: "Mon - Sat, 9:00 AM - 7:00 PM",
  },
  {
    icon: Mail,
    title: "Email us",
    value: "support@loanease.com",
    description: "We usually reply within 24 hours",
  },
  {
    icon: MapPin,
    title: "Visit us",
    value: "Kolkata, West Bengal",
    description: "Meet our loan assistance team",
  },
];

const supportBenefits = [
  {
    title: "No obligation",
    description: "Asking us a question won't start a loan application.",
  },
  {
    title: "Secure communication",
    description: "Your personal information is handled securely.",
  },
  {
    title: "Dedicated assistance",
    description: "Get help from our dedicated loan support team.",
  },
];

/* -------------------------------------------------------------------------- */
/*                                CONTACT HERO                                */
/* -------------------------------------------------------------------------- */

function ContactHero({ className, ...props }: ComponentProps<"section">) {
  return (
    <section
      className={cn(
        "border-primary-100 dark:border-primary-900 relative overflow-hidden border-b",
        className,
      )}
      {...props}
    >
      <div className="bg-primary-200/40 dark:bg-primary-900/20 absolute -top-32 -right-32 size-80 rounded-full blur-3xl" />

      <div className="bg-secondary-200/30 dark:bg-secondary-900/20 absolute -bottom-40 -left-32 size-80 rounded-full blur-3xl" />

      <div className="2xs:px-5 relative mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 md:py-20 lg:px-8">
        <div className="border-primary-200 bg-primary-50 text-primary-700 dark:border-primary-800 dark:bg-primary-950 dark:text-primary-300 mx-auto mb-5 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold">
          <span className="bg-accent-500 size-2 rounded-full" />
          We're here to help
        </div>

        <h1 className="font-brand-secondary mx-auto max-w-3xl text-4xl leading-tight font-bold sm:text-5xl lg:text-6xl">
          Have questions?
          <span className="text-primary-600 dark:text-primary-400">
            {" "}
            Talk to us.
          </span>
        </h1>

        <p className="text-foreground/60 mx-auto mt-5 max-w-2xl text-base leading-7 sm:text-lg">
          Whether you need help choosing a loan, understanding eligibility, or
          tracking your application, our team is ready to assist you.
        </p>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                               CONTACT OPTIONS                              */
/* -------------------------------------------------------------------------- */

function ContactOptions({ className, ...props }: ComponentProps<"section">) {
  return (
    <section className={cn("py-12 sm:py-16", className)} {...props}>
      <div className="2xs:px-5 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {contactOptions.map((option) => (
            <ContactCard key={option.title} {...option} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                             CONTACT FORM SECTION                           */
/* -------------------------------------------------------------------------- */

function ContactFormSection({
  className,
  ...props
}: ComponentProps<"section">) {
  return (
    <section className={cn("pb-20", className)} {...props}>
      <div className="2xs:px-5 mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <ContactInformation />

        <ContactForm />
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                            CONTACT INFORMATION                             */
/* -------------------------------------------------------------------------- */

function ContactInformation({ className, ...props }: ComponentProps<"div">) {
  return (
    <div className={cn("lg:py-8", className)} {...props}>
      <p className="text-primary-600 text-sm font-bold tracking-widest uppercase">
        Contact our team
      </p>

      <h2 className="font-brand-secondary mt-3 max-w-lg text-3xl leading-tight font-bold sm:text-4xl">
        Tell us how we can help.
      </h2>

      <p className="text-foreground/55 mt-5 max-w-lg leading-7">
        Fill in the form and one of our loan specialists will get in touch with
        you as soon as possible.
      </p>

      <div className="mt-8 space-y-5">
        {supportBenefits.map((benefit) => (
          <SupportBenefit key={benefit.title} {...benefit} />
        ))}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                                CONTACT FORM                                */
/* -------------------------------------------------------------------------- */

function ContactForm({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "border-primary-100 bg-background shadow-primary-950/5 dark:border-primary-900 2xs:p-6 rounded-4xl border p-5 shadow-xl sm:p-8",
        className,
      )}
      {...props}
    >
      <div className="mb-7">
        <h2 className="font-brand-secondary text-2xl font-bold">
          Send us a message
        </h2>

        <p className="text-foreground/50 mt-2 text-sm">
          Enter your details below and we'll get back to you.
        </p>
      </div>

      <form className="space-y-5" onSubmit={(event) => event.preventDefault()}>
        <div className="grid gap-5 sm:grid-cols-2">
          <FormInput
            id="name"
            name="name"
            type="text"
            label="Full Name"
            placeholder="Enter your name"
          />

          <FormInput
            id="email"
            name="email"
            type="email"
            label="Email Address"
            placeholder="you@example.com"
          />
        </div>

        <FormInput
          id="phone"
          name="phone"
          type="tel"
          label="Phone Number"
          placeholder="+91 98765 43210"
        />

        <FormSelect />

        <FormTextarea />

        <button
          type="submit"
          className="bg-primary-600 shadow-primary-600/20 hover:bg-primary-700 w-full rounded-xl px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition active:scale-[0.99] sm:w-auto"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                                  SUPPORT CTA                               */
/* -------------------------------------------------------------------------- */

function SupportCTA({ className, ...props }: ComponentProps<"section">) {
  return (
    <section
      className={cn("2xs:px-5 px-4 pb-20 sm:px-6 lg:px-8", className)}
      {...props}
    >
      <div className="bg-primary-700 mx-auto flex max-w-7xl flex-col gap-6 rounded-4xl px-6 py-10 text-white sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
        <div>
          <p className="text-primary-200 text-sm font-semibold">
            Need urgent assistance?
          </p>

          <h2 className="font-brand-secondary mt-2 text-2xl font-bold sm:text-3xl">
            Speak directly with our support team.
          </h2>

          <p className="text-primary-100 mt-2 text-sm">
            Our loan specialists are available during business hours.
          </p>
        </div>

        <button
          type="button"
          className="bg-background text-primary-700 shrink-0 rounded-xl px-6 py-3 font-semibold transition hover:scale-[1.02]"
        >
          Call Support
        </button>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                            SMALL UI COMPONENTS                             */
/* -------------------------------------------------------------------------- */

function ContactCard({
  icon: Icon,
  title,
  value,
  description,
}: {
  icon: ElementType;
  title: string;
  value: string;
  description: string;
}) {
  return (
    <article className="group border-primary-100 bg-background hover:border-primary-300 dark:border-primary-900 rounded-3xl border p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="bg-primary-100 text-primary-700 group-hover:bg-primary-600 dark:bg-primary-900 dark:text-primary-300 mb-5 grid size-12 place-items-center rounded-2xl transition group-hover:text-white">
        <Icon className="size-5" />
      </div>

      <p className="text-foreground/50 text-sm font-medium">{title}</p>

      <h3 className="font-brand-secondary mt-1 text-lg font-bold">{value}</h3>

      <p className="text-foreground/50 mt-2 text-sm">{description}</p>
    </article>
  );
}

function SupportBenefit({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-4">
      <div className="bg-secondary-100 text-secondary-800 dark:bg-secondary-900 dark:text-secondary-200 grid size-10 shrink-0 place-items-center rounded-xl">
        <Check className="size-4" strokeWidth={3} />
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

function FormInput({
  label,
  className,
  ...props
}: ComponentProps<"input"> & {
  label: string;
}) {
  return (
    <div>
      <label htmlFor={props.id} className="mb-2 block text-sm font-semibold">
        {label}
      </label>

      <input
        className={cn(
          "border-primary-100 bg-background placeholder:text-foreground/30 focus:border-primary-500 focus:ring-primary-100 dark:border-primary-900 dark:focus:ring-primary-950 w-full rounded-xl border px-4 py-3 text-sm transition outline-none focus:ring-4",
          className,
        )}
        {...props}
      />
    </div>
  );
}

function FormSelect() {
  return (
    <div>
      <label htmlFor="subject" className="mb-2 block text-sm font-semibold">
        How can we help?
      </label>

      <select
        id="subject"
        name="subject"
        defaultValue=""
        className="border-primary-100 bg-background focus:border-primary-500 focus:ring-primary-100 dark:border-primary-900 dark:focus:ring-primary-950 w-full rounded-xl border px-4 py-3 text-sm transition outline-none focus:ring-4"
      >
        <option value="" disabled>
          Select a topic
        </option>

        <option value="personal-loan">Personal Loan</option>

        <option value="home-loan">Home Loan</option>

        <option value="education-loan">Education Loan</option>

        <option value="business-loan">Business Loan</option>

        <option value="application">Existing Application</option>

        <option value="other">Other</option>
      </select>
    </div>
  );
}

function FormTextarea() {
  return (
    <div>
      <label htmlFor="message" className="mb-2 block text-sm font-semibold">
        Message
      </label>

      <textarea
        id="message"
        name="message"
        rows={5}
        placeholder="Tell us how we can help..."
        className="border-primary-100 bg-background placeholder:text-foreground/30 focus:border-primary-500 focus:ring-primary-100 dark:border-primary-900 dark:focus:ring-primary-950 w-full resize-none rounded-xl border px-4 py-3 text-sm transition outline-none focus:ring-4"
      />
    </div>
  );
}

export default ContactUs;
