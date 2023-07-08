

import { Inter } from 'next/font/google'

import Navbar from '@/components/Navbar'
import Tasks from '@/components/Task';
import Add from '@/components/Add';
import { useState } from 'react';

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [page, setPage] = useState('task');

  return (
    <div>
        <Navbar setPage={setPage}/>
        {page=='task'?<Tasks/> :<Add/>}
        
    </div>
  )
}