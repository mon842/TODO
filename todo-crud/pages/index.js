

import { Inter } from 'next/font/google'

import Navbar from '@/components/Navbar'
import Tasks from '@/components/Task';
import Add from '@/components/Add';
import { useState } from 'react';

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [page, setPage] = useState('task');
  const[ theme, setTheme ] = useState('light');

  const themedata=(data)=>{
    // console.log(theme," form index");
    setTheme(data);
  }
  return (
    <div className='dark:bg-black'>
        <Navbar setPage={setPage} themedata={themedata}/>
        {page=='task'?<Tasks theme={theme} /> :<Add theme={theme}/>}
        
    </div>
  )
}