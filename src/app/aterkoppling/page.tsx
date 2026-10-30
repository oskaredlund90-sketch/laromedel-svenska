import type { Metadata } from "next";
import { haftesKatalog } from "@/lib/haften";
import { AterkopplingVy } from "./aterkoppling-vy";

export const metadata: Metadata = {
  title: "Återkoppling på din text",
  description: "Kommentarer och nästa steg från din lärare.",
  robots: { index: false, follow: false },
};

export default function AterkopplingPage() {
  return <AterkopplingVy katalog={haftesKatalog()} />;
}
