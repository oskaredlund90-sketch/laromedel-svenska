import Link from "next/link";
import { BookOpen } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 font-semibold text-neutral-900 dark:text-white">
              <BookOpen className="h-5 w-5" />
              Läromedel i Svenska
            </div>
            <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
              Ett öppet digitalt läromedel i svenska och svenska som andraspråk för alla skolåldrar.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-neutral-900 dark:text-white">Årskurser</h3>
            <ul className="mt-2 space-y-1 text-sm text-neutral-500 dark:text-neutral-400">
              <li><Link href="/lagstadiet" className="hover:text-neutral-900 dark:hover:text-white">Lågstadiet (åk 1–3)</Link></li>
              <li><Link href="/mellanstadiet" className="hover:text-neutral-900 dark:hover:text-white">Mellanstadiet (åk 4–6)</Link></li>
              <li><Link href="/hogstadiet" className="hover:text-neutral-900 dark:hover:text-white">Högstadiet (åk 7–9)</Link></li>
              <li><Link href="/gymnasiet" className="hover:text-neutral-900 dark:hover:text-white">Gymnasiet</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-neutral-900 dark:text-white">Resurser</h3>
            <ul className="mt-2 space-y-1 text-sm text-neutral-500 dark:text-neutral-400">
              <li><Link href="/ai-labbet" className="hover:text-neutral-900 dark:hover:text-white">AI-labbet</Link></li>
              <li><Link href="/grammatik" className="hover:text-neutral-900 dark:hover:text-white">Grammatik</Link></li>
              <li><Link href="/skrivverkstad" className="hover:text-neutral-900 dark:hover:text-white">Skrivverkstad</Link></li>
              <li><Link href="/nationella-prov" className="hover:text-neutral-900 dark:hover:text-white">Nationella prov</Link></li>
              <li><Link href="/ovningar" className="hover:text-neutral-900 dark:hover:text-white">Övningar</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-neutral-900 dark:text-white">Information</h3>
            <ul className="mt-2 space-y-1 text-sm text-neutral-500 dark:text-neutral-400">
              <li>Kursplaner från Skolverkets öppna API</li>
              <li>Fritt att använda (CC0)</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-neutral-200 pt-8 text-center text-sm text-neutral-400 dark:border-neutral-800">
          Läromedel i Svenska &middot; Kursplansdata från Skolverket
        </div>
      </div>
    </footer>
  );
}
