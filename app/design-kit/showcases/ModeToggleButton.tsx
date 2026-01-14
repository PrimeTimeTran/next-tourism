'use client'

import { useEffect, useState } from 'react'

export function ModeToggleButton() {
  const [mode, setMode] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    document.documentElement.dataset.mode = mode
  }, [mode])

  function toggleMode() {
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  return (
    <button
      onClick={toggleMode}
      className='bg-surface text-on-surface border border-outline px-4 py-2 rounded'
    >
      {mode === 'light' ? '🌙 Dark mode' : '☀️ Light mode'}
    </button>
  )
}
