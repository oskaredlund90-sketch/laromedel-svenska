"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  BookOpen,
  Users,
  GraduationCap,
  Sparkles,
  BookA,
  PenLine,
  Dumbbell,
  BookText,
  ClipboardCheck,
  Library,
  MessageSquareText,
  Link2,
  Check,
} from "lucide-react";

const SECTIONS = [
  { slug: "kursplan", label: "Kursplan", icon: BookOpen },
  { slug: "lararhandledning", label: "Lärarhandledning", icon: Users },
  { slug: "elevtips", label: "Elevtips", icon: GraduationCap },
  { slug: "grammatik", label: "Grammatik", icon: BookA },
  { slug: "skrivverkstad", label: "Skrivverkstad", icon: PenLine },
  { slug: "ovningar", label: "Övningar", icon: Dumbbell },
  { slug: "textbank", label: "Textbank", icon: BookText },
  { slug: "nationella-prov", label: "Nationella prov", icon: ClipboardCheck },
  { slug: "litteraturhistoria", label: "Litteraturhistoria", icon: Library },
  { slug: "ai-i-svenskan", label: "AI i svenskan", icon: Sparkles },
  { slug: "ordkunskap", label: "Ordkunskap", icon: MessageSquareText },
];

interface SectionNavProps {
  arskurs: string;
}

function CopyLinkButton() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* fallback not needed for modern browsers */
    }
  };

  return (
    <button
      onClick={handleCopy}
      title="Kopiera länk till denna sida"
      className="flex shrink-0 items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-colors whitespace-nowrap text-neutral-500 hover:bg-neutral-100 hover:text-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-200"
    >
      {copied ? (
        <>
          <Check className="h-3.5 w-3.5 text-green-600" />
          Kopierad!
        </>
      ) : (
        <>
          <Link2 className="h-3.5 w-3.5" />
          Kopiera länk
        </>
      )}
    </button>
  );
}

export function SectionNav({ arskurs }: SectionNavProps) {
  const pathname = usePathname();

  return (
    <nav className="border-b border-neutral-200 bg-neutral-50/50 dark:border-neutral-800 dark:bg-neutral-900/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="scrollbar-hide flex gap-1 overflow-x-auto py-2">
          {SECTIONS.map((section) => {
            const href = `/${arskurs}/${section.slug}`;
            const isActive =
              pathname === href || pathname.startsWith(href + "/");
            const Icon = section.icon;

            return (
              <Link
                key={section.slug}
                href={href}
                className={cn(
                  "flex shrink-0 items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-colors whitespace-nowrap",
                  isActive
                    ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900"
                    : "text-neutral-500 hover:bg-neutral-100 hover:text-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-200"
                )}
              >
                <Icon className="h-3.5 w-3.5" />
                {section.label}
              </Link>
            );
          })}

          {/* Separator + copy link button */}
          <div className="mx-1 flex shrink-0 items-center">
            <div className="h-4 w-px bg-neutral-300 dark:bg-neutral-700" />
          </div>
          <CopyLinkButton />
        </div>
      </div>
    </nav>
  );
}
