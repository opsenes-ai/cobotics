import Link from "next/link";
import { LayoutDashboard } from "lucide-react";

export function ConsoleSidebar() {
  return (
    <aside className="hidden w-60 shrink-0 border-r bg-background md:block">
      <nav className="flex flex-col gap-1 p-3">
        <Link
          href="/console"
          className="flex items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-muted"
        >
          <LayoutDashboard className="size-4" />
          Dashboard
        </Link>
      </nav>
    </aside>
  );
}
