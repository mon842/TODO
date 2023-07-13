

import { Inter } from 'next/font/google'

import Navbar from '@/components/Navbar'
import Tasks from '@/components/Task';
import Add from '@/components/Add';
import { useState } from 'react';
import UpdateForm from '@/components/UpdateForm';

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [page, setPage] = useState('task');
  const [id, setId] = useState(null);
  const[ theme, setTheme ] = useState('light');

  const themedata=(data)=>{
    // console.log(theme," form index");
    setTheme(data);
  }
  // console.log(page);
  return (
    <div className='dark:bg-black'>
        <Navbar setPage={setPage} themedata={themedata}/>
        {/* {page=='task'?<Tasks theme={theme} setPage={setPage} /> :<Add theme={theme}/>} */}
        {
          page=='task' && <Tasks theme={theme} setPage={setPage} setId={setId}/> 
        }
        {
          page=='add' && <Add theme={theme}/>
        }
        {
          page=='edit' && <UpdateForm theme={theme} id={id}/>
        }
    </div>
  )
}