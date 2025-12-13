import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";

export default auth((req) => {
  const isLoggedIn = !!req.auth;
  const pathname = req.nextUrl.pathname;

  // Protected routes that require authentication for interaction
  // Content can be viewed, but interaction requires login
  const interactionRoutes = ["/api/comments", "/api/likes"];

  // Admin routes
  const adminRoutes = ["/admin"];

  // Check admin routes
  if (adminRoutes.some((route) => pathname.startsWith(route))) {
    if (!isLoggedIn) {
      return NextResponse.redirect(
        new URL(`/auth/signin?callbackUrl=${pathname}`, req.url)
      );
    }

    const role = req.auth?.user?.role;
    if (role !== "ADMIN" && role !== "MODERATOR") {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }

  // Check interaction routes
  if (interactionRoutes.some((route) => pathname.startsWith(route))) {
    if (!isLoggedIn) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/admin/:path*", "/api/comments/:path*", "/api/likes/:path*"],
};
