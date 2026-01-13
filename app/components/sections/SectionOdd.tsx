type Props = {
  heading?: string
  subheading?: string
}

export function SectionOdd({
  heading = 'Hero heading',
  subheading = 'Hero subheading',
}: Props) {
  return (
    <section className='min-h-[70vh] bg-primary'>
      <h1>{heading}</h1>
      <p>{subheading}</p>
    </section>
  )
}
