import { cn } from "@/lib/utils";
import { type HTMLAttributes } from "react";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "secondary" | "outline";
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        variant === "default" && "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900",
        variant === "secondary" && "bg-neutral-100 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200",
        variant === "outline" && "border border-neutral-200 dark:border-neutral-700",
        className
      )}
      {...props}
    />
  );
}
