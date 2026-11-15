"use client";

import { Printer } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SkrivUtKnapp({ text = "Skriv ut" }: { text?: string }) {
  return (
    <Button onClick={() => window.print()}>
      <Printer className="h-4 w-4" /> {text}
    </Button>
  );
}
