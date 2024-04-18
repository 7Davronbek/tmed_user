import { getRequestConfig } from 'next-intl/server'
import { notFound } from 'next/navigation'

const locales: string[] = ['en', 'uz', 'ru']

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as any)) notFound()

  return {
    messages: (await import(`./lang/${locale}.json`)).default,
  }
})