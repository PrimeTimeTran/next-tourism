'use client'

import clsx from 'clsx'

type ButtonVariant = 'primary' | 'surface' | 'outline' | 'ghost'
type ButtonTone = 'default' | 'inverse'

const variantClasses: Record<ButtonVariant, Record<ButtonTone, string>> = {
  primary: {
    default: `
      bg-primary
      text-on-primary
      hover:bg-primary-variant
    `,
    inverse: `
      bg-primary
      text-on-primary
      hover:bg-primary-variant
    `,
  },

  outline: {
    default: `
      border border-outline
      text-primary
      hover:bg-primary/10
    `,
    inverse: `
      border border-white/40
      text-white
      hover:bg-white/10
    `,
  },

  ghost: {
    default: `
      text-on-background
      hover:bg-surface
    `,
    inverse: `
      text-white
      hover:bg-white/10
    `,
  },

  surface: {
    default: `
      bg-surface
      text-on-surface
      border border-outline
      hover:bg-surface-variant
    `,
    inverse: `
      bg-white/10
      text-white
      border border-white/30
      hover:bg-white/20
    `,
  },
}

type ButtonProps = {
  children: React.ReactNode
  onClick?: () => void
  variant?: ButtonVariant
  tone?: ButtonTone
  className?: string
}

export function ThemedButton({
  children,
  onClick,
  variant = 'primary',
  tone = 'default',
  className,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        `
        inline-flex items-center justify-center
        px-4 py-2 rounded-md
        font-medium
        transition-colors duration-200
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-primary
        focus-visible:ring-offset-2
        focus-visible:ring-offset-background
        `,
        variantClasses[variant][tone],
        className
      )}
    >
      {children}
    </button>
  )
}
