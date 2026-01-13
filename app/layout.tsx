import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { AppHeader, Footer } from '@/components'

import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Vietnam Tour',
  description:
    'Explore the beauty and culture of Vietnam with our curated tours and travel guides.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          antialiased
          bg-background
          text-on-surface
          min-h-screen
          flex
          flex-col
        `}
      >
        <AppHeader />
        <main className='flex-1'>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
