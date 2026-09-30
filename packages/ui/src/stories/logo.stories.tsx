import type { TypedMetaOptions } from "@/integrations/storybook/sb.types";
import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  LogoIcon,
  LogoIconFilled,
  LogoIconOutlined,
  LogoText,
  LogoTextFilled,
  LogoTextOutlined,
} from "../components/logo";
import { cn } from "@repo/styles/cn";

function Logo() {
  return (
    <>
      <div className={cn(`flex gap-4`)}>
        <LogoIcon />
        <LogoText />
      </div>
      <div className={cn(`flex gap-4`)}>
        <LogoIconFilled />
        <LogoTextFilled />
      </div>
      <div className={cn(`flex gap-4`)}>
        <LogoIconOutlined />
        <LogoTextOutlined />
      </div>
    </>
  );
}

const meta: Meta<typeof Logo> & TypedMetaOptions = {
  component: Logo,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof Logo>;

export const LogoStory: Story = {
  args: {},
};

export const LogoIconStory: Story = {
  args: {},
  render: () => (
    <>
      <LogoIcon />
    </>
  ),
};

export const LogoTextStory: Story = {
  args: {},
  render: () => (
    <>
      <LogoText />
    </>
  ),
};

export const LogoIconFilledStory: Story = {
  args: {},
  render: () => (
    <>
      <LogoIconFilled />
    </>
  ),
};

export const LogoTextFilledStory: Story = {
  args: {},
  render: () => (
    <>
      <LogoTextFilled />
    </>
  ),
};

export const LogoIconOutlinedStory: Story = {
  args: {},
  render: () => (
    <>
      <LogoIconOutlined />
    </>
  ),
};

export const LogoTextOutlinedStory: Story = {
  args: {},
  render: () => (
    <>
      <LogoTextOutlined />
    </>
  ),
};
