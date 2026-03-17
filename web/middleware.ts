// middleware.ts (root or src/middleware.ts)
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// Define public routes (match your setup)
const isPublic = createRouteMatcher([
  '/',
  '/sign-in(.*)',
  '/sign-up(.*)',
  '/auth(.*)',          // your tabbed page
  // Add others: '/api/public(.*)', '/about', etc.
]);

export default clerkMiddleware(async (auth, req) => {
  // Protect non-public routes (async + destructure = working on this Clerk version)
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
