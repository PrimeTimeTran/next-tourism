'use client'
import { useI18n } from '@/i18n/provider'

export default function Hero() {
  const { t } = useI18n()
  return <h1>{t('hero.title')}</h1>
}
