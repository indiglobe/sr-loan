import {
  HeadContent,
  Scripts,
  createRootRouteWithContext,
} from "@tanstack/react-router";
import { DevTools } from "@/integrations/tanstack/devtools";
import appCss from "../styles.css?url";
import type { QueryClient } from "@tanstack/react-query";
import { ThemeProvider } from "@/integrations/theme/theme-provider";
import { cn } from "@repo/styles/cn";
import { Toaster } from "@repo/ui/sonner";
import { Footer } from "@/components/footer/footer";
import { RootErrorComponent } from "@/components/main/root-error";
import { RootNotFoundComponent } from "@/components/main/root-not-found";

interface MyRouterContext {
  queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "SR Loan Services",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
    ],
  }),

  shellComponent: RootDocument,

  errorComponent: () => <RootErrorComponent />,
  notFoundComponent: () => <RootNotFoundComponent />,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body
        className={cn(
          `flex max-w-svw flex-col min-h-dvh overflow-x-clip overflow-y-auto`,
        )}
      >
        <ThemeProvider>
          <>{children}</>
          <Footer />
          <Toaster />
        </ThemeProvider>
        <DevTools />
        <Scripts />
      </body>
    </html>
  );
}
