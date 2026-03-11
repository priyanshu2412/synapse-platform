import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const DEMO_ROLE = "synapse_role";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (!pathname.startsWith("/dashboard") && !pathname.startsWith("/workspace")) {
    return NextResponse.next();
  }

  const role = req.cookies.get(DEMO_ROLE)?.value;
  if (role === "INDUSTRY" || role === "INDIVIDUAL") {
    return NextResponse.next();
  }

  const url = req.nextUrl.clone();
  url.pathname = "/auth/login";
  url.searchParams.set("callbackUrl", pathname);
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/dashboard/:path*", "/workspace/:path*"]
};
