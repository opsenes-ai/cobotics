import type { ReactNode } from "react";
import { AppLayout } from "@/components/app";

export default function LegalLayout({ children }: { children: ReactNode }) {
  return (
    <AppLayout>
      <article className="prose prose-sm sm:prose-base mx-auto max-w-3xl [&_table]:block [&_table]:overflow-x-auto [--tw-prose-body:var(--foreground)] [--tw-prose-bold:var(--foreground)] [--tw-prose-bullets:var(--muted-foreground)] [--tw-prose-headings:var(--foreground)] [--tw-prose-links:var(--foreground)] [--tw-prose-td-borders:var(--border)] [--tw-prose-th-borders:var(--border)]">
        {children}
      </article>
    </AppLayout>
  );
}
