import Image from 'next/image'

import { Section, SectionOdd } from '@/components'
import { strategy } from '@/lib/fetchStrategies'

export const dynamic = 'force-dynamic'

const popularTours = [
  {
    id: 1,
    title: 'Halong Bay Cruise',
    thumbnail: '/images/halong-bay-1.jpg',
    caption:
      'Experience the breathtaking beauty of Halong Bay on a luxury cruise.',
  },
  {
    id: 2,
    title: 'Hanoi Old Quarter Walking Tour',
    thumbnail: '/images/hanoi-old-quarter-1.jpg',
    caption:
      'Explore the vibrant streets and rich history of Hanoi’s Old Quarter.',
  },
  {
    id: 3,
    title: 'Hue Imperial City Tour',
    thumbnail: '/images/hue-imperial-citadel-1.jpg',
    caption:
      'Discover the ancient wonders of Hue’s Imperial City and its royal heritage.',
  },
  {
    id: 4,
    title: 'Hoi An Ancient Town Exploration',
    thumbnail: '/images/hoi-an-1.jpg',
    caption:
      'Wander through the charming streets of Hoi An and experience its unique culture.',
  },
]

export function PopularTours() {
  return (
    <div className='container mx-auto px-4 py-12'>
      <h2 className='text-3xl font-bold text-center mb-8'>Popular Tours</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
        {popularTours.map((tour) => (
          <div
            key={tour.id}
            className='bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300 flex flex-col justify-between'
          >
            <div className='w-full h-40 rounded-md mb-4 relative overflow-hidden'>
              <Image
                src={tour.thumbnail}
                alt={tour.title}
                fill
                className='object-cover'
              />
              <div className='absolute inset-0 bg-black/20 rounded-md'></div>
            </div>

            {/* Title */}
            <h3 className='text-xl font-semibold mb-2'>{tour.title}</h3>

            {/* Caption */}
            <p className='text-gray-600 mb-4'>{tour.caption}</p>

            {/* Action Button */}
            <button className='mt-auto bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-variant transition'>
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

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
        heroImage='https://www.hindustantimes.com/ht-img/img/2025/03/25/1600x900/vietnam_1742885224191_1742885224438.jpg'
      />
      <Section>
        <PopularTours />
      </Section>
    </main>
  )
}
