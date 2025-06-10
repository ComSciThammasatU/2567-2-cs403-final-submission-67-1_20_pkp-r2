import createNextIntlMiddleware from 'next-intl/middleware';

export default createNextIntlMiddleware({
  locales: ['th', 'en'],
  defaultLocale: 'th',
});

export const config = {
  matcher: ['/((?!_next|.*\\..*).*)'],
};
