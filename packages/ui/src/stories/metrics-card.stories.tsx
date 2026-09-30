import {
  MetricCard,
  MetricCardInner,
  MetricCardLabel,
  MetricCardValue,
} from "@/components/metrics-card";
import type { TypedMetaOptions } from "@/integrations/storybook/sb.types";
import type { Meta, StoryObj } from "@storybook/react-vite";

function Metric() {
  return (
    <MetricCard>
      <MetricCardInner>
        <MetricCardValue>50%</MetricCardValue>
        <MetricCardLabel>Some content</MetricCardLabel>
      </MetricCardInner>
    </MetricCard>
  );
}

const meta: Meta<typeof Metric> & TypedMetaOptions = {
  component: Metric,

  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof Metric>;

export const MetricStory: Story = {
  args: {},
};
