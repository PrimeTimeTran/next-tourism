import ThemeButton from '@/app/components/ThemeButton'
import { strategy } from '@/lib/fetchStrategies'

export default async function HomePage() {
  const res = await fetch(`${process.env.STRAPI_API_URL}/api/tours`, {
    ...strategy,
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
