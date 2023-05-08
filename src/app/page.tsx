import { Form } from '@/components/Formkv'
// import { Form } from '@/components/FormPsg'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  return (
    <main className={`${inter.className} flex min-h-screen flex-col p-24`}>
      <h2 className='text-4xl text-center tracking-tight mb-8'>Contact with me</h2>
      <div className='flex flex-col max-w-2xl mx-auto text-center'>
        <Form/>
      </div>
    </main>
  )
}
