import {
  LearningStep,
  LearningStepCount,
  LearningStepDetails,
  LearningStepHeading,
} from "@/components/learning-step";
import type { TypedMetaOptions } from "@/integrations/storybook/sb.types";
import { cn } from "@repo/styles/cn";
import type { Meta, StoryObj } from "@storybook/react-vite";

function Learing() {
  return (
    <LearningStep className={cn(`relative -left-10 @3xl:left-0`)}>
      <LearningStepCount>Step 1</LearningStepCount>
      <LearningStepHeading>Join a Free Masterclass</LearningStepHeading>
      <LearningStepDetails>
        Understand how professional traders read the market using Smart Money
        Concepts and institutional strategies.
      </LearningStepDetails>
    </LearningStep>
  );
}

const meta: Meta<typeof Learing> & TypedMetaOptions = {
  component: Learing,

  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof Learing>;

export const LearingStory: Story = {
  args: {},
};
