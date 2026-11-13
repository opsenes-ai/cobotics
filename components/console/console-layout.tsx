import type { ReactNode } from "react";
import { ConsoleHeader } from "./console-header";
import { ConsoleSidebar } from "./console-sidebar";

export function ConsoleLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-dvh flex-col md:flex-row">
      <ConsoleSidebar />
      <div className="flex min-w-0 flex-1 flex-col">
        <ConsoleHeader />
        <main className="flex-1 p-4 sm:p-6">{children}</main>
      </div>
    </div>
  );
}
