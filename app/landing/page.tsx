import { Hero, SectionOdd, SectionEven } from '../components'
export default function Page() {
  return (
    <main>
      <Hero
        heading='A Hero'
        subheading='A Subheading'
      />
      <SectionEven
        heading='Discover More'
        subheading='Uncover hidden gems and cultural wonders'
      />
    </main>
  )
}
