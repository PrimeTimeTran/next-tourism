export function ShowCaseSurfacesAndText() {
  return (
    <div className='space-y-6 bg-background p-8'>
      {/* Page Title */}
      <h1 className='text-4xl font-bold text-on-background'>
        Surface & Typography
      </h1>

      {/* Background */}
      <p className='text-on-background'>
        This text is on <code>bg-background</code>
      </p>

      {/* Surface Card */}
      <div className='bg-surface border border-outline rounded-lg p-6 space-y-2'>
        <h2 className='text-xl font-semibold text-on-surface'>Surface Card</h2>
        <p className='text-on-surface'>Primary content text on a surface.</p>
        <p className='text-on-surface-muted text-sm'>
          Muted supporting text for metadata or descriptions.
        </p>
      </div>

      {/* Surface Variant */}
      <div className='bg-surface-variant rounded-lg p-6'>
        <p className='text-on-surface'>
          Surface variant for secondary sections
        </p>
      </div>

      {/* Divider */}
      <hr className='border-divider' />

      {/* Inline Elements */}
      <p className='text-on-background'>
        Inline <a className='text-primary underline'>links</a> and{' '}
        <span className='text-secondary font-medium'>emphasis</span> should feel
        natural.
      </p>
    </div>
  )
}
