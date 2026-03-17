import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isPublic = createRouteMatcher([
  '/',
  '/sign-in(.*)',
  '/sign-up(.*)',
  '/auth(.*)',  // tabbed Sign In / Create Account page
  // add any other public pages, e.g. '/about'
]);

export default clerkMiddleware(async (auth, req) => {
  if (!isPublic(req)) {
    const { protect } = await auth();
    await protect();
  }
});

export const config = {
  matcher: [
    // Match all except static files, _next, etc.
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
