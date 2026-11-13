import type { ReactNode } from "react";
import { AppLayout } from "@/components/app";

export default function LegalLayout({ children }: { children: ReactNode }) {
  return (
    <AppLayout>
      <article className="prose prose-neutral mx-auto max-w-3xl dark:prose-invert">
        {children}
      </article>
    </AppLayout>
  );
}
