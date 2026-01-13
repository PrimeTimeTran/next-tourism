import ThemeButton from '../ThemeButton'
import { SectionOdd } from './SectionOdd'

type Props = {
  heading?: string
  subheading?: string
}

export function Hero({
  heading = 'Hero heading',
  subheading = 'Hero subheading',
}: Props) {
  return (
    <>
      <SectionOdd
        heading={heading}
        subheading={subheading}
      />
      <ThemeButton />
    </>
  )
}
