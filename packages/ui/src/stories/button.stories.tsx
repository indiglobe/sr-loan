import type { TypedMetaOptions } from "@/integrations/storybook/sb.types";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "@/components/button";
import { ComponentProps } from "react";

function ButtonUI({ ...props }: ComponentProps<typeof Button>) {
  return <Button {...props}>Sample Button</Button>;
}

const meta: Meta<typeof ButtonUI> & TypedMetaOptions = {
  component: ButtonUI,
  parameters: {
    layout: "centered",
  },
  args: {
    variant: "default",
    corner: "sharp",
    size: "default",
  },
  argTypes: {
    variant: {
      control: "select",
      options: [
        "accent",
        "default",
        "destructive",
        "ghost",
        "link",
        "outline",
        "primary",
        "secondary",
      ] satisfies NonNullable<
        Pick<ComponentProps<typeof Button>, "variant">["variant"]
      >[],
    },
    corner: {
      control: "select",
      options: ["circle", "rounded", "sharp"] satisfies NonNullable<
        Pick<ComponentProps<typeof Button>, "corner">["corner"]
      >[],
    },
    size: {
      control: "select",
      options: [
        "default",
        "icon",
        "icon-lg",
        "icon-sm",
        "icon-xs",
        "lg",
        "sm",
        "xs",
      ] satisfies NonNullable<
        Pick<ComponentProps<typeof Button>, "size">["size"]
      >[],
    },
  },
};

export default meta;

type Story = StoryObj<typeof ButtonUI>;

export const DefaultButtonUIStory: Story = {
  args: {},
};
