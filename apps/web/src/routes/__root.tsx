import {
  HeadContent,
  Scripts,
  createRootRouteWithContext,
} from "@tanstack/react-router";
import type { QueryClient } from "@tanstack/react-query";
import { Header } from "@/components/header/header";
import { Footer } from "@/components/footer/footer";
import { DevTools } from "@/integrations/tanstack/devtools";
import appCss from "../styles.css?url";
import { cn } from "@repo/styles/cn";
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
        title: "SR Loan Service",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "icon",
        href: "/favicon.ico",
      },
    ],
  }),
  shellComponent: RootDocument,

  errorComponent: () => <RootErrorComponent />,
  notFoundComponent: () => <RootNotFoundComponent />,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cn(`dark`)}>
      <head>
        <HeadContent />
      </head>
      <body
        className={cn(`bg-background text-foreground flex min-h-svh flex-col`)}
      >
        <Header />
        {children}
        <Footer />
        <Scripts />
        <DevTools />
      </body>
    </html>
  );
}
