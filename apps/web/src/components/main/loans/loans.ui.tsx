import { cn } from "@repo/styles/cn";
import { Link } from "@tanstack/react-router";
import type { LinkProps } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import type { ComponentProps } from "react";

export function OverviewStat({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn(
        `border-primary-100 bg-primary-50/60 dark:border-primary-900 dark:bg-primary-950/30 rounded-lg border p-4`,
        className,
      )}
      {...props}
    />
  );
}

export function OverviewStatValue({
  className,
  ...props
}: ComponentProps<"p">) {
  return (
    <p
      {...props}
      className={cn(
        "font-brand-secondary text-primary-700 dark:text-primary-300 text-xl font-bold",
        className,
      )}
    />
  );
}

export function OverviewStatLabel({
  className,
  ...props
}: ComponentProps<"p">) {
  return (
    <p
      {...props}
      className={cn("text-foreground/45 mt-1 text-xs", className)}
    />
  );
}

export function LoanProductCard({
  className,
  ...props
}: ComponentProps<typeof Link> & { to: LinkProps["to"] }) {
  return (
    <Link
      className={cn(
        `group border-foreground/5 bg-background hover:border-primary-200 shadow-primary-950/5 dark:bg-foreground/3 rounded-lg border p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl`,
        className,
      )}
      {...props}
    />
  );
}

export function LoanProductCardIcon({
  className,
  ...props
}: ComponentProps<"div">) {
  return (
    <div
      className={cn(`grid size-12 place-items-center rounded-md`, className)}
      {...props}
    />
  );
}

export function LoanProductCardHeading({
  className,
  ...props
}: ComponentProps<"h3">) {
  return (
    <h3
      className={cn(`font-brand-secondary mt-6 text-xl font-bold`, className)}
      {...props}
    />
  );
}

export function LoanProductCardDescription({
  className,
  ...props
}: ComponentProps<"p">) {
  return (
    <p
      className={cn(
        `text-foreground/55 mt-3 min-h-24 text-sm leading-6`,
        className,
      )}
      {...props}
    />
  );
}

export function ProductDetail({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn(`flex items-center justify-between gap-3`, className)}
      {...props}
    />
  );
}

export function ProductDetailLabel({
  className,
  ...props
}: ComponentProps<"span">) {
  return (
    <span className={cn(`text-foreground/45 text-xs`, className)} {...props} />
  );
}

export function ProductDetailValue({
  className,
  ...props
}: ComponentProps<"span">) {
  return <span className={cn(`text-xs font-bold`, className)} {...props} />;
}

export function ViewDetails({ className, ...props }: ComponentProps<"span">) {
  return (
    <span
      className={cn(
        `text-primary-600 group/button mt-6 flex items-center gap-1.5 text-sm font-bold`,
        className,
      )}
      {...props}
    >
      View details
      <ChevronRight className="size-4 transition group-hover/button:translate-x-1" />
    </span>
  );
}

export function EligibilityCard({
  className,
  ...props
}: ComponentProps<"div">) {
  return (
    <div
      className={cn(
        `border-primary-100 bg-background dark:border-primary-900 rounded-2xl border p-5`,
        className,
      )}
      {...props}
    />
  );
}

export function EligibilityCardIcon({
  className,
  ...props
}: ComponentProps<"div">) {
  return (
    <div
      className={cn(
        `bg-primary-100 text-primary-700 dark:bg-primary-900/40 dark:text-primary-200 grid size-11 place-items-center rounded-xl`,
        className,
      )}
      {...props}
    />
  );
}

export function EligibilityCardHeading({
  className,
  ...props
}: ComponentProps<"h3">) {
  return (
    <h3
      className={cn(`font-brand-secondary mt-4 font-bold`, className)}
      {...props}
    />
  );
}

export function EligibilityCardDescription({
  className,
  ...props
}: ComponentProps<"p">) {
  return (
    <p
      className={cn(`text-foreground/50 mt-2 text-sm leading-6`, className)}
      {...props}
    />
  );
}
