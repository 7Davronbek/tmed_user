import createMiddleware from 'next-intl/middleware'

const middleware = createMiddleware({
  locales: ['uz', 'ru', 'en'],
  defaultLocale: 'uz',
  localeDetection: false,
})

export default middleware

export const config = {
  matcher: ['/', '/(uz|ru|en)/:page*'],
}