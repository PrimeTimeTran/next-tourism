import Image from 'next/image'

export default async function About() {
  return (
    <div className='mx-auto max-w-6xl px-6 py-16'>
      <h1 className='mb-12 text-4xl font-semibold tracking-tight'>About</h1>

      {/* Founders Section */}
      <section>
        <h2 className='mb-8 text-2xl font-semibold'>Our Founders</h2>

        <div className='grid gap-6 md:grid-cols-3'>
          {founders.map((founder) => (
            <div
              key={founder.name}
              className='rounded-2xl border bg-card p-6 shadow-sm transition hover:shadow-md'
            >
              <div className='mb-4 flex items-center gap-4'>
                {/* Avatar */}
                <div className='relative h-14 w-14 overflow-hidden rounded-full bg-muted'>
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    fill
                    className='object-cover'
                  />
                </div>

                <div>
                  <h3 className='font-medium'>{founder.name}</h3>
                  <p className='text-sm text-muted-foreground'>
                    {founder.role}
                  </p>
                </div>
              </div>

              <p className='text-sm text-muted-foreground'>{founder.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

const founders = [
  {
    name: 'Loi Tran',
    role: 'CEO & Co-Founder',
    bio: 'Focused on building scalable healthcare intelligence systems with real-world impact.',
    image: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe',
  },
  {
    name: 'Don Phan',
    role: 'CTO & Co-Founder',
    bio: 'Leads platform architecture, data pipelines, and AI-driven decision systems.',
    image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91',
  },
  {
    name: 'Tammy Dinh',
    role: 'COO & Co-Founder',
    bio: 'Oversees operations, partnerships, and go-to-market strategy.',
    image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12',
  },
  {
    name: 'Helen Nguyen',
    role: 'CPO & Co-Founder',
    bio: 'Oversees operations, partnerships, and go-to-market strategy.',
    image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12',
  },
]
