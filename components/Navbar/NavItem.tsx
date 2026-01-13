'use client'

import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import type { NavItemConfig } from './nav.types'

export function NavItem({
  item,
  variant,
  onLinkClick,
}: {
  item: NavItemConfig
  variant: 'desktop' | 'mobile'
  onLinkClick?: () => void
}) {
  const hasChildren = !!item.children?.length
  const [open, setOpen] = useState(false)

  const handleLinkClick = (e: React.MouseEvent) => {
    if (!hasChildren && onLinkClick) {
      onLinkClick()
    }
  }

  const linkClasses = (desktop: boolean) =>
    desktop
      ? 'flex items-center gap-2 px-2 py-2 whitespace-nowrap text-on-surface-muted hover:text-on-surface dark:text-on-surface-muted dark:hover:text-on-surface'
      : 'flex items-center gap-3 rounded px-3 py-2 text-on-surface hover:bg-surface-variant dark:text-on-surface'

  if (variant === 'desktop') {
    return <NavItemDesktop item={item} />
  }

  return (
    <div>
      {hasChildren ? (
        <button
          onClick={() => setOpen((prev) => !prev)} // Toggle open state for children
          className={linkClasses(false) + ' w-full flex justify-between'}
        >
          <span className='flex items-center gap-2'>
            {item.icon}
            {item.label}
          </span>

          <ChevronDown
            size={16}
            className={`transition-transform ${open ? 'rotate-180' : ''}`}
          />
        </button>
      ) : (
        <Link
          href={item.href || '#'}
          className={linkClasses(false) + ' w-full flex items-center gap-2'}
          onClick={handleLinkClick} // Only trigger onLinkClick if no children
        >
          {item.icon}
          {item.label}
        </Link>
      )}

      {hasChildren && open && (
        <div className='ml-4 mt-1 flex flex-col gap-1'>
          {item.children!.map((child) => (
            <NavItem
              key={child.label}
              item={child}
              variant='mobile'
              onLinkClick={onLinkClick} // Pass onLinkClick to child items
            />
          ))}
        </div>
      )}
    </div>
  )
}

// ======= Desktop root item with hover dropdown =======
function NavItemDesktop({ item }: { item: NavItemConfig }) {
  const hasChildren = !!item.children?.length

  return (
    <div className='relative group'>
      {/* Always use Link if href exists */}
      <Link
        href={item.href ?? '#'}
        className='flex items-center gap-2 px-2 py-2 text-on-surface-muted hover:text-on-surface dark:text-on-surface-muted dark:hover:text-on-surface'
      >
        {item.icon && <span className='flex items-center'>{item.icon}</span>}
        <span>{item.label}</span>
        {hasChildren && <ChevronDown size={14} />}
      </Link>

      {/* Children flyout */}
      {hasChildren && (
        <div className='absolute left-0 top-full z-50 pt-2 invisible opacity-0 group-hover:visible group-hover:opacity-100'>
          <div className='min-w-[240px] rounded border border-divider bg-surface shadow-lg whitespace-nowrap'>
            {item.children!.map((child, idx) => (
              <NavItemDesktopChild
                key={child.label + '-' + (child.href ?? idx)}
                item={child}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

function NavItemDesktopChild({ item }: { item: NavItemConfig }) {
  const hasChildren = !!item.children?.length

  return (
    <div className='relative group/child'>
      {/* Use Link if href exists, else div for hover only */}
      {item.href ? (
        <Link
          href={item.href}
          className='block px-4 py-2 text-sm text-on-surface-muted hover:text-on-surface hover:bg-surface-variant dark:text-on-surface-muted dark:hover:text-on-surface dark:hover:bg-surface-variant'
        >
          {item.label}
          {hasChildren && (
            <ChevronDown
              size={12}
              className='inline ml-2 opacity-60'
            />
          )}
        </Link>
      ) : (
        <div className='flex justify-between px-4 py-2 text-sm text-on-surface-muted hover:text-on-surface hover:bg-surface-variant dark:text-on-surface-muted dark:hover:text-on-surface dark:hover:bg-surface-variant cursor-pointer'>
          <span>{item.label}</span>
          {hasChildren && (
            <ChevronDown
              size={12}
              className='opacity-60'
            />
          )}
        </div>
      )}

      {/* Nested flyout */}
      {hasChildren && (
        <div className='absolute left-full top-0 z-50 -ml-1 pl-3 pt-1 invisible opacity-0 group-hover/child:visible group-hover/child:opacity-100'>
          <div className='min-w-[240px] rounded border border-divider bg-surface shadow-lg whitespace-nowrap'>
            {item.children!.map((child, idx) => (
              <NavItemDesktopChild
                key={child.label + '-' + (child.href ?? idx)}
                item={child}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
