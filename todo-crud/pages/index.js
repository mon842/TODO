
import Navbar from '@/components/Navbar'
import { Inter } from 'next/font/google'
import Tasks from './tasks';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
        <Navbar/>
        <Tasks/>
    </div>
  )
}
