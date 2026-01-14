import { Locale } from './config'

export async function getMessages(locale: Locale) {
  return (await import(`@/locales/${locale}.json`)).default
}
