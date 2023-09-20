import Image from 'next/image'

export default function Home() {
  return (
    <>
      <h2>Welcome</h2>
      Hello, WEB!
      <Image src={'/nextjs.jpg'} alt='six' width={800} height={600}></Image>
    </>
  )
}
