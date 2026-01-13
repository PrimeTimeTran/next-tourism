import Image from 'next/image'
type Props = {
  heading?: string
  subheading?: string
  heroImage?: string
  buttonLeft?: React.ReactNode
  buttonRight?: React.ReactNode
}

export function SectionOdd({
  buttonLeft,
  buttonRight,
  heroImage = '',
  heading = 'Hero heading',
  subheading = 'Hero subheading',
}: Props) {
  return (
    <section className='relative min-h-[70vh] flex items-center'>
      <div className='absolute inset-0 bg-linear-to-b from-muted/80 to-muted dark:from-neutral-900 dark:to-neutral-800' />
      <Image
        fill
        alt=''
        priority
        src={heroImage}
        className='object-cover'
      />

      <div className='container mx-auto px-4 relative z-10'>
        <div className='flex flex-col md:flex-row items-center gap-8'>
          <div className='md:w-1/2 flex flex-col gap-4 text-center md:text-left'>
            <h1 className='text-4xl md:text-5xl font-bold text-white'>
              {heading}
            </h1>
            <p className='text-white text-lg md:text-xl'>{subheading}</p>

            <div className='flex flex-wrap gap-4 mt-4 justify-center md:justify-start'>
              {buttonLeft ? (
                buttonLeft
              ) : (
                <button className='bg-white text-primary px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition'>
                  First Steps
                </button>
              )}
              {buttonRight ? (
                buttonRight
              ) : (
                <button className='bg-transparent border border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-primary transition'>
                  Learn More
                </button>
              )}
            </div>
          </div>
          <div className='hidden md:flex md:w-1/2'></div>
        </div>
      </div>
    </section>
  )
}
