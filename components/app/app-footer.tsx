import Link from "next/link";

const legalLinks = [
  { href: "/legal/terms", label: "Terms" },
  { href: "/legal/privacy", label: "Privacy" },
  { href: "/legal/cookies", label: "Cookies" },
];

export function AppFooter() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-2 px-4 py-3 text-sm text-muted-foreground sm:h-14 sm:flex-row sm:justify-between sm:py-0">
        <span>&copy; 2026 Cobotics</span>
        <nav aria-label="Legal" className="flex items-center gap-4">
          {legalLinks.map(({ href, label }) => (
            <Link key={href} href={href} className="hover:text-foreground">
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
