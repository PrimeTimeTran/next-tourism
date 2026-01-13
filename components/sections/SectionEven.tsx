type Props = {
  heading?: string
  subheading?: string
}

export function SectionEven({
  heading = 'Hero heading',
  subheading = 'Hero subheading',
}: Props) {
  return (
    <section className='min-h-[70vh] bg-secondary text-foreground'>
      <h1 className='text-4xl font-bold'>{heading}</h1>
      <p className='mt-4 text-lg'>{subheading}</p>
    </section>
  )
}
