import Link from "next/link";
import { ArrowLeft, Bot } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "AI-labbet",
    template: "%s | AI-labbet | Laromedel i Svenska",
  },
  description:
    "Lar dig anvanda AI-verktyg pa ett kritiskt och kreativt satt i svenskundervisningen.",
};

export default function AiLabbetLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-[60vh]">
      {/* Top bar with back link */}
      <div className="border-b border-neutral-200 bg-neutral-50/50 dark:border-neutral-800 dark:bg-neutral-900/50">
        <div className="mx-auto flex max-w-4xl items-center gap-3 px-4 py-3 sm:px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Tillbaka
          </Link>
          <span className="text-neutral-300 dark:text-neutral-700">/</span>
          <Link
            href="/ai-labbet"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-900 dark:text-white"
          >
            <Bot className="h-4 w-4" />
            AI-labbet
          </Link>
        </div>
      </div>

      {children}
    </div>
  );
}
