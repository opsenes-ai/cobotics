import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export function AppHeader() {
  return (
    <header className="border-b bg-background">
      <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between px-4">
        <Link href="/" className="font-semibold">
          Cobotics
        </Link>
        <nav aria-label="Account" className="flex items-center gap-2">
          <Link
            href="/auth/login"
            className={buttonVariants({ variant: "ghost" })}
          >
            Login
          </Link>
          <Link href="/auth/signup" className={buttonVariants()}>
            Get started
          </Link>
        </nav>
      </div>
    </header>
  );
}
