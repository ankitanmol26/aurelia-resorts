import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Only protect /admin routes
  if (pathname.startsWith("/admin")) {
    // Allow access to the login page itself
    if (pathname === "/admin/login") {
      return NextResponse.next();
    }

    const authCookie = request.cookies.get("aurelia_admin_auth");

    // If the cookie is missing or invalid, redirect to login
    if (!authCookie || authCookie.value !== "authenticated") {
      const loginUrl = new URL("/admin/login", request.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
