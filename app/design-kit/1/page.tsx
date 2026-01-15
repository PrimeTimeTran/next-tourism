function Section({ bg, children }: { bg: string; children: React.ReactNode }) {
  return (
    <section className={bg}>
      <div className='container px-6 py-20 md:px-64 md:py-28'>{children}</div>
    </section>
  )
}

export default function One() {
  return (
    <div>
      <Section bg='bg-background'>
        <h2 className='text-3xl font-semibold mb-4'>bg-background</h2>
        <p className='text-on-surface-muted'>Main content surface.</p>
      </Section>

      <Section bg='bg-surface'>
        <h2 className='text-3xl font-semibold mb-4'>bg-surface</h2>
        <p className='text-on-surface-muted'>Main content surface.</p>
      </Section>

      <Section bg='bg-surface-2'>
        <h2 className='text-3xl font-semibold mb-4'>bg-surface-2</h2>
        <p className='text-on-surface-muted'>Main content surface.</p>
      </Section>

      <Section bg='bg-background'>
        <h2 className='text-3xl font-semibold mb-4'>bg-background</h2>
        <p className='text-on-surface-muted'>Main content surface.</p>
      </Section>
    </div>
  )
}
