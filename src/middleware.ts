import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware(async (context, next) => {
  // Session verification and admin route protection logic
  const pathname = context.url.pathname;
  
  // Exclude login page and non-admin routes from mandatory auth check
  if (pathname.startsWith('/admin') && !pathname.startsWith('/admin/login')) {
    const sessionCookie = context.cookies.get('saindo_session');
    if (!sessionCookie) {
      // In full implementation, redirect to /admin/login
      // return context.redirect('/admin/login');
    }
  }

  return next();
});
