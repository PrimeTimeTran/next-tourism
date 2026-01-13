type Props = {
  heading?: string
  subheading?: string
}

export function SectionOdd({
  heading = 'Hero heading',
  subheading = 'Hero subheading',
}: Props) {
  return (
    <section className='min-h-[70vh] bg-primary flex items-center'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col md:flex-row items-center gap-8'>
          {/* Left column */}
          <div className='md:w-1/2 flex flex-col gap-4'>
            <h1 className='text-4xl md:text-5xl font-bold text-white'>
              {heading}
            </h1>
            <p className='text-white text-lg md:text-xl'>{subheading}</p>

            {/* Buttons */}
            <div className='flex flex-wrap gap-4 mt-4'>
              <button className='bg-white text-primary px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition'>
                Get Started
              </button>
              <button className='bg-transparent border border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-primary transition'>
                Learn More
              </button>
            </div>
          </div>

          {/* Right column (image placeholder) */}
          <div className='md:w-1/2 flex justify-center'>
            <div className='w-full h-64 md:h-96 bg-white/20 border-2 border-dashed border-white flex items-center justify-center text-white text-lg'>
              Image Placeholder
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
