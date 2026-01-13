'use client'

import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

export function ModeToggleButton() {
  const [mode, setMode] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    if (mode === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('mode', mode)
  }, [mode])

  const toggleMode = () => {
    setMode((m) => (m === 'light' ? 'dark' : 'light'))
  }

  return (
    <button
      onClick={toggleMode}
      className='flex items-center gap-2 rounded border border-outline bg-surface px-3 py-2 text-on-surface'
    >
      {mode === 'light' ? <Moon size={16} /> : <Sun size={16} />}
      <span className='hidden sm:inline'>
        {mode === 'light' ? 'Dark' : 'Light'}
      </span>
    </button>
  )
}
