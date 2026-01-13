'use client'

import { useState, useEffect } from 'react'
import {
  X,
  Sun,
  Moon,
  Menu,
  List,
  Building2,
  HandPlatter,
  CalendarCheck,
} from 'lucide-react'

import { NavItemConfig } from './nav.types'
import { NavItem } from './NavItem'

const NAV_ITEMS: NavItemConfig[] = [
  {
    label: 'Activity',
    href: '/activities',
    icon: <List size={18} />,
    children: [
      {
        href: '/tours/food-and-drink',
        label: 'Food & Drink Tours',
      },
      {
        href: '/tours/adventure-outdoors',
        label: 'Adventure & Outdoors',
      },
      {
        href: '/tours/cultural-heritage',
        label: 'Cultural & Heritage',
      },
      {
        href: '/tours/wellness-spa',
        label: 'Wellness & Spa',
      },
      {
        href: '/tours/eco-tourism',
        label: 'Eco-Tourism',
      },
    ],
  },
  {
    label: 'Daily',
    href: '/daily',
    icon: <CalendarCheck size={18} />,
    children: [
      {
        href: '/da-nang',
        label: 'Da Nang',
        imgBG:
          'https://www.pelago.com/img/destinations/da-nang/0328-0214_da-nang-xlarge.jpg',
        children: [],
      },
      {
        href: '/ho-chi-minh-city',
        label: 'Ho Chi Minh City',
        imgBG:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/DJI_0550-HDR-Pano.jpg/2560px-DJI_0550-HDR-Pano.jpg',
        children: [
          { label: 'Cu Chi Tunnels', href: '/hcmc/cu-chi' },
          { label: 'Mekong Delta', href: '/hcmc/mekong' },
        ],
      },
      {
        href: '/hanoi',
        label: 'Hanoi',
        imgBG:
          'https://res.klook.com/image/upload/fl_lossy.progressive,q_60/Mobile/City/dgaaktw6p61dijkfekfe.jpg',
        children: [
          { label: 'Old Quarter', href: '/hanoi/old-quarter' },
          { label: 'Ha Long Bay', href: '/hanoi/ha-long' },
          { label: 'Lao Cai', href: '/hanoi/sapa' },
          { label: 'Sapa', href: '/hanoi/sapa' },
        ],
      },
      {
        href: '/nha-trang',
        label: 'Nha Trang',
        imgBG:
          'https://image.vietnam.travel/sites/default/files/styles/top_banner/public/2021-05/Nha%20Trang%20Travel%20Guide%20Vietnam%20Tourism.jpg?itok=Pciu0qod',
        children: [],
      },
    ],
  },
  {
    label: 'City Tours',
    href: '/city-tours',
    icon: <Building2 size={18} />,
    children: [
      { label: 'Da Nang', href: '/da-nang' },
      { label: 'Hanoi', href: '/hanoi' },
      { label: 'Ho Chi Minh City', href: '/ho-chi-minh-city' },
      { label: 'Nha Trang', href: '/nha-trang' },
    ],
  },
  {
    label: 'Travel Services',
    icon: <HandPlatter size={18} />,
    href: '/travel-services',
    children: [
      { label: 'Visa', href: '/visa' },
      { label: 'Vehicle Rentals', href: '/vehicle-rentals' },
      { label: 'Currency Exchange', href: '/currency' },
    ],
  },
]

export function AppHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const [mode, setMode] = useState<'light' | 'dark'>(() => {
    if (typeof window === 'undefined') return 'light'
    return localStorage.getItem('mode') === 'dark' ? 'dark' : 'light'
  })

  useEffect(() => {
    document.documentElement.dataset.mode = mode
    localStorage.setItem('mode', mode)
  }, [mode])

  function toggleMode() {
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  function handleLinkClick() {
    setMobileOpen(false)
  }

  return (
    <header className='bg-surface border-b border-divider'>
      <div className='mx-auto max-w-7xl px-4'>
        <div className='flex h-16 items-center justify-between'>
          {/* Brand */}
          <a
            href='/'
            className='flex items-center gap-2'
          >
            <div className='flex h-8 w-8 items-center justify-center rounded bg-primary text-on-primary font-bold'>
              A
            </div>
            <span className='font-semibold text-on-surface'>AppName</span>
          </a>

          {/* Desktop nav */}
          <nav className='hidden md:flex items-center gap-6'>
            {NAV_ITEMS.map((item) => (
              <NavItem
                key={item.label}
                item={item}
                variant='desktop'
              />
            ))}
          </nav>

          {/* Actions */}
          <div className='flex items-center gap-2'>
            <button
              onClick={toggleMode}
              className='flex items-center gap-2 rounded border border-outline bg-surface px-3 py-2 text-on-surface'
            >
              {mode === 'light' ? <Moon size={16} /> : <Sun size={16} />}
              <span className='hidden sm:inline'>
                {mode === 'light' ? 'Dark' : 'Light'}
              </span>
            </button>

            <button
              onClick={() => setMobileOpen((p) => !p)}
              className='md:hidden rounded border border-outline bg-surface p-2 text-on-surface'
            >
              {mobileOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className='md:hidden fixed inset-x-0 top-16 z-50 bg-surface border-t border-divider'>
          <nav className='flex flex-col gap-1 p-4'>
            {NAV_ITEMS.map((item) => (
              <NavItem
                key={item.label}
                item={item}
                variant='mobile'
                onLinkClick={handleLinkClick} // Pass the handleLinkClick function here
              />
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
