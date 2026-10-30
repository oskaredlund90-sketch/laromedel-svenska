import type { Metadata } from "next";
import { Redigerare } from "./redigerare";

export const metadata: Metadata = {
  title: "Redigera återkoppling",
  robots: { index: false, follow: false },
};

export default function RedigeraPage() {
  return <Redigerare />;
}
