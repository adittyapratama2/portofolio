import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// EN lives at "/", ID at "/id". Files stay under app/[lang], so "/x" is rewritten to "/en/x".
// ponytail: no Accept-Language negotiation; add it when a third locale or a language banner is needed.
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/id" || pathname.startsWith("/id/")) return;

  // The OG image URL emitted in metadata is "/en/opengraph-image"; crawlers should get it without a redirect.
  if (pathname.startsWith("/en/") && pathname.endsWith("/opengraph-image")) return;

  // "/en/..." would duplicate "/..." for search engines, so send it to the canonical URL.
  if (pathname === "/en" || pathname.startsWith("/en/")) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.slice(3) || "/";
    return NextResponse.redirect(url, 308);
  }

  const url = request.nextUrl.clone();
  url.pathname = `/en${pathname === "/" ? "" : pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  // Skip Next internals and any path with a file extension (favicon.ico, sitemap.xml, images).
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
