import ThemeButton from '@/app/components/ThemeButton'

export default async function HomePage() {
  const res = await fetch(`${process.env.STRAPI_API_URL}/api/tours`, {
    // 1. Legacy implementation.
    // Forces fetch on every request
    // cache: 'no-store',

    // 2. Useful when developing locally
    // rebuild every 10 seconds
    next: { revalidate: 10 },

    // 3. For production build
    // fully static at build time
    // next: { revalidate: false },

    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
    },
  })
  const data = await res.json()

  return (
    <div>
      <h1>Tours</h1>
      <ul>
        {data.data.map((t: any) => (
          <li key={t.id}>
            <h1 className=''>{t.title}</h1>
            <h6>{t.caption}</h6>
          </li>
        ))}
      </ul>
      <ThemeButton />
    </div>
  )
}
