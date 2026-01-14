import { Hero, SectionOdd, ThemeButton, SectionEven } from '../../components'
import {
  ShowCaseForms,
  ShowCaseButtons,
  ShowCaseSurfaces,
  ShowCaseTypography,
  ShowCaseSurfacesAndText,
} from './showcases'

export default function DesignKitPage() {
  return (
    <main>
      <Hero
        heading='A DesignKit Hero Heading'
        subheading='A DesignKit Hero Subheading is useful for additional information about the content'
        buttonLeft={<ThemeButton />}
      />
      <ShowCaseButtons />
      <hr />
      <ShowCaseSurfaces />
      <hr />
      <ShowCaseTypography />
      <hr />
      <ShowCaseSurfacesAndText />
      <hr />
      <ShowCaseForms />
      <hr />
      <SectionEven
        heading='Section Even'
        subheading='Uncover hidden gems and cultural wonders'
      />
    </main>
  )
}
