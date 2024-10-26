import type { Component, ComponentProps, ValidComponent } from "solid-js";
import { splitProps } from "solid-js";

import * as AlertPrimitive from "@kobalte/core/alert";
import type { PolymorphicProps } from "@kobalte/core/polymorphic";
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

import { cn } from "~/lib/utils";

const alertVariants = cva(
  "relative w-full rounded-lg border p-4 [&>svg]:absolute [&>svg]:text-foreground",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive:
          "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
        success:
          "border-green-500/50 text-green-500 dark:border-green-500 [&>svg]:text-green-500",
        warning:
          "border-yellow-500/50 text-yellow-500 dark:border-yellow-500 [&>svg]:text-yellow-500",
      },
      size: {
        sm: "p-2 [&>svg]:h-4 [&>svg]:w-4 [&>svg]:left-3 [&>svg]:top-1.5 [&>svg+div]:translate-y-[-3px] [&>svg~*]:pl-7 [&>svg~*]:text-xs",
        md: "p-4 [&>svg]:h-5 [&>svg]:w-5 [&>svg]:left-4 [&>svg]:top-3.5 [&>svg+div]:translate-y-[-3px] [&>svg~*]:pl-7 [&>svg~*]:text-sm",
        lg: "p-6 [&>svg]:h-6 [&>svg]:w-6 [&>svg]:left-5 [&>svg]:top-6 [&>svg+div]:translate-y-[-3px] [&>svg~*]:pl-7 [&>svg~*]:text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

type AlertRootProps<T extends ValidComponent = "div"> =
  AlertPrimitive.AlertRootProps<T> &
    VariantProps<typeof alertVariants> & { class?: string | undefined };

const Alert = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, AlertRootProps<T>>
) => {
  const [local, others] = splitProps(props as AlertRootProps, [
    "class",
    "variant",
  ]);
  return (
    <AlertPrimitive.Root
      class={cn(
        alertVariants({ variant: props.variant, size: props.size }),
        local.class
      )}
      {...others}
    />
  );
};

const AlertTitle: Component<ComponentProps<"h5">> = (props) => {
  const [local, others] = splitProps(props, ["class"]);
  return (
    <h5
      class={cn("mb-1 font-medium leading-none tracking-tight", local.class)}
      {...others}
    />
  );
};

const AlertDescription: Component<ComponentProps<"div">> = (props) => {
  const [local, others] = splitProps(props, ["class"]);
  return (
    <div class={cn("text-sm [&_p]:leading-relaxed", local.class)} {...others} />
  );
};

export { Alert, AlertTitle, AlertDescription };
