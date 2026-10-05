// import { cn } from "@/lib/utils/cn";
// import { LogoIcon, LogoText } from "@/ui/logo";
import { cn } from "@repo/styles/cn";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import type { ComponentProps } from "react";

export default function Navbar({ className, ...props }: ComponentProps<"nav">) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={cn(
        `border-primary-100 bg-background/95 dark:border-primary-900 sticky top-0 z-50 w-full border-b backdrop-blur-md`,
        className,
      )}
      {...props}
    >
      <div className="2xs:px-5 mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          to="/"
          onClick={() => setIsOpen(false)}
          className="flex items-center"
        >
          {/* <LogoIcon className={cn(`h-12 w-12`)} />
          <LogoText className={cn(`h-12 w-48 max-xs:hidden xs:block md:hidden xl:block`)} /> */}
        </Link>

        {/* Desktop Links */}
        <div className="hidden items-center gap-2 md:flex">
          <Link
            to="/"
            activeOptions={{
              exact: true,
            }}
            className="text-foreground/60 hover:bg-primary-50 hover:text-primary-600 dark:hover:bg-primary-950 rounded-xl px-4 py-2 text-sm font-semibold transition-colors"
            activeProps={{
              className:
                "bg-primary-50 text-primary-700 dark:bg-primary-950 dark:text-primary-300",
            }}
          >
            Home
          </Link>

          <Link
            to="/our-product"
            className="text-foreground/60 hover:bg-primary-50 hover:text-primary-600 dark:hover:bg-primary-950 rounded-xl px-4 py-2 text-sm font-semibold transition-colors"
            activeProps={{
              className:
                "bg-primary-50 text-primary-700 dark:bg-primary-950 dark:text-primary-300",
            }}
          >
            Our Product
          </Link>

          <Link
            to="/loans"
            className="text-foreground/60 hover:bg-primary-50 hover:text-primary-600 dark:hover:bg-primary-950 rounded-xl px-4 py-2 text-sm font-semibold transition-colors"
            activeProps={{
              className:
                "bg-primary-50 text-primary-700 dark:bg-primary-950 dark:text-primary-300",
            }}
          >
            Loans
          </Link>

          <Link
            to="/contact-us"
            className="text-foreground/60 hover:bg-primary-50 hover:text-primary-600 dark:hover:bg-primary-950 rounded-xl px-4 py-2 text-sm font-semibold transition-colors"
            activeProps={{
              className:
                "bg-primary-50 text-primary-700 dark:bg-primary-950 dark:text-primary-300",
            }}
          >
            Contact Us
          </Link>
        </div>

        {/* Desktop Right Side */}
        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            className="text-primary-700 hover:bg-primary-50 dark:text-primary-300 dark:hover:bg-primary-950 rounded-xl px-4 py-2.5 text-sm font-semibold transition"
          >
            Sign In
          </button>

          <button
            type="button"
            className="bg-primary-600 shadow-primary-600/15 hover:bg-primary-700 rounded-xl px-5 py-2.5 text-sm font-semibold text-white shadow-md transition active:scale-95"
          >
            Apply Now
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
          className="border-primary-100 text-foreground hover:bg-primary-50 dark:border-primary-900 dark:hover:bg-primary-950 flex size-10 items-center justify-center rounded-xl border transition md:hidden"
        >
          {isOpen ? (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className="size-5"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className="size-5"
            >
              <path d="M4 6h16" />
              <path d="M4 12h16" />
              <path d="M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          `overflow-hidden transition-all duration-300 md:hidden`,
          isOpen
            ? "border-primary-100 dark:border-primary-900 max-h-96 border-t opacity-100"
            : "max-h-0 opacity-0",
        )}
      >
        <div className="2xs:px-5 mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
          <Link
            to="/"
            activeOptions={{
              exact: true,
            }}
            onClick={() => setIsOpen(false)}
            className="text-foreground/60 hover:bg-primary-50 hover:text-primary-600 dark:hover:bg-primary-950 rounded-xl px-4 py-3 text-sm font-semibold transition"
            activeProps={{
              className:
                "bg-primary-50 text-primary-700 dark:bg-primary-950 dark:text-primary-300",
            }}
          >
            Home
          </Link>

          <Link
            to="/loans"
            onClick={() => setIsOpen(false)}
            className="text-foreground/60 hover:bg-primary-50 hover:text-primary-600 dark:hover:bg-primary-950 rounded-xl px-4 py-3 text-sm font-semibold transition"
            activeProps={{
              className:
                "bg-primary-50 text-primary-700 dark:bg-primary-950 dark:text-primary-300",
            }}
          >
            Loans
          </Link>

          <Link
            to="/our-product"
            onClick={() => setIsOpen(false)}
            className="text-foreground/60 hover:bg-primary-50 hover:text-primary-600 dark:hover:bg-primary-950 rounded-xl px-4 py-3 text-sm font-semibold transition"
            activeProps={{
              className:
                "bg-primary-50 text-primary-700 dark:bg-primary-950 dark:text-primary-300",
            }}
          >
            Our Product
          </Link>

          <Link
            to="/contact-us"
            onClick={() => setIsOpen(false)}
            className="text-foreground/60 hover:bg-primary-50 hover:text-primary-600 dark:hover:bg-primary-950 rounded-xl px-4 py-3 text-sm font-semibold transition"
            activeProps={{
              className:
                "bg-primary-50 text-primary-700 dark:bg-primary-950 dark:text-primary-300",
            }}
          >
            Contact Us
          </Link>

          <div className="bg-primary-100 dark:bg-primary-900 my-2 h-px" />

          <button
            type="button"
            className="text-primary-700 hover:bg-primary-50 dark:text-primary-300 dark:hover:bg-primary-950 rounded-xl px-4 py-3 text-left text-sm font-semibold transition"
          >
            Sign In
          </button>

          <button
            type="button"
            className="bg-primary-600 hover:bg-primary-700 mt-1 w-full rounded-xl px-5 py-3 text-sm font-semibold text-white transition"
          >
            Apply Now
          </button>
        </div>
      </div>
    </nav>
  );
}
