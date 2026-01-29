"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function HeaderNav() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-4">
      <Link
        href="/articles"
        className={`text-sm font-medium transition-colors hover:text-primary ${
          pathname === "/articles" || pathname.startsWith("/articles/") ? "text-foreground" : "text-muted-foreground"
        }`}
      >
        Articles
      </Link>
      <Link
        href="/about"
        className={`text-sm font-medium transition-colors hover:text-primary ${
          pathname === "/about" ? "text-foreground" : "text-muted-foreground"
        }`}
      >
        About
      </Link>
    </nav>
  );
}
