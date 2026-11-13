import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export function Cta() {
  return (
    <section id="cta">
      <div className="mx-auto max-w-3xl rounded-lg border bg-card px-4 py-10 text-center sm:px-6 sm:py-16">
        <h2 className="mx-auto max-w-3xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          Put AI to work across your autonomous systems.
        </h2>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/auth/signup" className={buttonVariants({ size: "lg" })}>
            Get started
          </Link>
          <a
            href="https://github.com/opsenes-ai/cobotics"
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ size: "lg", variant: "outline" })}
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
