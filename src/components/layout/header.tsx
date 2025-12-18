"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold">
              <span className="text-primary">AI</span>
              <span className="text-foreground">truistic</span>
            </span>
          </Link>

          <nav className="flex items-center gap-4">
            <Link
              href="/about"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                pathname === "/about" ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              About
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
