'use client'

import { useEffect, useState } from 'react'
import { palettes } from '../lib/colors'

function applyPalette(palette: Record<string, string>) {
  Object.entries(palette).forEach(([key, value]) => {
    const cssVar =
      '--color-' + key.replace(/[A-Z]/g, (m) => '-' + m.toLowerCase())

    document.documentElement.style.setProperty(cssVar, value)
  })
}

export function ThemeButton() {
  const [theme, setTheme] = useState<'ocean' | 'forest'>('ocean')
  const [mode, setMode] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    applyPalette(palettes[theme][mode])
  }, [theme, mode])

  function toggleTheme() {
    setTheme((prev) => (prev === 'ocean' ? 'forest' : 'ocean'))
  }

  function toggleMode() {
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  return (
    <div className='flex gap-2'>
      <button
        onClick={toggleTheme}
        className='
    bg-primary
    text-on-primary
    px-4 py-2 rounded
    border border-outline
    transition-colors duration-200
    hover:bg-primary-variant
    focus-visible:outline-none
    focus-visible:ring-2
    focus-visible:ring-primary
    focus-visible:ring-offset-2
    focus-visible:ring-offset-background
  '
      >
        Switch Theme
      </button>
      <button
        onClick={toggleMode}
        className='
    bg-surface
    text-on-surface
    px-4 py-2 rounded
    border border-outline
    transition-colors duration-200
    hover:bg-surface-variant
    focus-visible:outline-none
    focus-visible:ring-2
    focus-visible:ring-primary
    focus-visible:ring-offset-2
    focus-visible:ring-offset-background
  '
      >
        Switch Mode
      </button>
    </div>
  )
}
