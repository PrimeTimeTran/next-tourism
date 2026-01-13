import { ModeToggleButton } from './ModeToggleButton'

export function ShowcaseButtons() {
  return (
    <div className='flex flex-wrap gap-4 bg-background p-6'>
      <ModeToggleButton />
      {/* Primary */}
      <button className='bg-primary text-on-primary px-4 py-2 rounded'>
        Primary
      </button>

      {/* Primary Variant */}
      <button className='bg-primary-variant text-on-primary px-4 py-2 rounded'>
        Primary Variant
      </button>

      {/* Secondary */}
      <button className='bg-secondary text-on-secondary px-4 py-2 rounded'>
        Secondary
      </button>

      {/* Secondary Variant */}
      <button className='bg-secondary-variant text-on-secondary px-4 py-2 rounded'>
        Secondary Variant
      </button>

      {/* Surface (neutral / low emphasis) */}
      <button className='bg-surface text-on-surface border border-outline px-4 py-2 rounded'>
        Surface
      </button>

      {/* Surface Variant */}
      <button className='bg-surface-variant text-on-surface px-4 py-2 rounded'>
        Surface Variant
      </button>

      {/* Success */}
      <button className='bg-success text-on-success px-4 py-2 rounded'>
        Success
      </button>

      {/* Warning */}
      <button className='bg-warning text-on-warning px-4 py-2 rounded'>
        Warning
      </button>

      {/* Error / Destructive */}
      <button className='bg-error text-on-error px-4 py-2 rounded'>
        Error
      </button>

      {/* Info */}
      <button className='bg-info text-on-info px-4 py-2 rounded'>Info</button>

      {/* Outline */}
      <button className='border border-outline text-on-surface px-4 py-2 rounded'>
        Outline
      </button>

      {/* Muted / Disabled */}
      <button
        className='bg-surface-variant text-on-surface-muted px-4 py-2 rounded opacity-60 cursor-not-allowed'
        disabled
      >
        Disabled
      </button>
    </div>
  )
}
