import type { TypedMetaOptions } from "@/integrations/storybook/sb.types";
import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/popover";
import CenterContentWrapper from "@/integrations/storybook/content-wrapper";
import { Button } from "@/components/button";
function PopoverDemo() {
  return (
    <CenterContentWrapper>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Open Popover</Button>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverHeader>
            <PopoverTitle>Title</PopoverTitle>
            <PopoverDescription>Description text here.</PopoverDescription>
          </PopoverHeader>
        </PopoverContent>
      </Popover>
    </CenterContentWrapper>
  );
}

const meta: Meta<typeof PopoverDemo> & TypedMetaOptions = {
  component: PopoverDemo,
};

export default meta;

type Story = StoryObj<typeof PopoverDemo>;

export const PopoverDemoStory: Story = {
  args: {},
};
