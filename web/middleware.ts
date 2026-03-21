import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

const isPublic = createRouteMatcher([
  '/',
  '/sign-in(.*)',
  '/sign-up(.*)',
  '/auth(.*)',  // keeps your tabbed page public
  // Blog: public for SEO / anonymous readers (admin publish uses /admin/blog + password)
  '/blog(.*)',
  // Blog admin: password-protected in-app, not via Clerk
  '/api/admin/blog(.*)',
  '/admin/blog(.*)',
]);

export default clerkMiddleware(async (auth, req) => {
  // Do not run Clerk on blog admin API — GET must be public; POST uses ADMIN_PASSWORD in the route only.
  if (req.nextUrl.pathname.startsWith('/api/admin/blog')) {
    return NextResponse.next();
  }
  if (!isPublic(req)) {
    await auth.protect();  // no destructuring, types pass
  }
});

export const config = {
  matcher: [
    // Skip static assets in /public (e.g. /images/*.jpg) — Clerk must not run on them or <img> gets HTML/302.
    '/((?!_next/static|_next/image|favicon.ico|images/).*)',
    '/(api|trpc)(.*)',
  ],
};
