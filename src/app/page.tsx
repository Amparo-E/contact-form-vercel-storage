import { Form } from '@/components/From'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  return (
    <main className={`${inter.className} flex min-h-screen flex-col p-24`}>
      <h2 className='text-4xl text-center tracking-tight mb-8'>Contact with me</h2>
      <Form/>
    </main>
  )
}
