type Props = {
  heading?: string
  subheading?: string
  children?: React.ReactNode
}

export function Section({
  children,
  heading = 'Hero heading',
  subheading = 'Hero subheading',
}: Props) {
  return (
    <section className='min-h-[70vh] flex flex-col items-center justify-center text-center space-y-4 px-8'>
      <h1>{heading}</h1>
      <p>{subheading}</p>
      {children}
    </section>
  )
}
