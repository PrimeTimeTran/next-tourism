export function ShowCaseSurfaces() {
  return (
    <div className='space-y-6 bg-background p-8 rounded-lg'>
      <h2 className='text-2xl font-semibold text-on-background'>Surfaces</h2>

      {/* Base Surface */}
      <div className='bg-surface border border-outline rounded-lg p-6'>
        <p className='text-on-surface'>
          Base surface (<code>bg-surface</code>)
        </p>
      </div>

      {/* Surface Variant */}
      <div className='bg-surface-variant border border-outline rounded-lg p-6'>
        <p className='text-on-surface'>
          Surface variant (<code>bg-surface-variant</code>)
        </p>
      </div>

      {/* Nested Surfaces */}
      <div className='bg-surface border border-outline rounded-lg p-6 space-y-4'>
        <p className='text-on-surface font-medium'>Nested surfaces</p>

        <div className='bg-surface-variant rounded-md p-4'>
          <p className='text-on-surface-muted text-sm'>
            Useful for cards inside cards
          </p>
        </div>
      </div>

      {/* Divider */}
      <hr className='border-divider' />

      {/* Outline Example */}
      <div className='rounded-lg border border-outline p-6'>
        <p className='text-on-surface'>Outline only (no background)</p>
      </div>
    </div>
  )
}
