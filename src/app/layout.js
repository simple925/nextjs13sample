import Link from 'next/link'
import './globals.css'
import { Controll } from './Controll'

export const metadata = {
  title: '어 어서오고',
  description: '렁륜로',
}
export default async function RootLayout({ children }) {
    // server에서 환경변수 가져오기
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL+`topics`, { cache: 'no-store' })
    const topics = await res.json()
  return (
    <html>
      <body>
        <h1><Link href="/">WEB</Link></h1>
        <ol>
          {topics.map(topic=>{
            return <li key={topic.id}><Link href={`/read/${topic.id}`}>{topic.title}</Link></li>
          })}
        </ol>
        {children}
        <Controll />
        </body>
    </html>
  )
}
