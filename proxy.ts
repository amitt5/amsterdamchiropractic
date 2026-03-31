import { auth } from '@/auth';
import { NextResponse } from 'next/server';

export default auth((req) => {
  const { pathname } = req.nextUrl;

  // Admin routes: require authentication
  if (pathname.startsWith('/admin')) {
    const isLoggedIn = !!req.auth;
    const isLoginPage = pathname === '/admin/login';
    if (!isLoggedIn && !isLoginPage) {
      return NextResponse.redirect(new URL('/admin/login', req.url));
    }
    return NextResponse.next();
  }

  // Already locale-prefixed, special/system routes, or root (root redirects via app/page.tsx)
  if (
    pathname.startsWith('/nl') ||
    pathname.startsWith('/en') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/keystatic') ||
    pathname === '/' ||
    pathname === '/demo' ||
    pathname === '/sitemap.xml' ||
    pathname === '/robots.txt'
  ) {
    return NextResponse.next();
  }

  // Backward compat: redirect bare paths like /about → /nl/about
  return NextResponse.redirect(new URL(`/nl${pathname}`, req.url));
});

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon\\.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|mp4|mov|webm)).*)'],
};
