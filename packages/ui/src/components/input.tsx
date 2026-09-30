import { cn } from "@repo/styles/cn";
import * as React from "react";

function Input({
  className,
  type,
  corner,
  ...props
}: React.ComponentProps<"input"> & {
  corner?: "sharp" | "rounded" | "circle";
}) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "h-8 w-full min-w-0 border border-primary-500 bg-transparent px-2.5 py-1 text-base transition-colors outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-primary-200 dark:placeholder:text-primary-800 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:border-primary-600 focus-visible:ring-2 focus-visible:ring-primary-600 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-primary-100/50 disabled:opacity-50 aria-invalid:border-red-500 aria-invalid:ring-2 aria-invalid:ring-red-500 md:text-sm dark:bg-transparent dark:disabled:bg-primary-500/50 dark:aria-invalid:border-red-800/50 dark:aria-invalid:ring-red-800",
        {
          "rounded-none": corner === "sharp",
          "rounded-md": corner === "rounded",
          "rounded-full": corner === "circle",
        },
        className,
      )}
      {...props}
    />
  );
}

export { Input };
