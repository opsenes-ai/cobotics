import Link from "next/link";

export function AppHeader() {
  return (
    <header className="border-b bg-background">
      <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between px-4">
        <Link href="/" className="font-semibold">
          Cobotics
        </Link>
      </div>
    </header>
  );
}
