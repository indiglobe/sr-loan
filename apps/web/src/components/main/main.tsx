import { cn } from "@repo/styles/cn";
import type { ComponentProps } from "react";

export default function Main({
  className,
  children,
  ...props
}: ComponentProps<"main">) {
  return (
    <main className={cn("grow", className)} {...props}>
      {children}
    </main>
  );
}
