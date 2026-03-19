import Link from "next/link";
import { BookOpen } from "lucide-react";

const AGE_GROUPS = [
  { href: "/lagstadiet", label: "L\u00e5gstadiet (\u00e5k 1\u20133)" },
  { href: "/mellanstadiet", label: "Mellanstadiet (\u00e5k 4\u20136)" },
  { href: "/hogstadiet", label: "H\u00f6gstadiet (\u00e5k 7\u20139)" },
  { href: "/gymnasiet", label: "Gymnasiet" },
];

const SECTIONS = [
  { label: "Kursplan", path: "kursplan" },
  { label: "Grammatik", path: "grammatik" },
  { label: "Skrivverkstad", path: "skrivverkstad" },
  { label: "\u00d6vningar", path: "ovningar" },
  { label: "Textbank", path: "textbank" },
  { label: "Nationella prov", path: "nationella-prov" },
  { label: "Litteraturhistoria", path: "litteraturhistoria" },
  { label: "Ordkunskap", path: "ordkunskap" },
];

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 font-semibold text-neutral-900 dark:text-white">
              <BookOpen className="h-5 w-5" />
              L&auml;romedel i Svenska
            </div>
            <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
              Ett &ouml;ppet digitalt l&auml;romedel i svenska och svenska som andraspr&aring;k
              f&ouml;r alla skol&aring;ldrar.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-neutral-900 dark:text-white">
              V&auml;lj stadie
            </h3>
            <ul className="mt-2 space-y-1 text-sm text-neutral-500 dark:text-neutral-400">
              {AGE_GROUPS.map((g) => (
                <li key={g.href}>
                  <Link
                    href={g.href}
                    className="hover:text-neutral-900 dark:hover:text-white"
                  >
                    {g.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-neutral-900 dark:text-white">
              Resurser (h&ouml;gstadiet)
            </h3>
            <ul className="mt-2 space-y-1 text-sm text-neutral-500 dark:text-neutral-400">
              {SECTIONS.map((s) => (
                <li key={s.path}>
                  <Link
                    href={`/hogstadiet/${s.path}`}
                    className="hover:text-neutral-900 dark:hover:text-white"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-neutral-900 dark:text-white">
              Information
            </h3>
            <ul className="mt-2 space-y-1 text-sm text-neutral-500 dark:text-neutral-400">
              <li>Kursplaner fr&aring;n Skolverkets &ouml;ppna API</li>
              <li>Fritt att anv&auml;nda (CC0)</li>
              <li>
                <Link
                  href="/sok"
                  className="hover:text-neutral-900 dark:hover:text-white"
                >
                  S&ouml;k i l&auml;romedlet
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-neutral-200 pt-8 text-center text-sm text-neutral-400 dark:border-neutral-800">
          L&auml;romedel i Svenska &middot; Kursplansdata fr&aring;n Skolverket
        </div>
      </div>
    </footer>
  );
}
