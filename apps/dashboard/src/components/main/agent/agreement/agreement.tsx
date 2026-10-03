import { FullAgreementContent } from "@/ui/agreement";
import { cn } from "@repo/styles/cn";
import { useLoaderData } from "@tanstack/react-router";

export function AgreementPage() {
  return (
    <>
      <section className={cn(`py-8`)} >
        <AgreementGenerator />
      </section>
    </>
  );
}

function AgreementGenerator() {
  const { setteledUserDetails } = useLoaderData({
    from: "/(authenticated-routes)/agent/agreement/",
  });

  if (setteledUserDetails.status === "rejected") {
    return <>Agreement Error</>;
  }

  const { value: userDetails } = setteledUserDetails;

  if (!userDetails) {
    return <>No user details</>;
  }

  return (
    <FullAgreementContent
      location={userDetails.location}
      name={userDetails.name}
      pin={userDetails.pin}
    />
  );
}
