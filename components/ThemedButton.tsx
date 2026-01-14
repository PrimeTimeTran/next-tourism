'use client'

export const ThemedButton = ({
  onClick,
  text,
}: {
  onClick: () => void
  text: string
}) => {
  return (
    <button
      onClick={onClick}
      className='
        bg-primary
        text-on-primary
        px-4 py-2 rounded
        border border-outline
        transition-colors duration-200
        hover:bg-primary-variant
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-primary
        focus-visible:ring-offset-2
        focus-visible:ring-offset-background
      '
    >
      {text}
    </button>
  )
}
