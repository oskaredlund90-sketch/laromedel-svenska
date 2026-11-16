import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans_Math, Noto_Sans_Symbols_2, Source_Serif_4 } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { ServiceWorkerRegister } from "@/components/service-worker-register";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Reservtypsnitt för tecken som Geist saknar (→ ≠ ✓ ☐). Utan dem blir tecknen
// rutor i PDF:er som skapas på servern, där det inte finns några systemtypsnitt.
const symbolerMatte = Noto_Sans_Math({ variable: "--font-symboler-matte", weight: "400", subsets: ["math"], preload: false, adjustFontFallback: false });
const symboler = Noto_Sans_Symbols_2({ variable: "--font-symboler", weight: "400", subsets: ["symbols"], preload: false, adjustFontFallback: false });

const serif = Source_Serif_4({ variable: "--font-serif-text", subsets: ["latin"], style: ["normal", "italic"], preload: false });

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Läromedel i Svenska",
    template: "%s | Läromedel i Svenska",
  },
  description:
    "Ett öppet digitalt läromedel i svenska och svenska som andraspråk för alla skolåldrar. Kursplaner, lärarhandledningar, elevtips och AI-verktyg.",
  metadataBase: new URL("https://laromedel-svenska.vercel.app"),
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Svenska",
  },
  other: {
    "mobile-web-app-capable": "yes",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="sv"
      className={`${geistSans.variable} ${geistMono.variable} ${symbolerMatte.variable} ${symboler.variable} ${serif.variable} h-full`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col bg-background text-foreground antialiased">
        <ThemeProvider>
          <ServiceWorkerRegister />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
