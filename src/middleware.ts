import { defineMiddleware } from 'astro:middleware';
import { validateSession, SESSION_COOKIE_NAME } from './lib/auth';

export const onRequest = defineMiddleware(async (context, next) => {
  const pathname = context.url.pathname;
  const db = context.locals.runtime?.env?.DB;
  const sessionToken = context.cookies.get(SESSION_COOKIE_NAME)?.value;

  // Initialize locals.user to null
  context.locals.user = null;

  // If a session token exists and DB is available, attempt to validate session
  if (sessionToken && db) {
    try {
      const authResult = await validateSession(db, sessionToken);
      if (authResult) {
        context.locals.user = authResult.user;
      } else {
        // Clear invalid or expired cookie
        context.cookies.delete(SESSION_COOKIE_NAME, { path: '/' });
      }
    } catch (err) {
      console.error('Session validation error in middleware:', err);
    }
  }

  // Handle /admin and /admin/ routes
  if (pathname === '/admin' || pathname === '/admin/') {
    if (context.locals.user) {
      return context.redirect('/admin/dashboard');
    } else {
      return context.redirect('/admin/login');
    }
  }

  // Handle /admin/login
  if (pathname === '/admin/login' || pathname === '/admin/login/') {
    if (context.locals.user) {
      return context.redirect('/admin/dashboard');
    }
    return next();
  }

  // Handle protected /admin/* routes
  if (pathname.startsWith('/admin/')) {
    if (!context.locals.user) {
      const redirectUrl = `/admin/login?redirect=${encodeURIComponent(pathname)}`;
      return context.redirect(redirectUrl);
    }
  }

  return next();
});
