import { Hero, SectionOdd } from '../../components'

export const metadata = {
  title: 'Hanoi Tours & Attractions | YourSiteName',
  description:
    'Discover top attractions, day trips, and hidden gems in Hanoi. Find the best tours and experiences for your visit.',
  openGraph: {
    title: 'Hanoi Tours & Attractions | YourSiteName',
    description:
      'Discover top attractions, day trips, and hidden gems in Hanoi. Find the best tours and experiences for your visit.',
    url: 'https://www.yoursite.com/hanoi',
    images: [
      {
        url: 'https://www.yoursite.com/images/hanoi-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Hanoi skyline',
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
        heading='Hanoi'
        subheading="The Heartbeat of Vietnam's Heritage and Culture"
        heroImage='https://res.klook.com/image/upload/fl_lossy.progressive,q_60/Mobile/City/dgaaktw6p61dijkfekfe.jpg'
      />
    </main>
  )
}
