import { SectionOdd } from './SectionOdd'

type Props = {
  heading?: string
  headingEndAdornment?: string
  subheading?: string
  buttonLeft?: React.ReactNode
  buttonRight?: React.ReactNode
}

export function Hero({
  buttonLeft,
  buttonRight,
  heading = 'Hero heading',
  headingEndAdornment,
  subheading = 'Hero subheading',
}: Props) {
  return (
    <SectionOdd
      heading={heading}
      headingEndAdornment={headingEndAdornment}
      subheading={subheading}
      buttonLeft={buttonLeft}
      buttonRight={null}
    />
  )
}
