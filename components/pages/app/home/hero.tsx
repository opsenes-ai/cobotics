import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="hero" className="py-8 text-center sm:py-16">
      <h1 className="whitespace-nowrap text-[clamp(1.25rem,5.2vw,3.75rem)] font-bold tracking-tight">
        AI for autonomous operations.
      </h1>
      <p className="mx-auto mt-6 max-w-5xl text-balance text-base leading-relaxed text-muted-foreground sm:text-lg">
        Connect autonomous systems, unify operational data, and use AI to
        understand performance, investigate issues, and coordinate
        actions—all in one open-source platform with human oversight.
      </p>
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
    </section>
  );
}
