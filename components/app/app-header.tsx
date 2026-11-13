import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { AppLogo } from "@/components/shared";

export function AppHeader() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background">
      <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between px-4">
        <AppLogo />
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
