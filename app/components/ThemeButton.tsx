'use client'

import { applyTheme } from '@/lib/theme/theme'
import { useState } from 'react'


export default function ThemeButton() {
  const [color, setColor] = useState({
    primary: '#EF4444',
    secondary: '#FBBF24',
  })

  function onClick() {
    const newColor =
      color.primary === '#EF4444'
        ? { primary: '#1e40af', secondary: '#EF4444' }
        : { primary: '#EF4444', secondary: '#1e40af' }

    applyTheme(newColor) // apply new color immediately
    setColor(newColor) // update state
  }
  return (
    <button
      onClick={onClick}
      className='bg-(--color-primary) text-white p-2 rounded w-full border'
    >
      Book Now
    </button>
  )
}
