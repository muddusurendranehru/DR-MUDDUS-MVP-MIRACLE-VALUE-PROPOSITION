import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isPublic = createRouteMatcher([
  '/',
  '/sign-in(.*)',
  '/sign-up(.*)',
  '/auth(.*)',
  // Add any other public pages (e.g. '/about', '/privacy')
]);

export default clerkMiddleware(async (auth, req) => {
  if (!isPublic(req)) {
    const { protect } = await auth();
    await protect();
  }
});

// Config: Run middleware on relevant paths (exclude static files)
export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico).*)',
    '/(api|trpc)(.*)',
  ],
};
