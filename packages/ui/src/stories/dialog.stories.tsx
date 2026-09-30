import type { TypedMetaOptions } from "@/integrations/storybook/sb.types";
import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogMain,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/dialog";
import { Button } from "@/components/button";
import CenterContentWrapper from "@/integrations/storybook/content-wrapper";

function DialogDemo() {
  return (
    <CenterContentWrapper>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Open Dialog</Button>
        </DialogTrigger>

        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create new project</DialogTitle>
            <DialogDescription>
              Configure the basic settings for your new project before
              continuing.
            </DialogDescription>
          </DialogHeader>
          <DialogMain>
            <div className="space-y-1">
              <label className="text-sm font-medium">Project Name</label>
              <input
                placeholder="Acme Dashboard"
                className="w-full rounded-none border border-accent-300 bg-accent-50 px-3 py-2 outline-none focus:border-primary-500 dark:border-accent-700 dark:bg-accent-950"
              />
            </div>

            <div className="space-y-1">
              <label className="text-sm font-medium">Description</label>
              <textarea
                rows={3}
                placeholder="Describe your project..."
                className="w-full rounded-none border border-accent-300 bg-accent-50 px-3 py-2 outline-none focus:border-primary-500 dark:border-accent-700 dark:bg-accent-950"
              />
            </div>
          </DialogMain>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline" className="rounded-none">
                Cancel
              </Button>
            </DialogClose>

            <Button className="rounded-none">Create Project</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </CenterContentWrapper>
  );
}

const meta: Meta<typeof DialogDemo> & TypedMetaOptions = {
  component: DialogDemo,
};

export default meta;

type Story = StoryObj<typeof DialogDemo>;

export const DialogDemoStory: Story = {
  args: {},
};
