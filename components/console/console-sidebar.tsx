import Link from "next/link";
import { Home, Settings } from "lucide-react";
import { AppLogo } from "@/components/shared";

const links = [
  { href: "/console/home", label: "Home", icon: Home },
  { href: "/console/settings", label: "Settings", icon: Settings },
];

export function ConsoleSidebar() {
  return (
    <aside className="w-full shrink-0 border-b bg-background md:w-60 md:border-r md:border-b-0">
      <div className="flex h-14 items-center border-b px-4">
        <AppLogo href="/console/home" />
      </div>
      <nav
        aria-label="Console"
        className="flex gap-1 overflow-x-auto p-3 md:flex-col"
      >
        {links.map(({ href, label, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className="flex shrink-0 items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-muted"
          >
            <Icon className="size-4" />
            {label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
