import { Hero, SectionOdd } from '../../components'

export const metadata = {
  title: 'Nha Trang Tours & Attractions | YourSiteName',
  description:
    'Discover the best attractions, beaches, and hidden gems in Nha Trang. Find top tours and experiences for your visit.',
  openGraph: {
    title: 'Nha Trang Tours & Attractions | YourSiteName',
    description:
      'Discover the best attractions, beaches, and hidden gems in Nha Trang. Find top tours and experiences for your visit.',
    url: 'https://www.yoursite.com/nha-trang',
    images: [
      {
        url: 'https://www.yoursite.com/images/nha-trang-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Nha Trang skyline',
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
        heading='Nha Trang'
        subheading='The Coastal Paradise of Vietnam'
        heroImage='https://image.vietnam.travel/sites/default/files/styles/top_banner/public/2021-05/Nha%20Trang%20Travel%20Guide%20Vietnam%20Tourism.jpg?itok=Pciu0qod'
      />
    </main>
  )
}
