"use client";

import * as React from "react";
import { XIcon } from "lucide-react";
import { Dialog as DialogPrimitive } from "radix-ui";

import { cn } from "@repo/styles/cn";
import { Button } from "@/components/button";

function Dialog(props: React.ComponentProps<typeof DialogPrimitive.Root>) {
  return <DialogPrimitive.Root data-slot="dialog" {...props} />;
}

function DialogTrigger(
  props: React.ComponentProps<typeof DialogPrimitive.Trigger>,
) {
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />;
}

function DialogPortal(
  props: React.ComponentProps<typeof DialogPrimitive.Portal>,
) {
  return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />;
}

function DialogClose(
  props: React.ComponentProps<typeof DialogPrimitive.Close>,
) {
  return <DialogPrimitive.Close data-slot="dialog-close" {...props} />;
}

function DialogOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay>) {
  return (
    <DialogPrimitive.Overlay
      data-slot="dialog-overlay"
      className={cn(
        "fixed inset-0 z-50 bg-black/40 backdrop-blur-sm dark:bg-black/60 data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0 duration-200",
        className,
      )}
      {...props}
    />
  );
}

function DialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content> & {
  showCloseButton?: boolean;
}) {
  return (
    <DialogPortal>
      <DialogOverlay />

      <DialogPrimitive.Content
        data-slot="dialog-content"
        className={cn(
          "fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 grid w-full max-w-[calc(100%-2rem)] sm:max-w-lg border border-primary-500/50 dark:border-primary-500/50 bg-background text-foreground shadow-2xl outline-none rounded-none overflow-hidden data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95 duration-200",
          className,
        )}
        {...props}
      >
        {children}

        {showCloseButton && (
          <DialogPrimitive.Close asChild>
            <Button
              variant="ghost"
              size="icon-sm"
              className={cn(
                "absolute right-0 top-0 z-10 h-11 w-11 sm:h-12 sm:w-12 rounded-none border-b border-l border-primary-500/50 dark:border-primary-500/50 bg-primary-50 dark:bg-neutral-950 text-primary-700 dark:text-primary-300 hover:bg-primary-100 dark:hover:bg-neutral-800 focus-visible:ring-primary-500",
              )}
            >
              <XIcon className="size-4" />
              <span className="sr-only">Close</span>
            </Button>
          </DialogPrimitive.Close>
        )}
      </DialogPrimitive.Content>
    </DialogPortal>
  );
}

function DialogHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-header"
      className={cn(
        "space-y-2 border-b border-primary-500/50 dark:border-primary-500/50 bg-primary-50/70 dark:bg-neutral-950 px-6 py-5 pr-16 sm:pr-20",
        className,
      )}
      {...props}
    />
  );
}

function DialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Title>) {
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={cn(
        "font-brand-primary text-lg sm:text-xl font-semibold tracking-tight text-primary-700 dark:text-primary-300",
        className,
      )}
      {...props}
    />
  );
}

function DialogMain({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(`px-6 py-5 bg-primary-50 dark:bg-neutral-950`, className)}
      {...props}
    />
  );
}

function DialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Description>) {
  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={cn(
        "text-sm leading-7 text-foreground/70 *:[a]:underline *:[a]:underline-offset-4 *:[a]:text-primary-600 *:[a]:hover:text-primary-500 dark:*:[a]:text-primary-400 dark:*:[a]:hover:text-primary-300",
        className,
      )}
      {...props}
    />
  );
}

function DialogBody({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-body"
      className={cn("px-6 py-6", className)}
      {...props}
    />
  );
}

function DialogFooter({
  className,
  showCloseButton = false,
  closeLabel = "Close",
  children,
  ...props
}: React.ComponentProps<"div"> & {
  showCloseButton?: boolean;
  closeLabel?: string;
}) {
  return (
    <div
      data-slot="dialog-footer"
      className={cn(
        "flex flex-col-reverse gap-3 sm:flex-row sm:justify-end border-t border-primary-500/50 dark:border-primary-500/50 bg-primary-50/70 dark:bg-neutral-950 px-6 py-5",
        className,
      )}
      {...props}
    >
      {children}

      {showCloseButton && (
        <DialogPrimitive.Close asChild>
          <Button variant="outline">{closeLabel}</Button>
        </DialogPrimitive.Close>
      )}
    </div>
  );
}

export {
  Dialog,
  DialogTrigger,
  DialogPortal,
  DialogOverlay,
  DialogContent,
  DialogClose,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogBody,
  DialogFooter,
  DialogMain,
};
