'use client'

import Image from 'next/image'
import { ThemedButton } from '../ThemedButton'

type Props = {
  heading?: string
  headingEndAdornment?: string
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
  headingEndAdornment,
  subheading = 'Hero subheading',
}: Props) {
  return (
    <section className='relative min-h-[70vh] flex items-center bg-background'>
      <Image
        fill
        alt=''
        priority
        src={heroImage}
        className='object-cover'
      />
      <div className='absolute inset-0 bg-overlay dark:bg-black/60 z-0' />

      <div className='container mx-auto px-4 relative z-10'>
        <div className='flex flex-col md:flex-row items-center gap-8'>
          <div className='md:w-1/2 flex flex-col gap-4 text-center md:text-left'>
            <h1 className='text-4xl md:text-5xl font-bold text-white'>
              {heading}{' '}
              <span className='text-primary'>{headingEndAdornment}</span>
            </h1>

            <p className='text-white/85 text-lg md:text-xl'>{subheading}</p>

            <div className='flex flex-wrap gap-4 mt-4 justify-center md:justify-start'>
              {buttonLeft ? (
                buttonLeft
              ) : (
                <ThemedButton
                  onClick={() => {}}
                  text='First Steps'
                />
              )}
              {buttonRight ? (
                buttonRight
              ) : (
                <button className='bg-primary border border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-primary transition'>
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
