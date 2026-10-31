import type { Metadata } from "next";
import { Lasresultat } from "./lasresultat";

export const metadata: Metadata = {
  title: "Ditt resultat på läsförståelsen",
  robots: { index: false, follow: false },
};

export default function LasresultatPage() {
  return <Lasresultat />;
}
