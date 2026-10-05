import ContactUs from "@/components/main/contact-us/contact-us";
import Main from "@/components/main/main";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact-us/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Main>
      <ContactUs />
    </Main>
  );
}
