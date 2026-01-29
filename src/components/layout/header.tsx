"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";
import { UserNav } from "./user-nav";
import { HeaderNav } from "./header-nav";

export function Header() {
  const { data: session } = useSession();

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

          <HeaderNav />
        </div>

        <div className="flex items-center gap-4">
          {session?.user ? (
            <UserNav user={session.user} />
          ) : (
            <Link
              href="/auth/signin"
              className="px-4 py-2 text-sm font-medium text-primary-foreground bg-primary rounded-md hover:bg-primary/90 transition-colors"
            >
              Sign In
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
