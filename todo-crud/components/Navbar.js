import Image from 'next/image'
import React from 'react'
import { useEffect, useState } from 'react'
import LibraryAddRoundedIcon from '@mui/icons-material/LibraryAddRounded';
// import Link from 'next/link';

const Navbar = ( props) => {
    const [theme, setTheme] = useState(null);

    useEffect(() => {
        return () => {
            if (window.matchMedia('prefers-color-scheme:dark').matches) {
                setTheme('dark');
            } else {
                setTheme('light');
            }
        }
    }, [])

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

    // const handleClickAdd = () => {
    //     setSt('add');
    //     pageF(st);
    // };

    // const handleClickTask = () => {
    //     setSt('task');
    //     pageF(st);
    // };

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
            {/* <Link className='text-bold' href={"/add"} onClick={handleClickAdd}>
                <LibraryAddRoundedIcon className='dark:text-white' fontSize="large" />
            </Link>

            <p className='text-2xl dark:text-white font-mono font-bold' >
                <Link href={"/"} onClick={handleClickTask}>
                    tasks
                </Link>
            </p> */}

            <button>
                <LibraryAddRoundedIcon className='dark:text-white' fontSize="large"  onClick={()=>props.setPage('add')}/>
            </button>

            <button>
                <p className='text-2xl dark:text-white font-mono font-bold' onClick={()=>props.setPage('task')}>
                    tasks
                </p>
            </button>
        </div>
    )
}

export default Navbar

