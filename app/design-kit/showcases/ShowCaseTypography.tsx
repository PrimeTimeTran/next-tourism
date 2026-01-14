export function ShowCaseTypography() {
  return (
    <div className='space-y-6 bg-background p-8 rounded-lg'>
      <h2 className='text-2xl font-semibold text-on-background'>Typography</h2>

      {/* Headings */}
      <div className='space-y-2'>
        <h1 className='text-4xl font-bold text-primary'>Heading 1</h1>
        <h2 className='text-3xl font-semibold text-primary'>Heading 2</h2>
        <h3 className='text-2xl font-semibold text-primary'>Heading 3</h3>
      </div>

      {/* Body text */}
      <p className='text-on-background'>
        This is standard body text. It should be readable on the background
        surface and feel comfortable for long content.
      </p>

      {/* Muted text */}
      <p className='text-on-surface-muted text-sm'>
        Muted text for captions, metadata, timestamps, or hints.
      </p>

      {/* Emphasis */}
      <p className='text-on-background'>
        You can emphasize text with{' '}
        <span className='text-secondary font-medium'>secondary color</span> or{' '}
        <span className='font-semibold text-primary'>primary emphasis</span>.
      </p>

      {/* Inline elements */}
      <p className='text-on-background'>
        Inline <a className='text-primary underline'>links</a> should be visible
        and accessible.
      </p>

      {/* Code */}
      <code className='block bg-surface-variant text-on-surface px-3 py-2 rounded text-sm'>
        Inline code or technical text
      </code>
    </div>
  )
}
