import { Hero, SectionOdd, SectionEven } from '../../components'

export const metadata = {
  title: 'Ho Chi Minh City Tours & Attractions | YourSiteName',
  description:
    'Explore top attractions, day trips, and hidden gems in Ho Chi Minh City.',
  openGraph: {
    title: 'Ho Chi Minh City Tours & Attractions | YourSiteName',
    description:
      'Explore top attractions, day trips, and hidden gems in Ho Chi Minh City.',
    url: 'https://www.yoursite.com/ho-chi-minh-city',
    images: [
      {
        url: 'https://www.yoursite.com/images/hcmc-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Ho Chi Minh City skyline',
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
        heading='Ho Chi Minh City'
        subheading='The Social & Cultural Hub of Vietnam'
        heroImage='/images/bg-hcmc.jpg'
      />
    </main>
  )
}
