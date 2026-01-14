// i18n/provider.tsx
'use client'

import { createContext, useContext } from 'react'

type Messages = Record<string, any>

function getNestedValue(obj: Messages, path: string) {
  return path.split('.').reduce((acc, key) => {
    if (acc && typeof acc === 'object') {
      return acc[key]
    }
    return undefined
  }, obj)
}

type I18nContextValue = {
  locale: string
  t: (key: string) => string
}

const I18nContext = createContext<I18nContextValue | null>(null)

export function I18nProvider({
  locale,
  messages,
  children,
}: {
  locale: string
  messages: Messages
  children: React.ReactNode
}) {
  const t = (key: string) => {
    const value = getNestedValue(messages, key)
    return typeof value === 'string' ? value : key
  }

  return (
    <I18nContext.Provider value={{ locale, t }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used inside I18nProvider')
  return ctx
}
