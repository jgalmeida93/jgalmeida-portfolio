import { NextRequest, NextResponse } from "next/server";

const SUPPORTED = ["en", "pt"] as const;

// Old single-locale paths that should now redirect to the localized section route
const LEGACY_ROUTES: Record<string, string> = {
  "/projects": "/work",
  "/projects/": "/work",
  "/experience": "/experience",
  "/experience/": "/experience",
  "/contact": "/contact",
  "/contact/": "/contact",
};

function detectLocale(req: NextRequest): "en" | "pt" {
  const accept = (req.headers.get("accept-language") || "").toLowerCase();
  return accept.startsWith("pt") ? "pt" : "en";
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // 1) Legacy single-locale paths → localized section route
  if (pathname in LEGACY_ROUTES) {
    const locale = detectLocale(req);
    const url = new URL(`/${locale}${LEGACY_ROUTES[pathname]}`, req.url);
    return NextResponse.redirect(url, 308);
  }

  // 2) Already locale-prefixed: continue
  if (SUPPORTED.some((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`))) {
    return NextResponse.next();
  }

  // 3) Root or anything else: redirect to detected locale
  const locale = detectLocale(req);
  const target = pathname === "/" ? `/${locale}` : `/${locale}${pathname}`;
  return NextResponse.redirect(new URL(target, req.url), 308);
}

export const config = {
  // Skip Next internals, API routes, common static assets, and metadata files.
  matcher: [
    "/((?!_next|api|favicon|robots\\.txt|sitemap\\.xml|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|pdf|woff2?|ttf|css|js)).*)",
  ],
};
