import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isProtectedRoute = createRouteMatcher([
  '/dashboard(.*)',
  '/assessment(.*)',
  '/follow-up(.*)',
  '/diet(.*)',
  '/remission-program(.*)',
]);

const isAuthRoute = createRouteMatcher(['/auth(.*)']);

export default clerkMiddleware(async (auth, req) => {
  if (isAuthRoute(req)) return;
  if (isProtectedRoute(req)) {
    await auth.protect();
  }
});

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};
