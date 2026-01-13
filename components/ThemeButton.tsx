'use client'

import { useState } from 'react'

export function ThemeButton() {
  const [colors, setColors] = useState({
    primary: '#EF4444', // red
    secondary: '#FBBF24', // yellow
  })

  function toggleTheme() {
    const newColors =
      colors.primary === '#EF4444'
        ? { primary: '#1e40af', secondary: '#EF4444' } // blue/red
        : { primary: '#EF4444', secondary: '#FBBF24' } // red/yellow

    // Apply CSS variables globally
    Object.entries(newColors).forEach(([key, value]) => {
      document.documentElement.style.setProperty(`--color-${key}`, value)
    })

    setColors(newColors)
  }

  return (
    <button
      onClick={toggleTheme}
      className='bg-primary text-on-primary px-4 py-2 rounded border border-outline'
    >
      Switch Theme
    </button>
  )
}
