import { SectionOdd } from './SectionOdd'

type Props = {
  heading?: string
  subheading?: string
  buttonLeft?: React.ReactNode
  buttonRight?: React.ReactNode
}

export function Hero({
  buttonLeft,
  buttonRight,
  heading = 'Hero heading',
  subheading = 'Hero subheading',
}: Props) {
  return (
    <SectionOdd
      heading={heading}
      subheading={subheading}
      buttonLeft={buttonLeft}
      buttonRight={buttonRight}
    />
  )
}
