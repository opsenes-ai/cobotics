import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type AppLogoProps = {
  href?: string;
  className?: string;
};

export function AppLogo({ href = "/", className }: AppLogoProps) {
  return (
    <Link
      href={href}
      className={cn("flex items-center gap-2 font-semibold", className)}
    >
      <Image
        src="/icons/app/dark.png"
        alt=""
        width={28}
        height={28}
        className="size-7"
        priority
      />
      <span>Cobotics</span>
    </Link>
  );
}
