"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import type { Subject } from "@/lib/supabase/types";

interface Props {
  currentSubject: Subject;
}

export function SubjectToggle({ currentSubject }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleToggle = (subject: Subject) => {
    const params = new URLSearchParams(searchParams.toString());
    if (subject === "sva") {
      params.set("amne", "sva");
    } else {
      params.delete("amne");
    }
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="mb-8 flex gap-2">
      <button
        onClick={() => handleToggle("svenska")}
        className={cn(
          "rounded-lg px-4 py-2 text-sm font-medium transition-colors",
          currentSubject === "svenska"
            ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900"
            : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-700"
        )}
      >
        Svenska
      </button>
      <button
        onClick={() => handleToggle("sva")}
        className={cn(
          "rounded-lg px-4 py-2 text-sm font-medium transition-colors",
          currentSubject === "sva"
            ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900"
            : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-700"
        )}
      >
        Svenska som andraspråk
      </button>
    </div>
  );
}
