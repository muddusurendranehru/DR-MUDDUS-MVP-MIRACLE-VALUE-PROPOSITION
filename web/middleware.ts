import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isPublic = createRouteMatcher([
  '/',
  '/sign-in(.*)',
  '/sign-up(.*)',
  '/auth(.*)',  // keeps your tabbed page public
]);

export default clerkMiddleware(async (auth, req) => {
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
