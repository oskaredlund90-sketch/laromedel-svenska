"use client";

import { useState, useCallback } from "react";
import { Link2, Copy, Check, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ShareToolbarProps {
  /** Text content to offer for copying (e.g. teacher guide text, exercise text) */
  copyText?: string;
  /** Label for the copy-text button */
  copyLabel?: string;
  /** Optional custom URL (defaults to current page) */
  url?: string;
  /** Compact mode — only icons, no labels */
  compact?: boolean;
  /** Additional className */
  className?: string;
}

type CopiedState = "idle" | "link" | "text";

export function ShareToolbar({
  copyText,
  copyLabel = "Kopiera text",
  url,
  compact = false,
  className = "",
}: ShareToolbarProps) {
  const [copied, setCopied] = useState<CopiedState>("idle");

  const copyToClipboard = useCallback(
    async (text: string, type: CopiedState) => {
      try {
        await navigator.clipboard.writeText(text);
        setCopied(type);
        setTimeout(() => setCopied("idle"), 2000);
      } catch {
        // Fallback for older browsers
        const textarea = document.createElement("textarea");
        textarea.value = text;
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
        setCopied(type);
        setTimeout(() => setCopied("idle"), 2000);
      }
    },
    []
  );

  const handleCopyLink = useCallback(() => {
    const linkUrl = url || window.location.href;
    copyToClipboard(linkUrl, "link");
  }, [url, copyToClipboard]);

  const handleCopyText = useCallback(() => {
    if (copyText) {
      copyToClipboard(copyText, "text");
    }
  }, [copyText, copyToClipboard]);

  const handleShare = useCallback(async () => {
    const shareUrl = url || window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({
          title: document.title,
          url: shareUrl,
        });
      } catch {
        // User cancelled share
      }
    } else {
      handleCopyLink();
    }
  }, [url, handleCopyLink]);

  if (compact) {
    return (
      <div className={`flex items-center gap-1 ${className}`}>
        <Button
          variant="ghost"
          size="icon"
          onClick={handleCopyLink}
          title="Kopiera länk"
          className="h-8 w-8"
        >
          {copied === "link" ? (
            <Check className="h-4 w-4 text-green-600" />
          ) : (
            <Link2 className="h-4 w-4" />
          )}
        </Button>
        {copyText && (
          <Button
            variant="ghost"
            size="icon"
            onClick={handleCopyText}
            title={copyLabel}
            className="h-8 w-8"
          >
            {copied === "text" ? (
              <Check className="h-4 w-4 text-green-600" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </Button>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={handleShare}
          title="Dela"
          className="h-8 w-8"
        >
          <Share2 className="h-4 w-4" />
        </Button>
      </div>
    );
  }

  return (
    <div
      className={`flex flex-wrap items-center gap-2 rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3 dark:border-neutral-700 dark:bg-neutral-800/50 ${className}`}
    >
      <span className="mr-1 text-sm font-medium text-neutral-600 dark:text-neutral-400">
        Dela:
      </span>

      <Button variant="outline" size="sm" onClick={handleCopyLink}>
        {copied === "link" ? (
          <>
            <Check className="h-3.5 w-3.5 text-green-600" />
            <span>Kopierad!</span>
          </>
        ) : (
          <>
            <Link2 className="h-3.5 w-3.5" />
            <span>Kopiera länk</span>
          </>
        )}
      </Button>

      {copyText && (
        <Button variant="outline" size="sm" onClick={handleCopyText}>
          {copied === "text" ? (
            <>
              <Check className="h-3.5 w-3.5 text-green-600" />
              <span>Kopierad!</span>
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5" />
              <span>{copyLabel}</span>
            </>
          )}
        </Button>
      )}

      <Button variant="outline" size="sm" onClick={handleShare}>
        <Share2 className="h-3.5 w-3.5" />
        <span>Dela</span>
      </Button>

      <p className="mt-1 w-full text-xs text-neutral-500 dark:text-neutral-400">
        Tips: Kopiera länken och klistra in i Google Classroom, Teams eller annan lärplattform.
      </p>
    </div>
  );
}
