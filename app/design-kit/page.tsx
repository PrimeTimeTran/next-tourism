import {
  Hero,
  ThemeButton,
  SectionEven,
  ModeToggleButton,
} from '../../components'
import { ShowCaseButtons } from './showcase/ShowCaseButtons'

export default function DesignKitPage() {
  return (
    <main>
      <Hero
        heading='A DesignKit Hero Heading'
        subheading='A DesignKit Hero Subheading is useful for additional information about the content'
        buttonLeft={<ThemeButton />}
        buttonRight={<ModeToggleButton />}
      />

      <SectionEven
        heading='Discover More'
        subheading='Uncover hidden gems and cultural wonders'
      />
      <ShowCaseButtons />
    </main>
  )
}
