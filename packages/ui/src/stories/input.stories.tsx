import { Input } from "@/components/input";
import type {
  TypedMetaOptions,
  TypedStoryOptions,
} from "@/integrations/storybook/sb.types";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof Input> & TypedMetaOptions = {
  component: Input,
};

export default meta;

type Story = StoryObj<typeof Input> & TypedStoryOptions;

export const InputStory: Story = {
  args: {},
};
