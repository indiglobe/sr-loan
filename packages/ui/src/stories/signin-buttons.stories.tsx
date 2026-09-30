import { GoogleSigninButton } from "@/components/signin-buttons";
import type { TypedMetaOptions } from "@/integrations/storybook/sb.types";
import { cn } from "@repo/styles/cn";
import { Meta, StoryObj } from "@storybook/react-vite";

function GoogleSigninButtonDemo() {
  return (
    <div className={cn(`flex h-svh w-full items-center justify-center`)}>
      <GoogleSigninButton />
    </div>
  );
}

const meta: Meta<typeof GoogleSigninButtonDemo> & TypedMetaOptions = {
  component: GoogleSigninButtonDemo,
  parameters: { layout: "fullscreen" },
};

export default meta;

type Story = StoryObj<typeof GoogleSigninButtonDemo>;

export const GoogleSigninButtonDemoStory: Story = {
  args: {},
};
