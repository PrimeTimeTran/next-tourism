export default function One() {
  return (
    <div>
      {/* Section 1 — Canvas */}
      <section className='py-20 md:py-28 bg-background'>
        <div className='container'>
          <h1 className='text-4xl font-semibold mb-4'>Background</h1>
          <p className='text-on-background/70'>Base app canvas.</p>
        </div>
      </section>

      {/* Section 2 — Primary section surface */}
      <section className='py-20 md:py-28 bg-surface'>
        <div className='container'>
          <h2 className='text-3xl font-semibold mb-4'>Surface</h2>
          <p className='text-on-surface-muted'>Main content surface.</p>
        </div>
      </section>

      {/* Section 3 — Elevated surface */}
      <section className='py-20 md:py-28 bg-surface-2'>
        <div className='container'>
          <h2 className='text-3xl font-semibold mb-4'>Elevated Surface</h2>
          <p className='text-on-surface-muted'>Clear structural separation.</p>
        </div>
      </section>

      {/* Section 4 — Canvas + inset */}
      <section className='py-20 md:py-28 bg-background'>
        <div className='container'>
          <div className='rounded-2xl bg-surface-1 p-10'>
            <h2 className='text-3xl font-semibold mb-4'>Inset Surface</h2>
            <p className='text-on-surface-muted'>Card-style elevation.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
