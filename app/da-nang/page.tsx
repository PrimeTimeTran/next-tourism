import { Hero, SectionOdd } from '../../components'

export const metadata = {
  title: 'Da Nang Tours & Attractions | YourSiteName',
  description:
    'Explore top attractions, beaches, and hidden gems in Da Nang. Find the best tours and experiences for your visit.',
  openGraph: {
    title: 'Da Nang Tours & Attractions | YourSiteName',
    description:
      'Explore top attractions, beaches, and hidden gems in Da Nang. Find the best tours and experiences for your visit.',
    url: 'https://www.yoursite.com/da-nang',
    images: [
      {
        url: 'https://www.yoursite.com/images/da-nang-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Da Nang skyline',
      },
    ],
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function Page() {
  return (
    <main>
      <SectionOdd
        heading='Da Nang'
        subheading='The Gateway to Vietnam’s Central Coast'
        heroImage='/images/bg-da-nang.jpg'
      />
    </main>
  )
}
