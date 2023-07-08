import Image from 'next/image'
import React from 'react'
import { useEffect, useState } from 'react'
import NavBtn from './NavBtn';


const Navbar = () => {
    const [theme, setTheme] = useState(null);
    
    // useEffect(() => {    
    //   return () => {
    //     if (window.matchMedia('prefers-color-scheme:dark').matches) {
    //         setTheme('dark');
    //     } else {
    //         setTheme('light');
    //     }
    //   }
    // }, [])
    


    useEffect(() => {
      return () => {
        if (theme == 'light') {
            document.documentElement.classList.add('dark')
            setTheme('dark');
        }
        else {
            setTheme('light');
            document.documentElement.classList.remove('dark')
        }
      }
    }, [theme])
    

    const handleTheme = () => {
        if (theme == 'light') {
            setTheme('dark');
        }
        else {
            setTheme('light');
        }
    };


    return (
        <div className="bg-slate-100 h-20 dark:bg-black flex space-x-16 lg:px-16 md:px-10 px-12 py-5">

            <button onClick={handleTheme}>
                {theme == 'light' ? 
                <Image
                    src={'/moon.png'}
                    alt='moon'
                    height={40}
                    width={40}
                /> : 
                <Image
                    src={'/sun.png'}
                    alt='sun'
                    height={40}
                    width={40}
                />}

            </button>
            <NavBtn  add={true}/>
            <NavBtn  add={false}/>
        </div>
    )
}

export default Navbar