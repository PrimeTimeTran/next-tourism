type Props = {
  heading?: string
  subheading?: string
  heroImage?: string
}

export function SectionOdd({
  heading = 'Hero heading',
  subheading = 'Hero subheading',
  heroImage = '',
}: Props) {
  return (
    <section className='relative min-h-[70vh] flex items-center'>
      {/* Background Image */}
      <div
        className='absolute inset-0 bg-cover bg-center'
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Optional dark overlay for readability */}
        <div className='absolute inset-0 bg-black/40'></div>
      </div>

      {/* Content */}
      <div className='container mx-auto px-4 relative z-10'>
        <div className='flex flex-col md:flex-row items-center gap-8'>
          {/* Left column / Text */}
          <div className='md:w-1/2 flex flex-col gap-4 text-center md:text-left'>
            <h1 className='text-4xl md:text-5xl font-bold text-white'>
              {heading}
            </h1>
            <p className='text-white text-lg md:text-xl'>{subheading}</p>

            {/* Buttons */}
            <div className='flex flex-wrap gap-4 mt-4 justify-center md:justify-start'>
              <button className='bg-white text-primary px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition'>
                First Steps
              </button>
              <button className='bg-transparent border border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-primary transition'>
                Learn More
              </button>
            </div>
          </div>

          {/* Right column / optional placeholder for layout */}
          <div className='hidden md:flex md:w-1/2'></div>
        </div>
      </div>
    </section>
  )
}
