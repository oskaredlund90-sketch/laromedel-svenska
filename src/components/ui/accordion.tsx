"use client";

import { useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";

interface AccordionProps {
  title: string;
  icon: ReactNode;
  defaultOpen?: boolean;
  accentColor?: string;
  children: ReactNode;
}

export function Accordion({
  title,
  icon,
  defaultOpen = false,
  accentColor = "text-neutral-600 dark:text-neutral-400",
  children,
}: AccordionProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="rounded-xl border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center gap-3 px-5 py-4 text-left transition-colors hover:bg-neutral-50 dark:hover:bg-neutral-900 rounded-xl"
      >
        <span className={accentColor}>{icon}</span>
        <span className="flex-1 text-lg font-semibold text-neutral-900 dark:text-white">
          {title}
        </span>
        <ChevronDown
          className={`h-5 w-5 text-neutral-400 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className="grid transition-[grid-template-rows] duration-200 ease-in-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <div className="px-5 pb-5 pt-1">{children}</div>
        </div>
      </div>
    </div>
  );
}
