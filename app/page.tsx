import { Section, SectionOdd } from '@/components'
import { strategy } from '@/lib/fetchStrategies'

export const dynamic = 'force-dynamic'

export default async function HomePage() {
  const apiUrl = process.env.STRAPI_API_URL
  const token = process.env.STRAPI_API_TOKEN

  // 🚨 Skip Strapi entirely if not configured
  // if (!apiUrl || !token) {
  //   return (
  //     <div className='space-y-6'>
  //       <h1 className='text-3xl font-bold'>Tours</h1>
  //       <p className='text-muted-foreground'>Tours will be available soon.</p>
  //     </div>
  //   )
  // }

  // const res = await fetch(`${apiUrl}/api/tours`, {
  //   ...strategy,
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
  // })

  // const data = await res.json()
  const data = {
    data: [
      { id: 1, title: 'Tour A', caption: 'Explore the wonders of A' },
      { id: 2, title: 'Tour B', caption: 'Discover the beauty of B' },
    ],
  }

  return (
    <main>
      <SectionOdd
        heading='Vietnam'
        subheading='Explore our curated tours and experiences'
      />
      <Section>
        <ul>
          {data?.data?.map((t: any) => (
            <li key={t.id}>
              <h1>{t.title}</h1>
              <h6>{t.caption}</h6>
            </li>
          ))}
        </ul>
      </Section>
    </main>
  )
}
