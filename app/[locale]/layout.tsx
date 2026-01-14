// app/[locale]/layout.tsx
import { notFound } from 'next/navigation'
import { locales, Locale } from '@/i18n/config'
import { getMessages } from '@/i18n/get-messages'
import { I18nProvider } from '@/i18n/provider'

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params

  if (!locales.includes(locale)) {
    notFound()
  }

  const messages = await getMessages(locale)

  return (
    <I18nProvider
      locale={locale}
      messages={messages}
    >
      {children}
    </I18nProvider>
  )
}
