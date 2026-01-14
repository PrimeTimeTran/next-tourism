'use client'

import { useEffect, useState } from 'react'
import { palettes } from '../lib/colors'

type Theme = keyof typeof palettes
type Mode = 'light' | 'dark'

function applyPalette(palette: Record<string, string>) {
  Object.entries(palette).forEach(([key, value]) => {
    const cssVar =
      '--color-' + key.replace(/[A-Z]/g, (m) => '-' + m.toLowerCase())

    document.documentElement.style.setProperty(cssVar, value)
  })
}

const paletteKeys = Object.keys(palettes) as Array<keyof typeof palettes>

export function ThemeButton() {
  const [mode, setMode] = useState<Mode>('light')
  const [theme, setTheme] = useState<Theme>('ocean')

  function toggleMode() {
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  function toggleTheme() {
    setTheme((prev) => {
      let next = prev

      while (next === prev) {
        next = paletteKeys[Math.floor(Math.random() * paletteKeys.length)]
      }

      return next
    })
  }

  useEffect(() => {
    applyPalette(palettes[theme][mode])
  }, [theme, mode])

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      const target = e.target as HTMLElement

      if (
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.isContentEditable
      ) {
        return
      }

      // Option (Alt) + T — works on Mac & Windows
      if (e.altKey && e.code === 'KeyT') {
        e.preventDefault()

        setTheme((prev) => {
          let next = prev
          while (next === prev) {
            next = paletteKeys[Math.floor(Math.random() * paletteKeys.length)]
          }

          console.log('⌨️ Theme:', prev, '→', next)
          return next
        })
      }
      if (e.altKey && e.code === 'KeyM') {
        e.preventDefault()

        setMode((prev) => {
          const next = prev === 'light' ? 'dark' : 'light'
          console.log('🌗 Mode:', prev, '→', next)
          return next
        })
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

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
        Sample Themes (⌥ + t)
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
        Switch Mode (⌥ + m)
      </button>
    </div>
  )
}
