import Link from "next/link";
import { Home, Settings } from "lucide-react";

const links = [
  { href: "/console/home", label: "Home", icon: Home },
  { href: "/console/settings", label: "Settings", icon: Settings },
];

export function ConsoleSidebar() {
  return (
    <aside className="hidden w-60 shrink-0 border-r bg-background md:block">
      <nav className="flex flex-col gap-1 p-3">
        {links.map(({ href, label, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className="flex items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-muted"
          >
            <Icon className="size-4" />
            {label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
